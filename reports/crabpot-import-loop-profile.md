# Crabpot Import Loop Profile

Generated: deterministic
Mode: subprocess-cold-import-loop
Entrypoint: test/fixtures/lazy-import-plugin.mjs

## Summary

| Metric           | Value |
| ---------------- | ----- |
| runs             | 3     |
| p50WallMs        | 623   |
| p95WallMs        | 920   |
| maxPeakRssMb     | 0     |
| maxCpuMsEstimate | 0     |
| capturedCount    | 6     |
| failCount        | 0     |

## Samples

| Run | Status   | Captured | Wall   | Peak RSS | CPU Estimate | Exit |
| --- | -------- | -------- | ------ | -------- | ------------ | ---- |
| 0   | captured | 2        | 623 ms | 0 MB     | 0 ms         | 0    |
| 1   | captured | 2        | 619 ms | 0 MB     | 0 ms         | 0    |
| 2   | captured | 2        | 920 ms | 0 MB     | 0 ms         | 0    |
