# Crabpot Import Loop Profile

Generated: deterministic
Mode: subprocess-cold-import-loop
Entrypoint: test/fixtures/lazy-import-plugin.mjs

## Summary

| Metric           | Value |
| ---------------- | ----- |
| runs             | 3     |
| p50WallMs        | 431   |
| p95WallMs        | 517   |
| maxPeakRssMb     | 45.1  |
| maxCpuMsEstimate | 65    |
| capturedCount    | 6     |
| failCount        | 0     |

## Samples

| Run | Status   | Captured | Wall   | Peak RSS | CPU Estimate | Exit |
| --- | -------- | -------- | ------ | -------- | ------------ | ---- |
| 0   | captured | 2        | 431 ms | 45.1 MB  | 65 ms        | 0    |
| 1   | captured | 2        | 517 ms | 0.2 MB   | 0 ms         | 0    |
| 2   | captured | 2        | 350 ms | 0 MB     | 0 ms         | 0    |
