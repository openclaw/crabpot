param([string]$Root, [string]$Assembly)
$ErrorActionPreference = "Stop"
# The parent prepares this assembly before starting the observation deadline.
$started = [System.IO.Path]::Combine($Root, "observer-started")
[System.IO.File]::WriteAllText($started + ".pending", '{"pid":' + $PID + '}')
[System.IO.File]::Move($started + ".pending", $started)
[void][System.Reflection.Assembly]::LoadFrom($Assembly)
[CompilerObserver]::Run($Root)
