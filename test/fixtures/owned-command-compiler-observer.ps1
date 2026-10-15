param([string]$Root)
$ErrorActionPreference = "Stop"
# Admission and observer compilation are separate bounded stages.
$started = [System.IO.Path]::Combine($Root, "observer-started")
[System.IO.File]::WriteAllText($started + ".pending", '{"pid":' + $PID + '}')
[System.IO.File]::Move($started + ".pending", $started)
Add-Type -Path ([System.IO.Path]::Combine($PSScriptRoot, 'owned-command-compiler-observer.cs'))
[CompilerObserver]::Run($Root)
