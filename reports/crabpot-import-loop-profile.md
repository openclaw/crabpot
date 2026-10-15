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
| p50WallMs                      | 4404     |
| p95WallMs                      | 4470     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 0.8 MB   |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 114.4 ms |
| p95OpenClawImportMs            | 116.3 ms |
| p50OpenClawActivationMs        | 1.3 ms   |
| p95OpenClawActivationMs        | 1.5 ms   |
| maxPeakRssMb                   | 529.3 MB |
| maxCpuMsEstimate               | 6219 ms  |
| baselineReferenceWallMs        | 4518 ms  |
| baselineReferencePeakRssMb     | 528.5 MB |
| baselineReferenceCpuMsEstimate | 6256 ms  |
| statSampleCount                | 527      |
| rssSampleCount                 | 527      |
| cpuSampleCount                 | 527      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 4518 ms                                  |
| referencePeakRssMb     | 528.5 MB                                 |
| referenceCpuMsEstimate | 6256 ms                                  |
| maxWallMs              | 11237 ms                                 |
| maxPeakRssMb           | 733.1 MB                                 |
| maxCpuMsEstimate       | 10292 ms                                 |
| statSampleCount        | 804                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 114.4 ms        | 1.3 ms            | 0 ms              | 0 MB             | 0 ms             | 4391 ms  | 508.4 MB     | 6026 ms          | 174/174         | 0    |
| 1   | captured | 2        | 113.2 ms        | 1.3 ms            | 0 ms              | 0.8 MB           | 0 ms             | 4404 ms  | 529.3 MB     | 5995 ms          | 175/175         | 0    |
| 2   | captured | 2        | 116.3 ms        | 1.5 ms            | 0 ms              | 0 MB             | 0 ms             | 4470 ms  | 526.9 MB     | 6219 ms          | 178/178         | 0    |
