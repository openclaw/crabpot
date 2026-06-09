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
| p50WallMs                      | 2223     |
| p95WallMs                      | 2284     |
| p50PluginWallDeltaMs           | 32       |
| p95PluginWallDeltaMs           | 93       |
| maxPluginPeakRssDeltaMb        | 5.4 MB   |
| maxPluginCpuDeltaMsEstimate    | 196 ms   |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 111.8 ms |
| p95OpenClawImportMs            | 115 ms   |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 299.5 MB |
| maxCpuMsEstimate               | 4543 ms  |
| baselineReferenceWallMs        | 2191 ms  |
| baselineReferencePeakRssMb     | 294.1 MB |
| baselineReferenceCpuMsEstimate | 4347 ms  |
| statSampleCount                | 263      |
| rssSampleCount                 | 263      |
| cpuSampleCount                 | 263      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2191 ms                                  |
| referencePeakRssMb     | 294.1 MB                                 |
| referenceCpuMsEstimate | 4347 ms                                  |
| maxWallMs              | 3106 ms                                  |
| maxPeakRssMb           | 303.1 MB                                 |
| maxCpuMsEstimate       | 5539 ms                                  |
| statSampleCount        | 292                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 115 ms          | 0.3 ms            | 32 ms             | 5.4 MB           | 129 ms           | 2223 ms  | 299.5 MB     | 4476 ms          | 87/87           | 0    |
| 1   | captured | 2        | 111.1 ms        | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 2172 ms  | 291.1 MB     | 4259 ms          | 86/86           | 0    |
| 2   | captured | 2        | 111.8 ms        | 0.4 ms            | 93 ms             | 0 MB             | 196 ms           | 2284 ms  | 286.3 MB     | 4543 ms          | 90/90           | 0    |
