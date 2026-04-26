# Crabpot Import Loop Profile

Generated: deterministic
Mode: subprocess-cold-import-loop
Entrypoint: test/fixtures/lazy-import-plugin.mjs

## Summary

| Metric           | Value |
| ---------------- | ----- |
| runs             | 3     |
| p50WallMs        | 950   |
| p95WallMs        | 1023  |
| maxPeakRssMb     | 45.5  |
| maxCpuMsEstimate | 208   |
| capturedCount    | 6     |
| failCount        | 0     |

## Samples

| Run | Status   | Captured | Wall    | Peak RSS | CPU Estimate | Exit |
| --- | -------- | -------- | ------- | -------- | ------------ | ---- |
| 0   | captured | 2        | 950 ms  | 44.2 MB  | 208 ms       | 0    |
| 1   | captured | 2        | 1023 ms | 11.7 MB  | 16 ms        | 0    |
| 2   | captured | 2        | 740 ms  | 45.5 MB  | 184 ms       | 0    |
