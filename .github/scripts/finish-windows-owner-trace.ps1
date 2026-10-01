# Temporary PR405 diagnostic. Raw ETL/provider metadata never leaves RUNNER_TEMP.
$ErrorActionPreference = 'Stop'
Set-StrictMode -Version Latest
$identity = "$env:GITHUB_RUN_ID-$env:GITHUB_RUN_ATTEMPT"
if ($identity -notmatch '^\d+-\d+$') { throw 'Invalid trace owner' }
$session = "crabpot-cold-owner-$identity"
$root = Join-Path $env:RUNNER_TEMP $session
$output = Join-Path $env:RUNNER_TEMP 'crabpot-owner-startup.json'
$report = [ordered]@{ status = 'incomplete'; session = $session; observationSeconds = 180;
    maxMiB = 16; negativeEvidenceUsable = $false; events = @(); lostCounters = @{} }
$events = [System.Collections.Generic.List[object]]::new()
$total = 0
$first = $null
$last = $null
$stage = 'receipt'
try {
    $receipt = Get-Content -Raw -LiteralPath (Join-Path $root 'ownership.json') | ConvertFrom-Json
    if ($receipt.session -ne $session -or $receipt.identity -ne $identity -or -not $receipt.created) {
        throw 'No owned collector was created'
    }
    # PLA's synchronous Stop joins flushing. Never stop/delete an unrecorded set.
    $stage = 'stop'
    $collector = New-Object -ComObject Pla.DataCollectorSet
    # Query's documented default namespace is Service on supported Windows hosts.
    $collector.Query($session, $null)
    if ($collector.Status -ne 0) { $collector.Stop($true) }
    $collector.Query($session, $null)
    if ($collector.Status -ne 0) { throw 'Collector did not stop' }
    $collector.Delete()
    $report.collectorStopped = $true
    $report.started = [bool]$receipt.started
    $report.startedAt = $receipt.startedAt
    $traces = @(Get-ChildItem -LiteralPath $root -Filter '*.etl' -File)
    if ($traces.Count -ne 1 -or $traces[0].Length -gt 17MB) { throw 'Unexpected trace file bounds' }
    $report.traceBytes = $traces[0].Length
    $stage = 'summary'
    $summary = Join-Path $root 'summary.txt'
    & tracerpt.exe $traces[0].FullName -o NUL -summary $summary -of XML -y | Out-Null
    if ($LASTEXITCODE -ne 0) { throw 'Native trace decoding failed' }
    if ((Get-Item -LiteralPath $summary).Length -gt 1MB) { throw 'Trace summary exceeded bounds' }
    # tracerpt's summary is text, independent of the event dump's -of setting.
    # Unknown/localized counter labels remain unknown, never an inferred zero.
    foreach ($line in Get-Content -LiteralPath $summary) {
        if ($line -match '^\s*(?:Number of |Total )?(Events|Buffers) Lost\s*[:=]\s*(\d+)\s*$') {
            $report.lostCounters["$($Matches[1])Lost"] = [long]$Matches[2]
        }
    }
    $stage = 'events'
    foreach ($event in Get-WinEvent -Path $traces[0].FullName -Oldest) {
        $total++
        if ($total -gt 100000) { throw 'Trace event count exceeded bounds' }
        $time = $event.TimeCreated.ToUniversalTime().ToString('o')
        if ($null -eq $first) { $first = $time }
        $last = $time
        [xml]$xml = $event.ToXml()
        $data = @{}
        foreach ($field in $xml.SelectNodes('//*[local-name()="EventData"]/*[local-name()="Data"]')) {
            $data[$field.GetAttribute('Name')] = $field.InnerText
        }
        $row = $null
        if ($event.ProviderName -eq 'Microsoft-Windows-Kernel-Process' -and $data.ContainsKey('ImageName')) {
            $image = [System.IO.Path]::GetFileName($data.ImageName).ToLowerInvariant()
            if ($image -in @('powershell.exe', 'csc.exe', 'node.exe', 'git.exe')) {
                $row = [ordered]@{ provider = 'Kernel-Process'; eventId = $event.Id; time = $time; image = $image }
                foreach ($key in @('ProcessID', 'ParentProcessID')) {
                    if ($data.ContainsKey($key) -and $data[$key] -match '^\d+$') { $row[$key] = [long]$data[$key] }
                }
            }
        } elseif ($event.ProviderName -eq 'Microsoft-Windows-DotNETRuntime' -and $data.ContainsKey('ModuleILPath')) {
            $module = [System.IO.Path]::GetFileName($data.ModuleILPath).ToLowerInvariant()
            if ($module -in @('microsoft.powershell.commands.utility.dll', 'system.management.automation.dll', 'microsoft.csharp.dll')) {
                $row = [ordered]@{ provider = 'CLR-Loader'; eventId = $event.Id; time = $time;
                    ProcessID = $event.ProcessId; module = $module }
            }
        }
        if ($null -ne $row) {
            if ($events.Count -ge 256) {
                $report.eventsTruncated = $true
                throw 'Sanitized event count exceeded bounds'
            }
            $events.Add($row)
        }
    }
    # Presence is usable. Missing events are never proof: clock coverage, loss and
    # retained helper start/stop lineage must be assessed against the failed trace.
    $report.status = 'observed'
} catch {
    $report.failedStage = $stage
    $report.errorType = $_.Exception.GetType().Name
    $report.errorCode = $_.Exception.HResult
} finally {
    # Preserve useful bounded presence evidence even if a later event is invalid.
    $report.totalEvents = $total
    $report.firstEventAt = $first
    $report.lastEventAt = $last
    $report.events = $events.ToArray()
    $json = $report | ConvertTo-Json -Depth 8
    if ([System.Text.Encoding]::UTF8.GetByteCount($json) -gt 128KB) { throw 'Sanitized report exceeded bounds' }
    [System.IO.File]::WriteAllText($output, $json)
    Write-Output "WINDOWS_OWNER_TRACE_RESULT status=$($report.status) negativeEvidenceUsable=false"
}
if ($report.status -ne 'observed') { exit 1 }
