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
| p50WallMs                      | 2280     |
| p95WallMs                      | 2287     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 1.4 MB   |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 47.4 ms  |
| p95OpenClawImportMs            | 48.7 ms  |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.3 ms   |
| maxPeakRssMb                   | 421.3 MB |
| maxCpuMsEstimate               | 3134 ms  |
| baselineReferenceWallMs        | 2309 ms  |
| baselineReferencePeakRssMb     | 419.9 MB |
| baselineReferenceCpuMsEstimate | 3144 ms  |
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
| referenceWallMs        | 2309 ms                                  |
| referencePeakRssMb     | 419.9 MB                                 |
| referenceCpuMsEstimate | 3144 ms                                  |
| maxWallMs              | 5045 ms                                  |
| maxPeakRssMb           | 595.1 MB                                 |
| maxCpuMsEstimate       | 4806 ms                                  |
| statSampleCount        | 385                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 47.4 ms         | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 2280 ms  | 418.2 MB     | 3056 ms          | 90/90           | 0    |
| 1   | captured | 2        | 45.8 ms         | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 2287 ms  | 419.9 MB     | 3134 ms          | 91/91           | 0    |
| 2   | captured | 2        | 48.7 ms         | 0.3 ms            | 0 ms              | 1.4 MB           | 0 ms             | 2267 ms  | 421.3 MB     | 3109 ms          | 90/90           | 0    |
