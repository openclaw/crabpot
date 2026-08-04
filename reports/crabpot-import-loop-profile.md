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
| p50WallMs                      | 3084     |
| p95WallMs                      | 3131     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 38       |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 14 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 126.2 ms |
| p95OpenClawImportMs            | 127 ms   |
| p50OpenClawActivationMs        | 0.4 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 346.1 MB |
| maxCpuMsEstimate               | 6194 ms  |
| baselineReferenceWallMs        | 3093 ms  |
| baselineReferencePeakRssMb     | 351.9 MB |
| baselineReferenceCpuMsEstimate | 6180 ms  |
| statSampleCount                | 365      |
| rssSampleCount                 | 365      |
| cpuSampleCount                 | 365      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 3093 ms                                  |
| referencePeakRssMb     | 351.9 MB                                 |
| referenceCpuMsEstimate | 6180 ms                                  |
| maxWallMs              | 4196 ms                                  |
| maxPeakRssMb           | 363 MB                                   |
| maxCpuMsEstimate       | 7517 ms                                  |
| statSampleCount        | 403                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 126.2 ms        | 0.4 ms            | 38 ms             | 0 MB             | 14 ms            | 3131 ms  | 337.4 MB     | 6194 ms          | 123/123         | 0    |
| 1   | captured | 2        | 127 ms          | 0.4 ms            | 0 ms              | 0 MB             | 0 ms             | 3081 ms  | 346.1 MB     | 6089 ms          | 121/121         | 0    |
| 2   | captured | 2        | 123.7 ms        | 0.4 ms            | 0 ms              | 0 MB             | 0 ms             | 3084 ms  | 335.9 MB     | 6133 ms          | 121/121         | 0    |
