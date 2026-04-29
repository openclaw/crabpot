# Crabpot Import Loop Profile

Generated: deterministic
Mode: subprocess-cold-import-loop
Entrypoint: test/fixtures/lazy-import-plugin.mjs

## Summary

| Metric           | Value |
| ---------------- | ----- |
| runs             | 3     |
| p50WallMs        | 71    |
| p95WallMs        | 73    |
| maxPeakRssMb     | 0     |
| maxCpuMsEstimate | 0     |
| capturedCount    | 6     |
| failCount        | 0     |

## Samples

| Run | Status   | Captured | Wall  | Peak RSS | CPU Estimate | Exit |
| --- | -------- | -------- | ----- | -------- | ------------ | ---- |
| 0   | captured | 2        | 73 ms | 0 MB     | 0 ms         | 0    |
| 1   | captured | 2        | 71 ms | 0 MB     | 0 ms         | 0    |
| 2   | captured | 2        | 71 ms | 0 MB     | 0 ms         | 0    |
