param([string]$PipeName, [string]$DiagnosticDirectory, [string]$DiagnosticId)
$ErrorActionPreference = "Stop"
$startupSequence = 0
$startupBytes = 0
$startupClock = [System.Diagnostics.Stopwatch]::StartNew()
$startupUtf8 = [System.Text.UTF8Encoding]::new($false)
# Record script entry before the normal observer can load PowerShell modules.
# Absence still cannot distinguish startup from a failed diagnostic write.
if ($DiagnosticDirectory) {
    try {
        $presence = @()
        foreach ($key in @("SystemRoot", "TEMP", "TMP", "USERPROFILE", "PSModulePath", "LOCALAPPDATA")) {
            $present = ($null -ne [Environment]::GetEnvironmentVariable($key)).ToString().ToLowerInvariant()
            $presence += '"has' + $key + '":' + $present
        }
        $line = [string]::Format([Globalization.CultureInfo]::InvariantCulture,
            '{{"id":"{0}","producer":"powershell","sequence":1,"event":"helper-script-entered","unixMs":{1},"elapsedMs":{2},"clock":"Stopwatch.ElapsedMilliseconds","helperPid":{3},{4}}}' + "`n",
            [Guid]::Parse($DiagnosticId).ToString("D"), [DateTimeOffset]::UtcNow.ToUnixTimeMilliseconds(),
            $startupClock.ElapsedMilliseconds, $PID, ($presence -join ","))
        $length = $startupUtf8.GetByteCount($line)
        if ($length -le 2048) {
            $startupSequence = 1
            $startupBytes = $length
            [System.IO.File]::AppendAllText(
                [System.IO.Path]::Combine($DiagnosticDirectory, "powershell.jsonl"), $line, $startupUtf8)
        }
    } catch {}
}
function Write-StartupTrace([string]$Event, [hashtable]$Fields = @{}) {
    if (-not $DiagnosticDirectory -or $script:startupSequence -ge 32) { return }
    try {
        # The observer must not autoload modules before the owner connects its pipe.
        if ($Event -cnotmatch '^(helper-entered|connect-begin|connect-end|read-begin|read-end|parse-begin|parse-end|owner-monitor-installed|bootstrap-job-assigned|compile-begin|compile-end|native-returned|helper-error|helper-finally-entered|helper-control-disposed)$') { return }
        $culture = [Globalization.CultureInfo]::InvariantCulture
        $detail = ""
        switch ($Event) {
            "helper-entered" {
                if ($Fields.Count -ne 1 -or $Fields.helperPid -isnot [int]) { return }
                $detail = [string]::Format($culture, ',"helperPid":{0}', $Fields.helperPid)
            }
            "read-end" {
                if ($Fields.Count -ne 1 -or $Fields.eof -isnot [bool]) { return }
                $detail = ',"eof":' + $Fields.eof.ToString().ToLowerInvariant()
            }
            "helper-error" {
                if ($Fields.Count -ne 1 -or -not $Fields.ContainsKey("nativeCode")) { return }
                if ($null -eq $Fields.nativeCode) { $code = "null" }
                elseif ($Fields.nativeCode -is [int]) { $code = $Fields.nativeCode.ToString($culture) }
                else { return }
                $detail = ',"nativeCode":' + $code
            }
            default { if ($Fields.Count -ne 0) { return } }
        }
        $script:startupSequence += 1
        $line = [string]::Format($culture,
            '{{"id":"{0}","producer":"powershell","sequence":{1},"event":"{2}","unixMs":{3},"elapsedMs":{4},"clock":"Stopwatch.ElapsedMilliseconds"{5}}}' + "`n",
            [Guid]::Parse($DiagnosticId).ToString("D"), $script:startupSequence, $Event,
            [DateTimeOffset]::UtcNow.ToUnixTimeMilliseconds(), $startupClock.ElapsedMilliseconds, $detail)
        $length = $startupUtf8.GetByteCount($line)
        if ($length -gt 2048 -or $script:startupBytes + $length -gt 65536) { return }
        $script:startupBytes += $length
        [System.IO.File]::AppendAllText(
            [System.IO.Path]::Combine($DiagnosticDirectory, "powershell.jsonl"), $line, $startupUtf8)
    } catch {}
}
Write-StartupTrace "helper-entered" @{ helperPid = $PID }
$pipe = [System.IO.Pipes.NamedPipeClientStream]::new(
    ".", $PipeName, [System.IO.Pipes.PipeDirection]::InOut, [System.IO.Pipes.PipeOptions]::Asynchronous)
