# Crabpot Import Loop Profile

Generated: deterministic
Mode: subprocess-cold-import-loop
Entrypoint: test/fixtures/lazy-import-plugin.mjs

## Summary

| Metric           | Value   |
| ---------------- | ------- |
| runs             | 3       |
| p50WallMs        | 73      |
| p95WallMs        | 74      |
| maxPeakRssMb     | 58.1 MB |
| maxCpuMsEstimate | 54 ms   |
| statSampleCount  | 9       |
| rssSampleCount   | 9       |
| cpuSampleCount   | 9       |
| capturedCount    | 6       |
| failCount        | 0       |

## Samples

| Run | Status   | Captured | Wall  | Peak RSS | CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | ----- | -------- | ------------ | --------------- | ---- |
| 0   | captured | 2        | 74 ms | 58.1 MB  | 54 ms        | 3/3             | 0    |
| 1   | captured | 2        | 73 ms | 58.1 MB  | 49 ms        | 3/3             | 0    |
| 2   | captured | 2        | 71 ms | 53.4 MB  | 47 ms        | 3/3             | 0    |
