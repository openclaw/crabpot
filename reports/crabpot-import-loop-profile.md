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
| p50WallMs                      | 2482     |
| p95WallMs                      | 2548     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 23       |
| maxPluginPeakRssDeltaMb        | 8.2 MB   |
| maxPluginCpuDeltaMsEstimate    | 15 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 121.8 ms |
| p95OpenClawImportMs            | 122.3 ms |
| p50OpenClawActivationMs        | 0.4 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 294 MB   |
| maxCpuMsEstimate               | 5047 ms  |
| baselineReferenceWallMs        | 2525 ms  |
| baselineReferencePeakRssMb     | 285.8 MB |
| baselineReferenceCpuMsEstimate | 5032 ms  |
| statSampleCount                | 294      |
| rssSampleCount                 | 294      |
| cpuSampleCount                 | 294      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2525 ms                                  |
| referencePeakRssMb     | 285.8 MB                                 |
| referenceCpuMsEstimate | 5032 ms                                  |
| maxWallMs              | 3467 ms                                  |
| maxPeakRssMb           | 304.4 MB                                 |
| maxCpuMsEstimate       | 6213 ms                                  |
| statSampleCount        | 331                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 121.8 ms        | 0.4 ms            | 0 ms              | 0.9 MB           | 0 ms             | 2473 ms  | 286.7 MB     | 4926 ms          | 97/97           | 0    |
| 1   | captured | 2        | 117.1 ms        | 0.4 ms            | 0 ms              | 7.8 MB           | 0 ms             | 2482 ms  | 293.6 MB     | 4890 ms          | 97/97           | 0    |
| 2   | captured | 2        | 122.3 ms        | 0.4 ms            | 23 ms             | 8.2 MB           | 15 ms            | 2548 ms  | 294 MB       | 5047 ms          | 100/100         | 0    |