$reader = $null
$writer = $null
$bootstrapKill = $null
try {
    Write-StartupTrace "connect-begin"
    $pipe.Connect(5000)
    Write-StartupTrace "connect-end"
    $utf8 = [System.Text.UTF8Encoding]::new($false)
    $reader = [System.IO.StreamReader]::new($pipe, $utf8, $false, 4096, $true)
    $writer = [System.IO.StreamWriter]::new($pipe, $utf8, 4096, $true)
    $writer.AutoFlush = $true
    Write-StartupTrace "read-begin"
    $line = $reader.ReadLine()
    Write-StartupTrace "read-end" @{ eof = ($null -eq $line) }
    if ($null -eq $line) { exit 1 }
    Write-StartupTrace "parse-begin"
    $request = $line | ConvertFrom-Json
    Write-StartupTrace "parse-end"
    # Direct .NET delegates do not depend on the PowerShell runspace while Add-Type blocks.
    $ownerLost = [System.Threading.CancellationTokenSource]::new()
    $killSelf = [System.Delegate]::CreateDelegate([System.Action], [System.Diagnostics.Process]::GetCurrentProcess(), "Kill")
    $cancelOwner = [System.Delegate]::CreateDelegate([System.Action], $ownerLost, "Cancel")
    $bootstrapKill = $ownerLost.Token.Register($killSelf)
    $ownerRead = $reader.ReadLineAsync()
    $ownerRead.ConfigureAwait($false).GetAwaiter().OnCompleted($cancelOwner)
    Write-StartupTrace "owner-monitor-installed"
    # CodeDOM starts csc.exe. Contain this dedicated helper before compiling the
    # command owner; emitting these five fixed declarations starts no compiler.
    if ([IntPtr]::Size -ne 8) { throw "Windows Job ownership requires a 64-bit Windows runtime" }
    $assembly = [AppDomain]::CurrentDomain.DefineDynamicAssembly(
        [System.Reflection.AssemblyName]::new("CrabpotBootstrapNative"),
        [System.Reflection.Emit.AssemblyBuilderAccess]::Run)
    $builder = $assembly.DefineDynamicModule("Native").DefineType(
        "CrabpotBootstrapNative", [System.Reflection.TypeAttributes]"Public, Abstract, Sealed")
    $dllImport = [System.Runtime.InteropServices.DllImportAttribute]
    $attribute = [System.Reflection.Emit.CustomAttributeBuilder]::new(
        $dllImport.GetConstructor([Type[]]@([string])), [object[]]@("kernel32.dll"),
        [System.Reflection.FieldInfo[]]@(
            $dllImport.GetField("SetLastError"), $dllImport.GetField("ExactSpelling"),
            $dllImport.GetField("CharSet")),
        [object[]]@($true, $true, [System.Runtime.InteropServices.CharSet]::Unicode))
    $declarations = @(
        @{ Name = "CreateJobObjectW"; Return = [IntPtr]; Args = [Type[]]@([IntPtr], [string]) },
        @{ Name = "SetInformationJobObject"; Return = [bool]; Args = [Type[]]@([IntPtr], [int], [IntPtr], [uint32]) },
        @{ Name = "AssignProcessToJobObject"; Return = [bool]; Args = [Type[]]@([IntPtr], [IntPtr]) },
        @{ Name = "GetCurrentProcess"; Return = [IntPtr]; Args = [Type[]]@() },
        @{ Name = "CloseHandle"; Return = [bool]; Args = [Type[]]@([IntPtr]) }
    )
    foreach ($declaration in $declarations) {
        $method = $builder.DefineMethod($declaration.Name,
            [System.Reflection.MethodAttributes]"Public, Static, PinvokeImpl",
            $declaration.Return, $declaration.Args)
        $method.SetCustomAttribute($attribute)
        $method.SetImplementationFlags([System.Reflection.MethodImplAttributes]::PreserveSig)
    }
    $native = $builder.CreateType()
    $bootstrapJob = $native::CreateJobObjectW([IntPtr]::Zero, $null)
    if ($bootstrapJob -eq [IntPtr]::Zero) {
        throw [System.ComponentModel.Win32Exception]::new(
            [System.Runtime.InteropServices.Marshal]::GetLastWin32Error(), "CreateJobObjectW(bootstrap)")
    }
    $assigned = $false
    $limits = [IntPtr]::Zero
    try {
        # JOBOBJECT_EXTENDED_LIMIT_INFORMATION on 64-bit Windows: 144 bytes;
        # BasicLimitInformation.LimitFlags is at offset 16.
        $limits = [System.Runtime.InteropServices.Marshal]::AllocHGlobal(144)
        [System.Runtime.InteropServices.Marshal]::Copy([byte[]]::new(144), 0, $limits, 144)
        [System.Runtime.InteropServices.Marshal]::WriteInt32($limits, 16, 0x2000)
        if (-not $native::SetInformationJobObject($bootstrapJob, 9, $limits, 144)) {
            throw [System.ComponentModel.Win32Exception]::new(
                [System.Runtime.InteropServices.Marshal]::GetLastWin32Error(), "SetInformationJobObject(bootstrap)")
        }
        if (-not $native::AssignProcessToJobObject($bootstrapJob, $native::GetCurrentProcess())) {
            throw [System.ComponentModel.Win32Exception]::new(
                [System.Runtime.InteropServices.Marshal]::GetLastWin32Error(), "AssignProcessToJobObject(bootstrap)")
        }
        $assigned = $true
        Write-StartupTrace "bootstrap-job-assigned"
    } finally {
        if ($limits -ne [IntPtr]::Zero) { [System.Runtime.InteropServices.Marshal]::FreeHGlobal($limits) }
        if (-not $assigned) { [void]$native::CloseHandle($bootstrapJob) }
    }
    # Keep the non-inheritable Job handle for this process's lifetime. Helper
    # death closes it and kills compiler descendants; that is not a success receipt.
    Write-StartupTrace "compile-begin"
    Add-Type -Path (Join-Path $PSScriptRoot "owned-command-windows.cs")
    Write-StartupTrace "compile-end"
    [CrabpotCommandJob]::Run(
        $request.application, $request.commandLine, $request.cwd, $request.environment,
        [int]$request.timeout, [int]$request.cleanup, $ownerLost, $bootstrapKill, $writer,
        $DiagnosticDirectory, $DiagnosticId)
    Write-StartupTrace "native-returned"
} catch {
    if ($null -ne $writer) {
        $failure = $_.Exception
        while ($null -ne $failure.InnerException) { $failure = $failure.InnerException }
        $message = $failure.Message
        if ($message.Length -gt 2048) { $message = $message.Substring(0, 2048) }
        $detail = @{ message = $message }
        if ($failure -is [System.ComponentModel.Win32Exception]) {
            $detail.nativeCode = $failure.NativeErrorCode
            $detail.operation = $failure.Message
        }
        Write-StartupTrace "helper-error" @{
            nativeCode = $(if ($failure -is [System.ComponentModel.Win32Exception]) { $failure.NativeErrorCode } else { $null })
        }
        $encoded = [Convert]::ToBase64String([System.Text.Encoding]::UTF8.GetBytes(($detail | ConvertTo-Json -Compress)))
        try { $writer.WriteLine("ERROR " + $encoded) } catch {}
    }
    exit 1
} finally {
    Write-StartupTrace "helper-finally-entered"
    if ($null -ne $bootstrapKill) { $bootstrapKill.Dispose() }
    if ($null -ne $writer) { $writer.Dispose() }
    if ($null -ne $reader) { $reader.Dispose() }
    $pipe.Dispose()
    Write-StartupTrace "helper-control-disposed"
}
