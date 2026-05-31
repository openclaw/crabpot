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
| p50WallMs                      | 1965     |
| p95WallMs                      | 1969     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 7.7 MB   |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 118.1 ms |
| p95OpenClawImportMs            | 124 ms   |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 305 MB   |
| maxCpuMsEstimate               | 3886 ms  |
| baselineReferenceWallMs        | 2020 ms  |
| baselineReferencePeakRssMb     | 297.3 MB |
| baselineReferenceCpuMsEstimate | 3951 ms  |
| statSampleCount                | 231      |
| rssSampleCount                 | 231      |
| cpuSampleCount                 | 231      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2020 ms                                  |
| referencePeakRssMb     | 297.3 MB                                 |
| referenceCpuMsEstimate | 3951 ms                                  |
| maxWallMs              | 2600 ms                                  |
| maxPeakRssMb           | 303.2 MB                                 |
| maxCpuMsEstimate       | 4669 ms                                  |
| statSampleCount        | 255                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 124 ms          | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 1969 ms  | 293.6 MB     | 3845 ms          | 77/77           | 0    |
| 1   | captured | 2        | 114.3 ms        | 0.3 ms            | 0 ms              | 7.7 MB           | 0 ms             | 1926 ms  | 305 MB       | 3796 ms          | 76/76           | 0    |
| 2   | captured | 2        | 118.1 ms        | 0.4 ms            | 0 ms              | 5.6 MB           | 0 ms             | 1965 ms  | 302.9 MB     | 3886 ms          | 78/78           | 0    |
