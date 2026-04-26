# Crabpot Import Loop Profile

Generated: deterministic
Mode: subprocess-cold-import-loop
Entrypoint: test/fixtures/lazy-import-plugin.mjs

## Summary

| Metric           | Value |
| ---------------- | ----- |
| runs             | 3     |
| p50WallMs        | 153   |
| p95WallMs        | 165   |
| maxPeakRssMb     | 46.3  |
| maxCpuMsEstimate | 27    |
| capturedCount    | 6     |
| failCount        | 0     |

## Samples

| Run | Status   | Captured | Wall   | Peak RSS | CPU Estimate | Exit |
| --- | -------- | -------- | ------ | -------- | ------------ | ---- |
| 0   | captured | 2        | 150 ms | 46.3 MB  | 27 ms        | 0    |
| 1   | captured | 2        | 165 ms | 45.4 MB  | 17 ms        | 0    |
| 2   | captured | 2        | 153 ms | 45.2 MB  | 2 ms         | 0    |
