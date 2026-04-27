# Crabpot Import Loop Profile

Generated: deterministic
Mode: subprocess-cold-import-loop
Entrypoint: test/fixtures/lazy-import-plugin.mjs

## Summary

| Metric           | Value |
| ---------------- | ----- |
| runs             | 3     |
| p50WallMs        | 617   |
| p95WallMs        | 929   |
| maxPeakRssMb     | 48.2  |
| maxCpuMsEstimate | 255   |
| capturedCount    | 6     |
| failCount        | 0     |

## Samples

| Run | Status   | Captured | Wall   | Peak RSS | CPU Estimate | Exit |
| --- | -------- | -------- | ------ | -------- | ------------ | ---- |
| 0   | captured | 2        | 617 ms | 0 MB     | 0 ms         | 0    |
| 1   | captured | 2        | 612 ms | 0 MB     | 0 ms         | 0    |
| 2   | captured | 2        | 929 ms | 48.2 MB  | 255 ms       | 0    |
