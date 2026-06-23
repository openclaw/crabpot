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
| p50WallMs                      | 2409     |
| p95WallMs                      | 2415     |
| p50PluginWallDeltaMs           | 15       |
| p95PluginWallDeltaMs           | 21       |
| maxPluginPeakRssDeltaMb        | 3.5 MB   |
| maxPluginCpuDeltaMsEstimate    | 5 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 121.5 ms |
| p95OpenClawImportMs            | 123.1 ms |
| p50OpenClawActivationMs        | 0.4 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 305.7 MB |
| maxCpuMsEstimate               | 4842 ms  |
| baselineReferenceWallMs        | 2394 ms  |
| baselineReferencePeakRssMb     | 302.2 MB |
| baselineReferenceCpuMsEstimate | 4837 ms  |
| statSampleCount                | 282      |
| rssSampleCount                 | 282      |
| cpuSampleCount                 | 282      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2394 ms                                  |
| referencePeakRssMb     | 302.2 MB                                 |
| referenceCpuMsEstimate | 4837 ms                                  |
| maxWallMs              | 3285 ms                                  |
| maxPeakRssMb           | 308.8 MB                                 |
| maxCpuMsEstimate       | 5868 ms                                  |
| statSampleCount        | 313                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 123.1 ms        | 0.4 ms            | 21 ms             | 0 MB             | 2 ms             | 2415 ms  | 298.4 MB     | 4839 ms          | 95/95           | 0    |
| 1   | captured | 2        | 121.5 ms        | 0.4 ms            | 15 ms             | 3.5 MB           | 5 ms             | 2409 ms  | 305.7 MB     | 4842 ms          | 93/93           | 0    |
| 2   | captured | 2        | 120.1 ms        | 0.3 ms            | 3 ms              | 0 MB             | 3 ms             | 2397 ms  | 293.1 MB     | 4840 ms          | 94/94           | 0    |
