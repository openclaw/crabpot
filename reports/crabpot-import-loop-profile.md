# Crabpot Import Loop Profile

Generated: deterministic
Mode: openclaw-loader-lifecycle-profile
Entrypoint: test/fixtures/lazy-import-plugin.mjs

## Summary

| Metric                         | Value   |
| ------------------------------ | ------- |
| runs                           | 3       |
| baselineRuns                   | 3       |
| baselineFailCount              | 0       |
| p50WallMs                      | 2321    |
| p95WallMs                      | 2323    |
| p50PluginWallDeltaMs           | 30      |
| p95PluginWallDeltaMs           | 32      |
| maxPluginPeakRssDeltaMb        | 1 MB    |
| maxPluginCpuDeltaMsEstimate    | 68 ms   |
| openClawLifecycleCount         | 3       |
| p50OpenClawImportMs            | 57.1 ms |
| p95OpenClawImportMs            | 58.5 ms |
| p50OpenClawActivationMs        | 0.3 ms  |
| p95OpenClawActivationMs        | 0.4 ms  |
| maxPeakRssMb                   | 343 MB  |
| maxCpuMsEstimate               | 4541 ms |
| baselineReferenceWallMs        | 2291 ms |
| baselineReferencePeakRssMb     | 342 MB  |
| baselineReferenceCpuMsEstimate | 4473 ms |
| statSampleCount                | 270     |
| rssSampleCount                 | 270     |
| cpuSampleCount                 | 270     |
| capturedCount                  | 6       |
| failCount                      | 0       |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2291 ms                                  |
| referencePeakRssMb     | 342 MB                                   |
| referenceCpuMsEstimate | 4473 ms                                  |
| maxWallMs              | 2735 ms                                  |
| maxPeakRssMb           | 344.9 MB                                 |
| maxCpuMsEstimate       | 4949 ms                                  |
| statSampleCount        | 282                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 58.5 ms         | 0.4 ms            | 32 ms             | 0 MB             | 49 ms            | 2323 ms  | 331.5 MB     | 4522 ms          | 90/90           | 0    |
| 1   | captured | 2        | 57.1 ms         | 0.3 ms            | 18 ms             | 0 MB             | 68 ms            | 2309 ms  | 341.9 MB     | 4541 ms          | 90/90           | 0    |
| 2   | captured | 2        | 55.4 ms         | 0.3 ms            | 30 ms             | 1 MB             | 0 ms             | 2321 ms  | 343 MB       | 4433 ms          | 90/90           | 0    |
