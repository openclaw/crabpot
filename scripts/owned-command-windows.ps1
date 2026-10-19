param([string]$PipeName)
$ErrorActionPreference = "Stop"
$pipe = [System.IO.Pipes.NamedPipeClientStream]::new(
    ".", $PipeName, [System.IO.Pipes.PipeDirection]::InOut, [System.IO.Pipes.PipeOptions]::Asynchronous)
$reader = $null
$writer = $null
$bootstrapKill = $null
$attempted = $false
$nativeReturned = $false
$created = $false
$setupReleased = $true
try {
    $pipe.Connect(5000)
    $utf8 = [System.Text.UTF8Encoding]::new($false)
    $reader = [System.IO.StreamReader]::new($pipe, $utf8, $false, 4096, $true)
    $writer = [System.IO.StreamWriter]::new($pipe, $utf8, 4096, $true)
    $writer.AutoFlush = $true
    # No request is sent until PREPARED. Direct .NET callbacks still stop an
    # abandoned helper while native binding or serializer preparation is blocked.
    $killSelf = [System.Delegate]::CreateDelegate([System.Action], [System.Diagnostics.Process]::GetCurrentProcess(), "Kill")
    $preparing = [System.Threading.CancellationTokenSource]::new()
    $cancelPreparation = [System.Delegate]::CreateDelegate([System.Action], $preparing, "Cancel")
    $bootstrapKill = $preparing.Token.Register($killSelf)
    $requestRead = $reader.ReadLineAsync()
    $requestRead.ConfigureAwait($false).GetAwaiter().OnCompleted($cancelPreparation)
    function Write-Phase([string]$Name) {
        try { $writer.WriteLine("PHASE " + $Name + " " + [DateTimeOffset]::UtcNow.ToUnixTimeMilliseconds()) } catch {}
    }
    function Check-Native([bool]$Success, [string]$Operation) {
        if (-not $Success) {
            throw [System.ComponentModel.Win32Exception]::new(
                [System.Runtime.InteropServices.Marshal]::GetLastWin32Error(), $Operation)
        }
    }
    Write-Phase "preparation-started"
    if ([IntPtr]::Size -ne 8) { throw "Windows Job ownership requires a 64-bit Windows runtime" }
    $assembly = [AppDomain]::CurrentDomain.DefineDynamicAssembly(
        [System.Reflection.AssemblyName]::new("CrabpotCommandNative"), [System.Reflection.Emit.AssemblyBuilderAccess]::Run)
    $module = $assembly.DefineDynamicModule("Native")
    function Define-Struct([string]$Name, [object[]]$Fields) {
        $builder = $module.DefineType($Name,
            [System.Reflection.TypeAttributes]"Public, SequentialLayout, Sealed", [ValueType])
        foreach ($field in $Fields) { [void]$builder.DefineField($field[0], $field[1], [System.Reflection.FieldAttributes]::Public) }
        return $builder.CreateType()
    }
    $basicType = Define-Struct "BasicLimits" @(
        @("ProcessTime", [long]), @("JobTime", [long]), @("Flags", [uint32]),
        @("MinimumWorkingSet", [UIntPtr]), @("MaximumWorkingSet", [UIntPtr]), @("ActiveProcessLimit", [uint32]),
        @("Affinity", [UIntPtr]), @("PriorityClass", [uint32]), @("SchedulingClass", [uint32]))
    $ioType = Define-Struct "IoCounters" @(
        @("ReadOperations", [uint64]), @("WriteOperations", [uint64]), @("OtherOperations", [uint64]),
        @("ReadBytes", [uint64]), @("WriteBytes", [uint64]), @("OtherBytes", [uint64]))
    $limitsType = Define-Struct "ExtendedLimits" @(
        @("Basic", $basicType), @("Io", $ioType), @("ProcessMemory", [UIntPtr]), @("JobMemory", [UIntPtr]),
        @("PeakProcessMemory", [UIntPtr]), @("PeakJobMemory", [UIntPtr]))
    $accountingType = Define-Struct "Accounting" @(
        @("UserTime", [long]), @("KernelTime", [long]), @("PeriodUserTime", [long]), @("PeriodKernelTime", [long]),
        @("PageFaults", [uint32]), @("TotalProcesses", [uint32]), @("ActiveProcesses", [uint32]), @("TerminatedProcesses", [uint32]))
    $startupType = Define-Struct "StartupInfo" @(
        @("Size", [uint32]), @("Reserved", [IntPtr]), @("Desktop", [IntPtr]), @("Title", [IntPtr]),
        @("X", [uint32]), @("Y", [uint32]), @("XSize", [uint32]), @("YSize", [uint32]),
        @("XCount", [uint32]), @("YCount", [uint32]), @("Fill", [uint32]), @("Flags", [uint32]),
        @("ShowWindow", [uint16]), @("ReservedSize", [uint16]), @("ReservedBytes", [IntPtr]),
        @("Stdin", [IntPtr]), @("Stdout", [IntPtr]), @("Stderr", [IntPtr]))
    $startupExType = Define-Struct "StartupInfoEx" @(@("Startup", $startupType), @("Attributes", [IntPtr]))
    $processType = Define-Struct "ProcessInfo" @(
        @("Process", [IntPtr]), @("Thread", [IntPtr]), @("ProcessId", [uint32]), @("ThreadId", [uint32]))
    # Explicit Type casts avoid PowerShell selecting SizeOf<T>(T) for RuntimeType.
    if ([System.Runtime.InteropServices.Marshal]::SizeOf([type]$startupExType) -ne 112 -or
        [System.Runtime.InteropServices.Marshal]::SizeOf([type]$limitsType) -ne 144 -or
        [System.Runtime.InteropServices.Marshal]::SizeOf([type]$accountingType) -ne 48) { throw "Windows Job ownership ABI mismatch" }
    $builder = $module.DefineType("CrabpotCommandNative", [System.Reflection.TypeAttributes]"Public, Abstract, Sealed")
    $dllImport = [System.Runtime.InteropServices.DllImportAttribute]
    $attribute = [System.Reflection.Emit.CustomAttributeBuilder]::new(
        $dllImport.GetConstructor([Type[]]@([string])), [object[]]@("kernel32.dll"),
        [System.Reflection.FieldInfo[]]@($dllImport.GetField("SetLastError"), $dllImport.GetField("ExactSpelling"), $dllImport.GetField("CharSet")),
        [object[]]@($true, $true, [System.Runtime.InteropServices.CharSet]::Unicode))
    $declarations = @(
        @{ Name = "CreateJobObjectW"; Return = [IntPtr]; Args = [Type[]]@([IntPtr], [string]) },
        @{ Name = "SetInformationJobObject"; Return = [bool]; Args = [Type[]]@([IntPtr], [int], $limitsType.MakeByRefType(), [uint32]) },
        @{ Name = "QueryInformationJobObject"; Return = [bool]; Args = [Type[]]@([IntPtr], [int], $accountingType.MakeByRefType(), [uint32], [IntPtr]) },
        @{ Name = "TerminateJobObject"; Return = [bool]; Args = [Type[]]@([IntPtr], [uint32]) },
        @{ Name = "CloseHandle"; Return = [bool]; Args = [Type[]]@([IntPtr]) },
        @{ Name = "GetCurrentProcess"; Return = [IntPtr]; Args = [Type[]]@() },
        @{ Name = "GetStdHandle"; Return = [IntPtr]; Args = [Type[]]@([int]) },
        @{ Name = "DuplicateHandle"; Return = [bool]; Args = [Type[]]@([IntPtr], [IntPtr], [IntPtr], [IntPtr].MakeByRefType(), [uint32], [bool], [uint32]) },
        @{ Name = "InitializeProcThreadAttributeList"; Return = [bool]; Args = [Type[]]@([IntPtr], [int], [uint32], [IntPtr].MakeByRefType()) },
        @{ Name = "UpdateProcThreadAttribute"; Return = [bool]; Args = [Type[]]@([IntPtr], [uint32], [IntPtr], [IntPtr], [IntPtr], [IntPtr], [IntPtr]) },
        @{ Name = "DeleteProcThreadAttributeList"; Return = [void]; Args = [Type[]]@([IntPtr]) },
        @{ Name = "CreateProcessW"; Return = [bool]; Args = [Type[]]@([string], [System.Text.StringBuilder], [IntPtr], [IntPtr], [bool], [uint32], [IntPtr], [string], $startupExType.MakeByRefType(), $processType.MakeByRefType()) },
        @{ Name = "WaitForSingleObject"; Return = [uint32]; Args = [Type[]]@([IntPtr], [uint32]) },
        @{ Name = "GetExitCodeProcess"; Return = [bool]; Args = [Type[]]@([IntPtr], [uint32].MakeByRefType()) }
    )
    foreach ($declaration in $declarations) {
        $method = $builder.DefineMethod($declaration.Name,
            [System.Reflection.MethodAttributes]"Public, Static, PinvokeImpl", $declaration.Return, $declaration.Args)
        $method.SetCustomAttribute($attribute)
        $method.SetImplementationFlags([System.Reflection.MethodImplAttributes]::PreserveSig)
    }
    $native = $builder.CreateType()
    # Framework serialization loads directly; neither cmdlet autoload nor CodeDOM
    # is on the command startup path. Simple dictionary format matches Node JSON.
    [void][System.Reflection.Assembly]::Load("System.Runtime.Serialization, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089")
    $settings = [System.Runtime.Serialization.Json.DataContractJsonSerializerSettings]::new()
    $settings.UseSimpleDictionaryFormat = $true
    $serializer = [System.Runtime.Serialization.Json.DataContractJsonSerializer]::new([System.Collections.Generic.Dictionary[string,object]], $settings)
    # Synchronize BEFORE PREPARED: the first valid request must never trigger the
    # preparation self-kill callback. EOF during preparation still kills directly.
    $bootstrapKill.Dispose()
    $bootstrapKill = $null
    if ($preparing.IsCancellationRequested) { throw "command owner disconnected during preparation" }
    $writer.WriteLine("PREPARED")
    $line = $requestRead.GetAwaiter().GetResult()
    if ($null -eq $line -or $line -eq "STOP") { exit 1 }
    $ownerLost = [System.Threading.CancellationTokenSource]::new()
    $cancelOwner = [System.Delegate]::CreateDelegate([System.Action], $ownerLost, "Cancel")
    $bootstrapKill = $ownerLost.Token.Register($killSelf)
    $ownerRead = $reader.ReadLineAsync()
    $ownerRead.ConfigureAwait($false).GetAwaiter().OnCompleted($cancelOwner)
    Write-Phase "request-read"
    Write-Phase "parser-started"
    $inputStream = [System.IO.MemoryStream]::new($utf8.GetBytes($line))
    try { $request = $serializer.ReadObject($inputStream) } finally { $inputStream.Dispose() }
    if ($request.Count -ne 6) { throw "invalid command request fields" }
    foreach ($key in @("application", "commandLine", "cwd", "environment")) {
        if ($request[$key] -isnot [string]) { throw "invalid command request string" }
    }
    foreach ($key in @("timeout", "cleanup")) {
        if ($request[$key] -isnot [int] -or $request[$key] -lt 1) { throw "invalid command request timeout" }
    }
    Write-Phase "parser-completed"
    Write-Phase "native-entered"
    # Dispose synchronizes with a self-kill already in flight. After this handoff,
    # cooperative cancellation and the Job's explicit cleanup own admission.
    $bootstrapKill.Dispose()
    $bootstrapKill = $null
    if ($ownerLost.IsCancellationRequested) { throw "command owner disconnected before admission" }
    $job = [IntPtr]::Zero
    $attributes = [IntPtr]::Zero
    $handles = [IntPtr]::Zero
    $jobList = [IntPtr]::Zero
    $environmentBlock = [IntPtr]::Zero
    $inherited = [IntPtr[]]::new(3)
    $child = [Activator]::CreateInstance($processType)
    $initialized = $false
    $extinct = $false
    $commandFailure = $null
    $setupReleased = $false
    function Active-Processes {
        $accounting = [Activator]::CreateInstance($accountingType)
        Check-Native ($native::QueryInformationJobObject($job, 1, [ref]$accounting, 48, [IntPtr]::Zero)) "QueryInformationJobObject"
        return $accounting.ActiveProcesses
    }
    function Terminate-AndObserve {
        Check-Native ($native::TerminateJobObject($job, 1)) "TerminateJobObject"
        $wait = [System.Diagnostics.Stopwatch]::StartNew()
        while ((Active-Processes) -ne 0) {
            if ($wait.ElapsedMilliseconds -ge $request["cleanup"]) { throw "Windows Job extinction was not observed" }
            [System.Threading.Thread]::Sleep(10)
        }
    }
    try {
        $job = $native::CreateJobObjectW([IntPtr]::Zero, $null)
        Check-Native ($job -ne [IntPtr]::Zero) "CreateJobObjectW"
        $basic = [Activator]::CreateInstance($basicType)
        $basic.Flags = 0x2000 # KILL_ON_JOB_CLOSE, with neither breakaway flag.
        $limits = [Activator]::CreateInstance($limitsType)
        $limits.Basic = $basic
        Check-Native ($native::SetInformationJobObject($job, 9, [ref]$limits, 144)) "SetInformationJobObject"
        $self = $native::GetCurrentProcess()
        for ($i = 0; $i -lt 3; $i++) {
            $handle = [IntPtr]::Zero
            Check-Native ($native::DuplicateHandle($self, $native::GetStdHandle(-10 - $i), $self, [ref]$handle, 0, $true, 2)) "DuplicateHandle(stdio)"
            $inherited[$i] = $handle
        }
        $bytes = [IntPtr]::Zero
        [void]$native::InitializeProcThreadAttributeList([IntPtr]::Zero, 2, 0, [ref]$bytes)
        Check-Native ($bytes -ne [IntPtr]::Zero) "InitializeProcThreadAttributeList(size)"
        $attributes = [System.Runtime.InteropServices.Marshal]::AllocHGlobal($bytes)
        Check-Native ($native::InitializeProcThreadAttributeList($attributes, 2, 0, [ref]$bytes)) "InitializeProcThreadAttributeList"
        $initialized = $true
        $handles = [System.Runtime.InteropServices.Marshal]::AllocHGlobal([IntPtr]::Size * 3)
        for ($i = 0; $i -lt 3; $i++) { [System.Runtime.InteropServices.Marshal]::WriteIntPtr($handles, $i * [IntPtr]::Size, $inherited[$i]) }
        $jobList = [System.Runtime.InteropServices.Marshal]::AllocHGlobal([IntPtr]::Size)
        [System.Runtime.InteropServices.Marshal]::WriteIntPtr($jobList, $job)
        Check-Native ($native::UpdateProcThreadAttribute($attributes, 0, [IntPtr]::new(0x20002), $handles, [IntPtr]::new(24), [IntPtr]::Zero, [IntPtr]::Zero)) "HANDLE_LIST"
        Check-Native ($native::UpdateProcThreadAttribute($attributes, 0, [IntPtr]::new(0x2000d), $jobList, [IntPtr]::new(8), [IntPtr]::Zero, [IntPtr]::Zero)) "JOB_LIST"
        $startupInfo = [Activator]::CreateInstance($startupType)
        $startupInfo.Size = 112
        $startupInfo.Flags = 0x100
        $startupInfo.Stdin = $inherited[0]
        $startupInfo.Stdout = $inherited[1]
        $startupInfo.Stderr = $inherited[2]
        $startup = [Activator]::CreateInstance($startupExType)
        $startup.Startup = $startupInfo
        $startup.Attributes = $attributes
        $environmentBlock = [System.Runtime.InteropServices.Marshal]::StringToHGlobalUni($request["environment"])
        Write-Phase "create-process-pending"
        if ($ownerLost.IsCancellationRequested) { throw "command owner disconnected before admission" }
        # An exception inside the native call leaves admission UNKNOWN. A definite
        # false return is the only post-attempt path eligible for NOT_ADMITTED.
        $attempted = $true
        $created = $native::CreateProcessW($request["application"], [System.Text.StringBuilder]::new($request["commandLine"]),
            [IntPtr]::Zero, [IntPtr]::Zero, $true, 0x08080400, $environmentBlock, $request["cwd"], [ref]$startup, [ref]$child)
        $creationError = [System.Runtime.InteropServices.Marshal]::GetLastWin32Error()
        $nativeReturned = $true
        if (-not $created) { throw [System.ComponentModel.Win32Exception]::new($creationError, "CreateProcessW(JOB_LIST)") }
        Write-Phase "create-process-completed"
        $writer.WriteLine("READY " + $child.ProcessId)
        # Both backing arrays live through CreateProcess and attribute deletion.
        $native::DeleteProcThreadAttributeList($attributes)
        $initialized = $false
        for ($i = 0; $i -lt 3; $i++) {
            Check-Native ($native::CloseHandle($inherited[$i])) "CloseHandle(child stdio)"
            $inherited[$i] = [IntPtr]::Zero
        }
        Check-Native ($native::CloseHandle($child.Thread)) "CloseHandle(child thread)"
        $child.Thread = [IntPtr]::Zero
        $clock = [System.Diagnostics.Stopwatch]::StartNew()
        $timedOut = $false
        while ($true) {
            $wait = $native::WaitForSingleObject($child.Process, 0)
            if ($wait -eq 0) { break }
            Check-Native ($wait -eq 258) "WaitForSingleObject"
            if ($ownerLost.IsCancellationRequested -or $clock.ElapsedMilliseconds -ge $request["timeout"]) {
                $timedOut = $clock.ElapsedMilliseconds -ge $request["timeout"]
                Terminate-AndObserve
                $extinct = $true
                break
            }
            [System.Threading.Thread]::Sleep(10)
        }
        $code = [uint32]0
        Check-Native ($native::GetExitCodeProcess($child.Process, [ref]$code)) "GetExitCodeProcess"
        $writer.WriteLine("EXIT " + $code)
        if (-not $extinct) {
            if ((Active-Processes) -ne 0) { Terminate-AndObserve }
            $extinct = $true
        }
        if ($timedOut) { $writer.WriteLine("TIMEOUT") }
    } catch {
        $commandFailure = $_
    } finally {
        # KILL_ON_JOB_CLOSE is a last fallback, never an extinction receipt.
        try { if ($created -and -not $extinct) { Terminate-AndObserve } }
        catch { if ($null -eq $commandFailure) { $commandFailure = $_ } }
        finally {
            $released = $true
            if ($initialized) { $native::DeleteProcThreadAttributeList($attributes) }
            foreach ($handle in @($inherited) + @($child.Thread, $child.Process, $job)) {
                if ($handle -ne [IntPtr]::Zero -and -not $native::CloseHandle($handle)) { $released = $false }
            }
            foreach ($memory in @($attributes, $handles, $jobList, $environmentBlock)) {
                if ($memory -ne [IntPtr]::Zero) { [System.Runtime.InteropServices.Marshal]::FreeHGlobal($memory) }
            }
            $setupReleased = $released
        }
    }
    if ($null -ne $commandFailure) { throw $commandFailure }
    if (-not $setupReleased) { throw "Windows command setup handles did not close" }
    $writer.WriteLine("CLOSED")
} catch {
    if ($null -ne $bootstrapKill) { $bootstrapKill.Dispose(); $bootstrapKill = $null }
    if ($null -ne $writer -and $null -ne $serializer) {
        $failure = $_.Exception
        while ($null -ne $failure.InnerException) { $failure = $failure.InnerException }
        $message = $failure.Message
        if ($message.Length -gt 2048) { $message = $message.Substring(0, 2048) }
        $detail = [System.Collections.Generic.Dictionary[string,object]]::new()
        $detail["message"] = $message
        if ($failure -is [System.ComponentModel.Win32Exception]) {
            $detail["nativeCode"] = $failure.NativeErrorCode
            $detail["operation"] = $failure.Message
        }
        $errorStream = [System.IO.MemoryStream]::new()
        try {
            $serializer.WriteObject($errorStream, $detail)
            $writer.WriteLine("ERROR " + [Convert]::ToBase64String($errorStream.ToArray()))
            if ($setupReleased -and (-not $attempted -or ($nativeReturned -and -not $created))) {
                $writer.WriteLine("NOT_ADMITTED")
            }
        } catch {} finally { $errorStream.Dispose() }
    }
    exit 1
} finally {
    if ($null -ne $bootstrapKill) { $bootstrapKill.Dispose() }
    if ($null -ne $writer) { $writer.Dispose() }
    if ($null -ne $reader) { $reader.Dispose() }
    $pipe.Dispose()
}
