# Crabpot Import Loop Profile

Generated: deterministic
Mode: subprocess-cold-import-loop
Entrypoint: test/fixtures/lazy-import-plugin.mjs

## Summary

| Metric           | Value |
| ---------------- | ----- |
| runs             | 3     |
| p50WallMs        | 67    |
| p95WallMs        | 68    |
| maxPeakRssMb     | 58 MB |
| maxCpuMsEstimate | 38 ms |
| statSampleCount  | 8     |
| rssSampleCount   | 8     |
| cpuSampleCount   | 8     |
| capturedCount    | 6     |
| failCount        | 0     |

## Samples

| Run | Status   | Captured | Wall  | Peak RSS | CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | ----- | -------- | ------------ | --------------- | ---- |
| 0   | captured | 2        | 67 ms | 54.2 MB  | 22 ms        | 2/2             | 0    |
| 1   | captured | 2        | 68 ms | 58 MB    | 38 ms        | 3/3             | 0    |
| 2   | captured | 2        | 64 ms | 48.4 MB  | 36 ms        | 3/3             | 0    |
