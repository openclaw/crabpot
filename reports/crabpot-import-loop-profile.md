# Crabpot Import Loop Profile

Generated: deterministic
Mode: subprocess-cold-import-loop
Entrypoint: test/fixtures/lazy-import-plugin.mjs

## Summary

| Metric           | Value |
| ---------------- | ----- |
| runs             | 3     |
| p50WallMs        | 932   |
| p95WallMs        | 956   |
| maxPeakRssMb     | 45    |
| maxCpuMsEstimate | 153   |
| capturedCount    | 6     |
| failCount        | 0     |

## Samples

| Run | Status   | Captured | Wall   | Peak RSS | CPU Estimate | Exit |
| --- | -------- | -------- | ------ | -------- | ------------ | ---- |
| 0   | captured | 2        | 956 ms | 45 MB    | 61 ms        | 0    |
| 1   | captured | 2        | 932 ms | 41.9 MB  | 105 ms       | 0    |
| 2   | captured | 2        | 741 ms | 44.6 MB  | 153 ms       | 0    |
