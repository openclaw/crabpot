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
| p50WallMs                      | 2121     |
| p95WallMs                      | 2139     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 11       |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 47.1 ms  |
| p95OpenClawImportMs            | 47.3 ms  |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 419.1 MB |
| maxCpuMsEstimate               | 2988 ms  |
| baselineReferenceWallMs        | 2128 ms  |
| baselineReferencePeakRssMb     | 421.3 MB |
| baselineReferenceCpuMsEstimate | 3018 ms  |
| statSampleCount                | 253      |
| rssSampleCount                 | 253      |
| cpuSampleCount                 | 253      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2128 ms                                  |
| referencePeakRssMb     | 421.3 MB                                 |
| referenceCpuMsEstimate | 3018 ms                                  |
| maxWallMs              | 5067 ms                                  |
| maxPeakRssMb           | 587.8 MB                                 |
| maxCpuMsEstimate       | 4810 ms                                  |
| statSampleCount        | 370                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 47.3 ms         | 0.4 ms            | 11 ms             | 0 MB             | 0 ms             | 2139 ms  | 417.2 MB     | 2988 ms          | 85/85           | 0    |
| 1   | captured | 2        | 45.5 ms         | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 2121 ms  | 419.1 MB     | 2939 ms          | 84/84           | 0    |
| 2   | captured | 2        | 47.1 ms         | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 2103 ms  | 417.1 MB     | 2918 ms          | 84/84           | 0    |
