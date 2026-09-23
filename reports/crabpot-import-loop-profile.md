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
| p50WallMs                      | 2995     |
| p95WallMs                      | 3996     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 999      |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 1340 ms  |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 60.8 ms  |
| p95OpenClawImportMs            | 64.2 ms  |
| p50OpenClawActivationMs        | 0.6 ms   |
| p95OpenClawActivationMs        | 0.7 ms   |
| maxPeakRssMb                   | 420.6 MB |
| maxCpuMsEstimate               | 5395 ms  |
| baselineReferenceWallMs        | 2997 ms  |
| baselineReferencePeakRssMb     | 421.6 MB |
| baselineReferenceCpuMsEstimate | 4055 ms  |
| statSampleCount                | 357      |
| rssSampleCount                 | 357      |
| cpuSampleCount                 | 357      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2997 ms                                  |
| referencePeakRssMb     | 421.6 MB                                 |
| referenceCpuMsEstimate | 4055 ms                                  |
| maxWallMs              | 6833 ms                                  |
| maxPeakRssMb           | 595.1 MB                                 |
| maxCpuMsEstimate       | 6346 ms                                  |
| statSampleCount        | 509                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 60.8 ms         | 0.7 ms            | 0 ms              | 0 MB             | 0 ms             | 2995 ms  | 420.6 MB     | 4039 ms          | 119/119         | 0    |
| 1   | captured | 2        | 64.2 ms         | 0.6 ms            | 999 ms            | 0 MB             | 1340 ms          | 3996 ms  | 420.5 MB     | 5395 ms          | 119/119         | 0    |
| 2   | captured | 2        | 57.6 ms         | 0.6 ms            | 0 ms              | 0 MB             | 0 ms             | 2987 ms  | 416.9 MB     | 3984 ms          | 119/119         | 0    |
