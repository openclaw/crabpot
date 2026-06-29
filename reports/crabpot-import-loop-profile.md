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
| p50WallMs                      | 2299     |
| p95WallMs                      | 2326     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 10       |
| maxPluginPeakRssDeltaMb        | 1.3 MB   |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 115.1 ms |
| p95OpenClawImportMs            | 118 ms   |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.3 ms   |
| maxPeakRssMb                   | 308.3 MB |
| maxCpuMsEstimate               | 4606 ms  |
| baselineReferenceWallMs        | 2316 ms  |
| baselineReferencePeakRssMb     | 307 MB   |
| baselineReferenceCpuMsEstimate | 4614 ms  |
| statSampleCount                | 271      |
| rssSampleCount                 | 271      |
| cpuSampleCount                 | 271      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2316 ms                                  |
| referencePeakRssMb     | 307 MB                                   |
| referenceCpuMsEstimate | 4614 ms                                  |
| maxWallMs              | 3329 ms                                  |
| maxPeakRssMb           | 319.4 MB                                 |
| maxCpuMsEstimate       | 5893 ms                                  |
| statSampleCount        | 311                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 118 ms          | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 2299 ms  | 289.9 MB     | 4581 ms          | 91/91           | 0    |
| 1   | captured | 2        | 113.4 ms        | 0.3 ms            | 0 ms              | 1.3 MB           | 0 ms             | 2224 ms  | 308.3 MB     | 4477 ms          | 88/88           | 0    |
| 2   | captured | 2        | 115.1 ms        | 0.3 ms            | 10 ms             | 0 MB             | 0 ms             | 2326 ms  | 306 MB       | 4606 ms          | 92/92           | 0    |
