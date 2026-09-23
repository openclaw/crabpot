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
| p50WallMs                      | 2292     |
| p95WallMs                      | 2299     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 0.6 MB   |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 46.5 ms  |
| p95OpenClawImportMs            | 48.1 ms  |
| p50OpenClawActivationMs        | 0.4 ms   |
| p95OpenClawActivationMs        | 0.5 ms   |
| maxPeakRssMb                   | 423.9 MB |
| maxCpuMsEstimate               | 3178 ms  |
| baselineReferenceWallMs        | 2302 ms  |
| baselineReferencePeakRssMb     | 423.3 MB |
| baselineReferenceCpuMsEstimate | 3198 ms  |
| statSampleCount                | 273      |
| rssSampleCount                 | 273      |
| cpuSampleCount                 | 273      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2302 ms                                  |
| referencePeakRssMb     | 423.3 MB                                 |
| referenceCpuMsEstimate | 3198 ms                                  |
| maxWallMs              | 5031 ms                                  |
| maxPeakRssMb           | 574.9 MB                                 |
| maxCpuMsEstimate       | 4817 ms                                  |
| statSampleCount        | 382                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 48.1 ms         | 0.3 ms            | 0 ms              | 0.6 MB           | 0 ms             | 2288 ms  | 423.9 MB     | 3139 ms          | 91/91           | 0    |
| 1   | captured | 2        | 46.5 ms         | 0.5 ms            | 0 ms              | 0 MB             | 0 ms             | 2292 ms  | 421.8 MB     | 3129 ms          | 91/91           | 0    |
| 2   | captured | 2        | 46.3 ms         | 0.4 ms            | 0 ms              | 0 MB             | 0 ms             | 2299 ms  | 421.4 MB     | 3178 ms          | 91/91           | 0    |
