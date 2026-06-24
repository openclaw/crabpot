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
| p50WallMs                      | 2348     |
| p95WallMs                      | 2376     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 5.4 MB   |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 118.4 ms |
| p95OpenClawImportMs            | 121.7 ms |
| p50OpenClawActivationMs        | 0.4 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 303.1 MB |
| maxCpuMsEstimate               | 4740 ms  |
| baselineReferenceWallMs        | 2385 ms  |
| baselineReferencePeakRssMb     | 297.7 MB |
| baselineReferenceCpuMsEstimate | 4768 ms  |
| statSampleCount                | 278      |
| rssSampleCount                 | 278      |
| cpuSampleCount                 | 278      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2385 ms                                  |
| referencePeakRssMb     | 297.7 MB                                 |
| referenceCpuMsEstimate | 4768 ms                                  |
| maxWallMs              | 3361 ms                                  |
| maxPeakRssMb           | 313.6 MB                                 |
| maxCpuMsEstimate       | 5928 ms                                  |
| statSampleCount        | 310                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 118.4 ms        | 0.4 ms            | 0 ms              | 0 MB             | 0 ms             | 2343 ms  | 285 MB       | 4635 ms          | 93/93           | 0    |
| 1   | captured | 2        | 117.6 ms        | 0.3 ms            | 0 ms              | 2.5 MB           | 0 ms             | 2348 ms  | 300.2 MB     | 4699 ms          | 92/92           | 0    |
| 2   | captured | 2        | 121.7 ms        | 0.4 ms            | 0 ms              | 5.4 MB           | 0 ms             | 2376 ms  | 303.1 MB     | 4740 ms          | 93/93           | 0    |
