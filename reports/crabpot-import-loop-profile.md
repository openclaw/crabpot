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
| p50WallMs                      | 2802     |
| p95WallMs                      | 2810     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 7        |
| maxPluginPeakRssDeltaMb        | 9.2 MB   |
| maxPluginCpuDeltaMsEstimate    | 19 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 120.5 ms |
| p95OpenClawImportMs            | 123.1 ms |
| p50OpenClawActivationMs        | 0.5 ms   |
| p95OpenClawActivationMs        | 0.5 ms   |
| maxPeakRssMb                   | 341.1 MB |
| maxCpuMsEstimate               | 5601 ms  |
| baselineReferenceWallMs        | 2803 ms  |
| baselineReferencePeakRssMb     | 331.9 MB |
| baselineReferenceCpuMsEstimate | 5582 ms  |
| statSampleCount                | 332      |
| rssSampleCount                 | 332      |
| cpuSampleCount                 | 332      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2803 ms                                  |
| referencePeakRssMb     | 331.9 MB                                 |
| referenceCpuMsEstimate | 5582 ms                                  |
| maxWallMs              | 3913 ms                                  |
| maxPeakRssMb           | 344.2 MB                                 |
| maxCpuMsEstimate       | 7034 ms                                  |
| statSampleCount        | 367                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 123.1 ms        | 0.5 ms            | 7 ms              | 0 MB             | 0 ms             | 2810 ms  | 331 MB       | 5530 ms          | 111/111         | 0    |
| 1   | captured | 2        | 120.5 ms        | 0.3 ms            | 0 ms              | 9.2 MB           | 19 ms            | 2802 ms  | 341.1 MB     | 5601 ms          | 111/111         | 0    |
| 2   | captured | 2        | 119.9 ms        | 0.5 ms            | 0 ms              | 0 MB             | 0 ms             | 2771 ms  | 331.9 MB     | 5549 ms          | 110/110         | 0    |
