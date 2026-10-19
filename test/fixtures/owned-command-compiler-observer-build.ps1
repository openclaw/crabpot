param([string]$Root, [string]$Source)
$ErrorActionPreference = "Stop"
function Publish-CompilationReceipt([string]$Name, $Receipt) {
    $file = [System.IO.Path]::Combine($Root, $Name)
    [System.IO.File]::WriteAllText($file + ".pending", ($Receipt | ConvertTo-Json -Compress))
    [System.IO.File]::Move($file + ".pending", $file)
}
Publish-CompilationReceipt "observer-compile-started" @{ atMs = [DateTimeOffset]::UtcNow.ToUnixTimeMilliseconds() }
try {
    Add-Type -LiteralPath $Source -OutputAssembly ([System.IO.Path]::Combine($Root, "observer.pending.dll")) -OutputType Library
    Publish-CompilationReceipt "observer-compile-completed" @{ atMs = [DateTimeOffset]::UtcNow.ToUnixTimeMilliseconds() }
    Publish-CompilationReceipt "observer-compile-result" @{ status = "compiled" }
} catch {
    $message = $_.Exception.Message
    Publish-CompilationReceipt "observer-compile-result" @{ status = "failed"; message = $message.Substring(0, [Math]::Min(1024, $message.Length)) }
    throw
}
