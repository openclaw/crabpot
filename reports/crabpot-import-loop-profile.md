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
| p50WallMs                      | 2422     |
| p95WallMs                      | 2428     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 6.4 MB   |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 75.5 ms  |
| p95OpenClawImportMs            | 94 ms    |
| p50OpenClawActivationMs        | 0.4 ms   |
| p95OpenClawActivationMs        | 0.5 ms   |
| maxPeakRssMb                   | 338.6 MB |
| maxCpuMsEstimate               | 4717 ms  |
| baselineReferenceWallMs        | 2497 ms  |
| baselineReferencePeakRssMb     | 332.2 MB |
| baselineReferenceCpuMsEstimate | 4859 ms  |
| statSampleCount                | 283      |
| rssSampleCount                 | 283      |
| cpuSampleCount                 | 283      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2497 ms                                  |
| referencePeakRssMb     | 332.2 MB                                 |
| referenceCpuMsEstimate | 4859 ms                                  |
| maxWallMs              | 2905 ms                                  |
| maxPeakRssMb           | 340 MB                                   |
| maxCpuMsEstimate       | 5234 ms                                  |
| statSampleCount        | 307                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 94 ms           | 0.5 ms            | 0 ms              | 6.4 MB           | 0 ms             | 2428 ms  | 338.6 MB     | 4717 ms          | 96/96           | 0    |
| 1   | captured | 2        | 73.6 ms         | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 2422 ms  | 327.5 MB     | 4697 ms          | 96/96           | 0    |
| 2   | captured | 2        | 75.5 ms         | 0.4 ms            | 0 ms              | 0.5 MB           | 0 ms             | 2323 ms  | 332.7 MB     | 4493 ms          | 91/91           | 0    |
