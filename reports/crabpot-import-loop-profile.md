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
| p50WallMs                      | 2284     |
| p95WallMs                      | 2325     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 8        |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 119.2 ms |
| p95OpenClawImportMs            | 120.2 ms |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 303 MB   |
| maxCpuMsEstimate               | 4630 ms  |
| baselineReferenceWallMs        | 2317 ms  |
| baselineReferencePeakRssMb     | 303.6 MB |
| baselineReferenceCpuMsEstimate | 4650 ms  |
| statSampleCount                | 272      |
| rssSampleCount                 | 272      |
| cpuSampleCount                 | 272      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2317 ms                                  |
| referencePeakRssMb     | 303.6 MB                                 |
| referenceCpuMsEstimate | 4650 ms                                  |
| maxWallMs              | 3236 ms                                  |
| maxPeakRssMb           | 318.1 MB                                 |
| maxCpuMsEstimate       | 5763 ms                                  |
| statSampleCount        | 308                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 120.2 ms        | 0.3 ms            | 8 ms              | 0 MB             | 0 ms             | 2325 ms  | 292.1 MB     | 4630 ms          | 92/92           | 0    |
| 1   | captured | 2        | 119.2 ms        | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 2279 ms  | 294.4 MB     | 4583 ms          | 90/90           | 0    |
| 2   | captured | 2        | 115.2 ms        | 0.4 ms            | 0 ms              | 0 MB             | 0 ms             | 2284 ms  | 303 MB       | 4593 ms          | 90/90           | 0    |
