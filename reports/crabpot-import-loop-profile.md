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
| p50WallMs                      | 2349     |
| p95WallMs                      | 2376     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 4 MB     |
| maxPluginCpuDeltaMsEstimate    | 42 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 83.8 ms  |
| p95OpenClawImportMs            | 84.8 ms  |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 341.7 MB |
| maxCpuMsEstimate               | 4684 ms  |
| baselineReferenceWallMs        | 2377 ms  |
| baselineReferencePeakRssMb     | 337.7 MB |
| baselineReferenceCpuMsEstimate | 4642 ms  |
| statSampleCount                | 277      |
| rssSampleCount                 | 277      |
| cpuSampleCount                 | 277      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2377 ms                                  |
| referencePeakRssMb     | 337.7 MB                                 |
| referenceCpuMsEstimate | 4642 ms                                  |
| maxWallMs              | 2882 ms                                  |
| maxPeakRssMb           | 340.4 MB                                 |
| maxCpuMsEstimate       | 5129 ms                                  |
| statSampleCount        | 297                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 84.8 ms         | 0.3 ms            | 0 ms              | 1.1 MB           | 42 ms            | 2376 ms  | 338.8 MB     | 4684 ms          | 94/94           | 0    |
| 1   | captured | 2        | 75.4 ms         | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 2334 ms  | 330.3 MB     | 4640 ms          | 91/91           | 0    |
| 2   | captured | 2        | 83.8 ms         | 0.4 ms            | 0 ms              | 4 MB             | 0 ms             | 2349 ms  | 341.7 MB     | 4572 ms          | 92/92           | 0    |
