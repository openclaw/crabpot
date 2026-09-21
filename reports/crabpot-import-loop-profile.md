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
| p50WallMs                      | 2772     |
| p95WallMs                      | 2773     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 15 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 59.3 ms  |
| p95OpenClawImportMs            | 62.7 ms  |
| p50OpenClawActivationMs        | 0.4 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 419.8 MB |
| maxCpuMsEstimate               | 3839 ms  |
| baselineReferenceWallMs        | 2776 ms  |
| baselineReferencePeakRssMb     | 420.7 MB |
| baselineReferenceCpuMsEstimate | 3824 ms  |
| statSampleCount                | 330      |
| rssSampleCount                 | 330      |
| cpuSampleCount                 | 330      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2776 ms                                  |
| referencePeakRssMb     | 420.7 MB                                 |
| referenceCpuMsEstimate | 3824 ms                                  |
| maxWallMs              | 6632 ms                                  |
| maxPeakRssMb           | 595.6 MB                                 |
| maxCpuMsEstimate       | 6059 ms                                  |
| statSampleCount        | 484                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 62.7 ms         | 0.4 ms            | 0 ms              | 0 MB             | 15 ms            | 2773 ms  | 419.8 MB     | 3839 ms          | 110/110         | 0    |
| 1   | captured | 2        | 59.3 ms         | 0.4 ms            | 0 ms              | 0 MB             | 0 ms             | 2772 ms  | 415.5 MB     | 3789 ms          | 110/110         | 0    |
| 2   | captured | 2        | 59.3 ms         | 0.4 ms            | 0 ms              | 0 MB             | 0 ms             | 2764 ms  | 419 MB       | 3764 ms          | 110/110         | 0    |
