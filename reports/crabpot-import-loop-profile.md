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
| p50WallMs                      | 6861     |
| p95WallMs                      | 6886     |
| p50PluginWallDeltaMs           | 64       |
| p95PluginWallDeltaMs           | 89       |
| maxPluginPeakRssDeltaMb        | 0.2 MB   |
| maxPluginCpuDeltaMsEstimate    | 207 ms   |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 92.6 ms  |
| p95OpenClawImportMs            | 96.7 ms  |
| p50OpenClawActivationMs        | 1.4 ms   |
| p95OpenClawActivationMs        | 1.6 ms   |
| maxPeakRssMb                   | 812.2 MB |
| maxCpuMsEstimate               | 9793 ms  |
| baselineReferenceWallMs        | 6797 ms  |
| baselineReferencePeakRssMb     | 812 MB   |
| baselineReferenceCpuMsEstimate | 9586 ms  |
| statSampleCount                | 814      |
| rssSampleCount                 | 814      |
| cpuSampleCount                 | 814      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 6797 ms                                  |
| referencePeakRssMb     | 812 MB                                   |
| referenceCpuMsEstimate | 9586 ms                                  |
| maxWallMs              | 14652 ms                                 |
| maxPeakRssMb           | 1039.2 MB                                |
| maxCpuMsEstimate       | 13003 ms                                 |
| statSampleCount        | 1116                                     |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 91.5 ms         | 1.4 ms            | 64 ms             | 0 MB             | 94 ms            | 6861 ms  | 808 MB       | 9680 ms          | 271/271         | 0    |
| 1   | captured | 2        | 96.7 ms         | 1.6 ms            | 89 ms             | 0.2 MB           | 207 ms           | 6886 ms  | 812.2 MB     | 9793 ms          | 272/272         | 0    |
| 2   | captured | 2        | 92.6 ms         | 1.2 ms            | 40 ms             | 0 MB             | 31 ms            | 6837 ms  | 804.4 MB     | 9617 ms          | 271/271         | 0    |
