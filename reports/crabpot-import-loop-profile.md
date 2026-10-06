# Crabpot Import Loop Profile

Generated: deterministic
Mode: openclaw-loader-lifecycle-profile
Entrypoint: test/fixtures/lazy-import-plugin.mjs

## Summary

| Metric                         | Value    |
| ------------------------------ | -------- |
| runs                           | 3        |
| baselineRuns                   | 3        |
| baselineFailCount              | 0        |
| p50WallMs                      | 4299     |
| p95WallMs                      | 4417     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 75       |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 152 ms   |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 108.6 ms |
| p95OpenClawImportMs            | 112.8 ms |
| p50OpenClawActivationMs        | 1.3 ms   |
| p95OpenClawActivationMs        | 1.3 ms   |
| maxPeakRssMb                   | 530.3 MB |
| maxCpuMsEstimate               | 6085 ms  |
| baselineReferenceWallMs        | 4342 ms  |
| baselineReferencePeakRssMb     | 530.9 MB |
| baselineReferenceCpuMsEstimate | 5933 ms  |
| statSampleCount                | 517      |
| rssSampleCount                 | 517      |
| cpuSampleCount                 | 517      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 4342 ms                                  |
| referencePeakRssMb     | 530.9 MB                                 |
| referenceCpuMsEstimate | 5933 ms                                  |
| maxWallMs              | 9569 ms                                  |
| maxPeakRssMb           | 730.3 MB                                 |
| maxCpuMsEstimate       | 8904 ms                                  |
| statSampleCount        | 724                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 112.8 ms        | 1.3 ms            | 75 ms             | 0 MB             | 152 ms           | 4417 ms  | 525.9 MB     | 6085 ms          | 175/175         | 0    |
| 1   | captured | 2        | 108 ms          | 1.3 ms            | 0 ms              | 0 MB             | 0 ms             | 4296 ms  | 529 MB       | 5894 ms          | 171/171         | 0    |
| 2   | captured | 2        | 108.6 ms        | 1.3 ms            | 0 ms              | 0 MB             | 137 ms           | 4299 ms  | 530.3 MB     | 6070 ms          | 171/171         | 0    |
