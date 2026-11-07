param([string]$Root)
$ErrorActionPreference = "Stop"
$output = [System.IO.StreamWriter]::new([System.IO.Path]::Combine($Root, "processes.jsonl"), $false)
$output.AutoFlush = $true
try {
    $status = Get-MpComputerStatus
    $output.WriteLine((@{ kind = "defender"; atMs = [DateTimeOffset]::UtcNow.ToUnixTimeMilliseconds();
        enabled = $status.AntivirusEnabled; realtime = $status.RealTimeProtectionEnabled;
        engine = $status.AMEngineVersion; signature = $status.AntivirusSignatureVersion } | ConvertTo-Json -Compress))
    $end = [DateTime]::UtcNow.AddMinutes(25)
    while (-not [System.IO.File]::Exists([System.IO.Path]::Combine($Root, "stop")) -and [DateTime]::UtcNow -lt $end) {
        # No arguments, environment or command lines are collected.
        $processes = @(Get-CimInstance Win32_Process -Filter "Name = 'powershell.exe' OR Name = 'node.exe' OR Name = 'cmd.exe' OR Name = 'MsMpEng.exe'" |
            Select-Object ProcessId, ParentProcessId, Name, CreationDate, HandleCount, KernelModeTime, UserModeTime, ReadTransferCount, WriteTransferCount)
        $output.WriteLine((@{ kind = "processes"; atMs = [DateTimeOffset]::UtcNow.ToUnixTimeMilliseconds(); processes = $processes } | ConvertTo-Json -Depth 4 -Compress))
        [System.Threading.Thread]::Sleep(500)
    }
    $events = @(Get-WinEvent -FilterHashtable @{ LogName = "Microsoft-Windows-Windows Defender/Operational"; StartTime = [DateTime]::Now.AddMinutes(-30) } -ErrorAction SilentlyContinue |
        Select-Object -First 100 Id, TimeCreated)
    $output.WriteLine((@{ kind = "defender-events"; events = $events } | ConvertTo-Json -Depth 4 -Compress))
} finally { $output.Dispose() }
