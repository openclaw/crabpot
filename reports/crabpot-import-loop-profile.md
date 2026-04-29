# Crabpot Import Loop Profile

Generated: deterministic
Mode: subprocess-cold-import-loop
Entrypoint: test/fixtures/lazy-import-plugin.mjs

## Summary

| Metric           | Value |
| ---------------- | ----- |
| runs             | 3     |
| p50WallMs        | 76    |
| p95WallMs        | 80    |
| maxPeakRssMb     | 58 MB |
| maxCpuMsEstimate | 44 ms |
| statSampleCount  | 9     |
| rssSampleCount   | 9     |
| cpuSampleCount   | 9     |
| capturedCount    | 6     |
| failCount        | 0     |

## Samples

| Run | Status   | Captured | Wall  | Peak RSS | CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | ----- | -------- | ------------ | --------------- | ---- |
| 0   | captured | 2        | 80 ms | 57.4 MB  | 44 ms        | 3/3             | 0    |
| 1   | captured | 2        | 76 ms | 57.9 MB  | 42 ms        | 3/3             | 0    |
| 2   | captured | 2        | 75 ms | 58 MB    | 42 ms        | 3/3             | 0    |
