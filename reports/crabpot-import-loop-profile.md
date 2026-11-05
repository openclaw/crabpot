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
| p50WallMs                      | 4069     |
| p95WallMs                      | 4931     |
| p50PluginWallDeltaMs           | 71       |
| p95PluginWallDeltaMs           | 933      |
| maxPluginPeakRssDeltaMb        | 15.1 MB  |
| maxPluginCpuDeltaMsEstimate    | 1413 ms  |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 60.8 ms  |
| p95OpenClawImportMs            | 61.8 ms  |
| p50OpenClawActivationMs        | 0.8 ms   |
| p95OpenClawActivationMs        | 0.8 ms   |
| maxPeakRssMb                   | 834.2 MB |
| maxCpuMsEstimate               | 7441 ms  |
| baselineReferenceWallMs        | 3998 ms  |
| baselineReferencePeakRssMb     | 819.1 MB |
| baselineReferenceCpuMsEstimate | 6028 ms  |
| statSampleCount                | 474      |
| rssSampleCount                 | 474      |
| cpuSampleCount                 | 474      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 3998 ms                                  |
| referencePeakRssMb     | 819.1 MB                                 |
| referenceCpuMsEstimate | 6028 ms                                  |
| maxWallMs              | 8922 ms                                  |
| maxPeakRssMb           | 1032.6 MB                                |
| maxCpuMsEstimate       | 8267 ms                                  |
| statSampleCount        | 665                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 60.8 ms         | 0.7 ms            | 18 ms             | 15.1 MB          | 0 ms             | 4016 ms  | 834.2 MB     | 6011 ms          | 159/159         | 0    |
| 1   | captured | 2        | 61.8 ms         | 0.8 ms            | 71 ms             | 0 MB             | 87 ms            | 4069 ms  | 809.3 MB     | 6115 ms          | 160/160         | 0    |
| 2   | captured | 2        | 60.7 ms         | 0.8 ms            | 933 ms            | 0 MB             | 1413 ms          | 4931 ms  | 805.4 MB     | 7441 ms          | 155/155         | 0    |
