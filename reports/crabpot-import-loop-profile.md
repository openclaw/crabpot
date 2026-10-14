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
| p50WallMs                      | 4361     |
| p95WallMs                      | 4368     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 0.3 MB   |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 110.6 ms |
| p95OpenClawImportMs            | 118.3 ms |
| p50OpenClawActivationMs        | 1.3 ms   |
| p95OpenClawActivationMs        | 1.3 ms   |
| maxPeakRssMb                   | 529.8 MB |
| maxCpuMsEstimate               | 6033 ms  |
| baselineReferenceWallMs        | 4469 ms  |
| baselineReferencePeakRssMb     | 529.5 MB |
| baselineReferenceCpuMsEstimate | 6087 ms  |
| statSampleCount                | 519      |
| rssSampleCount                 | 519      |
| cpuSampleCount                 | 519      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 4469 ms                                  |
| referencePeakRssMb     | 529.5 MB                                 |
| referenceCpuMsEstimate | 6087 ms                                  |
| maxWallMs              | 9852 ms                                  |
| maxPeakRssMb           | 688.3 MB                                 |
| maxCpuMsEstimate       | 9161 ms                                  |
| statSampleCount        | 744                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 110.6 ms        | 1.3 ms            | 0 ms              | 0 MB             | 0 ms             | 4368 ms  | 528.3 MB     | 6019 ms          | 174/174         | 0    |
| 1   | captured | 2        | 118.3 ms        | 1.3 ms            | 0 ms              | 0.3 MB           | 0 ms             | 4361 ms  | 529.8 MB     | 6033 ms          | 173/173         | 0    |
| 2   | captured | 2        | 108.1 ms        | 1.3 ms            | 0 ms              | 0 MB             | 0 ms             | 4345 ms  | 529.2 MB     | 6008 ms          | 172/172         | 0    |
