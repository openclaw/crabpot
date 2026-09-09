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
| p50WallMs                      | 2994     |
| p95WallMs                      | 3028     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 1.8 MB   |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 60.8 ms  |
| p95OpenClawImportMs            | 61.8 ms  |
| p50OpenClawActivationMs        | 0.4 ms   |
| p95OpenClawActivationMs        | 0.5 ms   |
| maxPeakRssMb                   | 421.7 MB |
| maxCpuMsEstimate               | 4148 ms  |
| baselineReferenceWallMs        | 3035 ms  |
| baselineReferencePeakRssMb     | 419.9 MB |
| baselineReferenceCpuMsEstimate | 4182 ms  |
| statSampleCount                | 357      |
| rssSampleCount                 | 357      |
| cpuSampleCount                 | 357      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 3035 ms                                  |
| referencePeakRssMb     | 419.9 MB                                 |
| referenceCpuMsEstimate | 4182 ms                                  |
| maxWallMs              | 6952 ms                                  |
| maxPeakRssMb           | 574.7 MB                                 |
| maxCpuMsEstimate       | 6576 ms                                  |
| statSampleCount        | 514                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 60.8 ms         | 0.4 ms            | 0 ms              | 0 MB             | 0 ms             | 3028 ms  | 418.8 MB     | 4042 ms          | 120/120         | 0    |
| 1   | captured | 2        | 58.6 ms         | 0.5 ms            | 0 ms              | 1.8 MB           | 0 ms             | 2994 ms  | 421.7 MB     | 4148 ms          | 119/119         | 0    |
| 2   | captured | 2        | 61.8 ms         | 0.4 ms            | 0 ms              | 0.8 MB           | 0 ms             | 2973 ms  | 420.7 MB     | 4025 ms          | 118/118         | 0    |
