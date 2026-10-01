param([string]$PipeName)
try { [Console]::Error.WriteLine("CRABPOT_PHASE helper-entered " + [DateTimeOffset]::UtcNow.ToUnixTimeMilliseconds()) } catch {}
$ErrorActionPreference = "Stop"
$pipe = [System.IO.Pipes.NamedPipeClientStream]::new(
    ".", $PipeName, [System.IO.Pipes.PipeDirection]::InOut, [System.IO.Pipes.PipeOptions]::Asynchronous)
$reader = $null
$writer = $null
$bootstrapKill = $null
try {
    try { [Console]::Error.WriteLine("CRABPOT_PHASE pipe-connect-started " + [DateTimeOffset]::UtcNow.ToUnixTimeMilliseconds()) } catch {}
    $pipe.Connect(5000)
    try { [Console]::Error.WriteLine("CRABPOT_PHASE pipe-connect-returned " + [DateTimeOffset]::UtcNow.ToUnixTimeMilliseconds()) } catch {}
    $utf8 = [System.Text.UTF8Encoding]::new($false)
    $reader = [System.IO.StreamReader]::new($pipe, $utf8, $false, 4096, $true)
    $writer = [System.IO.StreamWriter]::new($pipe, $utf8, 4096, $true)
    $writer.AutoFlush = $true
    $line = $reader.ReadLine()
    if ($null -eq $line) { exit 1 }
    # Direct .NET delegates remain responsive while JSON parsing or compilation blocks.
    $ownerLost = [System.Threading.CancellationTokenSource]::new()
    $killSelf = [System.Delegate]::CreateDelegate([System.Action], [System.Diagnostics.Process]::GetCurrentProcess(), "Kill")
    $cancelOwner = [System.Delegate]::CreateDelegate([System.Action], $ownerLost, "Cancel")
    $bootstrapKill = $ownerLost.Token.Register($killSelf)
    $ownerRead = $reader.ReadLineAsync()
    $ownerRead.ConfigureAwait($false).GetAwaiter().OnCompleted($cancelOwner)
    # Best-effort phase observations never replace the owner-loss watcher or receipts.
    function Write-Phase([string]$Name) {
        try { $writer.WriteLine("PHASE " + $Name + " " + [DateTimeOffset]::UtcNow.ToUnixTimeMilliseconds()) } catch {}
    }
    Write-Phase "request-read"
    Write-Phase "parser-started"
    $request = $line | ConvertFrom-Json
    Write-Phase "parser-completed"
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
    } finally {
        if ($limits -ne [IntPtr]::Zero) { [System.Runtime.InteropServices.Marshal]::FreeHGlobal($limits) }
        if (-not $assigned) { [void]$native::CloseHandle($bootstrapJob) }
    }
    # Keep the non-inheritable Job handle for this process's lifetime. Helper
    # death closes it and kills compiler descendants; that is not a success receipt.
    Write-Phase "bootstrap-contained"
    Write-Phase "compile-started"
    Add-Type -Path (Join-Path $PSScriptRoot "owned-command-windows.cs")
    Write-Phase "compile-completed"
    [CrabpotCommandJob]::Run(
        $request.application, $request.commandLine, $request.cwd, $request.environment,
        [int]$request.timeout, [int]$request.cleanup, $ownerLost, $bootstrapKill, $writer)
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
        $encoded = [Convert]::ToBase64String([System.Text.Encoding]::UTF8.GetBytes(($detail | ConvertTo-Json -Compress)))
        try { $writer.WriteLine("ERROR " + $encoded) } catch {}
    }
    exit 1
} finally {
    if ($null -ne $bootstrapKill) { $bootstrapKill.Dispose() }
    if ($null -ne $writer) { $writer.Dispose() }
    if ($null -ne $reader) { $reader.Dispose() }
    $pipe.Dispose()
}
