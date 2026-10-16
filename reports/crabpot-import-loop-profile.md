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
| p50WallMs                      | 4393     |
| p95WallMs                      | 4432     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 115.3 ms |
| p95OpenClawImportMs            | 117.7 ms |
| p50OpenClawActivationMs        | 1.3 ms   |
| p95OpenClawActivationMs        | 1.7 ms   |
| maxPeakRssMb                   | 528.9 MB |
| maxCpuMsEstimate               | 6161 ms  |
| baselineReferenceWallMs        | 4455 ms  |
| baselineReferencePeakRssMb     | 530.1 MB |
| baselineReferenceCpuMsEstimate | 6224 ms  |
| statSampleCount                | 526      |
| rssSampleCount                 | 526      |
| cpuSampleCount                 | 526      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 4455 ms                                  |
| referencePeakRssMb     | 530.1 MB                                 |
| referenceCpuMsEstimate | 6224 ms                                  |
| maxWallMs              | 9930 ms                                  |
| maxPeakRssMb           | 730.1 MB                                 |
| maxCpuMsEstimate       | 9166 ms                                  |
| statSampleCount        | 749                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 117.7 ms        | 1.3 ms            | 0 ms              | 0 MB             | 0 ms             | 4385 ms  | 528.9 MB     | 6030 ms          | 175/175         | 0    |
| 1   | captured | 2        | 115.3 ms        | 1.2 ms            | 0 ms              | 0 MB             | 0 ms             | 4432 ms  | 527.4 MB     | 6161 ms          | 176/176         | 0    |
| 2   | captured | 2        | 110.8 ms        | 1.7 ms            | 0 ms              | 0 MB             | 0 ms             | 4393 ms  | 527.5 MB     | 6105 ms          | 175/175         | 0    |
