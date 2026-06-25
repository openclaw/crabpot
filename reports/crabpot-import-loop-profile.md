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
| p50WallMs                      | 2443     |
| p95WallMs                      | 2494     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 11       |
| maxPluginPeakRssDeltaMb        | 9.6 MB   |
| maxPluginCpuDeltaMsEstimate    | 18 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 121.3 ms |
| p95OpenClawImportMs            | 122.2 ms |
| p50OpenClawActivationMs        | 0.4 ms   |
| p95OpenClawActivationMs        | 0.5 ms   |
| maxPeakRssMb                   | 310 MB   |
| maxCpuMsEstimate               | 4991 ms  |
| baselineReferenceWallMs        | 2483 ms  |
| baselineReferencePeakRssMb     | 300.4 MB |
| baselineReferenceCpuMsEstimate | 4973 ms  |
| statSampleCount                | 291      |
| rssSampleCount                 | 291      |
| cpuSampleCount                 | 291      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2483 ms                                  |
| referencePeakRssMb     | 300.4 MB                                 |
| referenceCpuMsEstimate | 4973 ms                                  |
| maxWallMs              | 3413 ms                                  |
| maxPeakRssMb           | 319.8 MB                                 |
| maxCpuMsEstimate       | 6108 ms                                  |
| statSampleCount        | 328                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 121.3 ms        | 0.4 ms            | 11 ms             | 7.4 MB           | 18 ms            | 2494 ms  | 307.8 MB     | 4991 ms          | 99/99           | 0    |
| 1   | captured | 2        | 110.9 ms        | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 2443 ms  | 288.4 MB     | 4798 ms          | 95/95           | 0    |
| 2   | captured | 2        | 122.2 ms        | 0.5 ms            | 0 ms              | 9.6 MB           | 0 ms             | 2441 ms  | 310 MB       | 4906 ms          | 97/97           | 0    |
