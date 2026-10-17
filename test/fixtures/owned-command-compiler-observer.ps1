param([string]$Root)
$ErrorActionPreference = "Stop"
# Admission and observer compilation are separate bounded stages.
$started = [System.IO.Path]::Combine($Root, "observer-started")
[System.IO.File]::WriteAllText($started + ".pending", '{"pid":' + $PID + '}')
[System.IO.File]::Move($started + ".pending", $started)
function Write-CompilationStage([string]$Name) {
    $file = [System.IO.Path]::Combine($Root, $Name)
    $receipt = '{"atMs":' + [DateTimeOffset]::UtcNow.ToUnixTimeMilliseconds() + '}'
    [System.IO.File]::WriteAllText($file + ".pending", $receipt)
    [System.IO.File]::Move($file + ".pending", $file)
}
Write-CompilationStage "observer-compile-started"
Add-Type -Path ([System.IO.Path]::Combine($PSScriptRoot, 'owned-command-compiler-observer.cs'))
Write-CompilationStage "observer-compile-completed"
[CompilerObserver]::Run($Root)
