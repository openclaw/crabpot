# Crabpot Import Loop Profile

Generated: deterministic
Mode: subprocess-cold-import-loop
Entrypoint: test/fixtures/lazy-import-plugin.mjs

## Summary

| Metric           | Value |
| ---------------- | ----- |
| runs             | 3     |
| p50WallMs        | 637   |
| p95WallMs        | 662   |
| maxPeakRssMb     | 51.3  |
| maxCpuMsEstimate | 168   |
| capturedCount    | 6     |
| failCount        | 0     |

## Samples

| Run | Status   | Captured | Wall   | Peak RSS | CPU Estimate | Exit |
| --- | -------- | -------- | ------ | -------- | ------------ | ---- |
| 0   | captured | 2        | 662 ms | 48.3 MB  | 168 ms       | 0    |
| 1   | captured | 2        | 633 ms | 51.3 MB  | 103 ms       | 0    |
| 2   | captured | 2        | 637 ms | 50.9 MB  | 78 ms        | 0    |
