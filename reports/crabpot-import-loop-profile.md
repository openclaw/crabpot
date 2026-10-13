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
| p50WallMs                      | 4034     |
| p95WallMs                      | 4062     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 3.3 MB   |
| maxPluginCpuDeltaMsEstimate    | 119 ms   |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 107 ms   |
| p95OpenClawImportMs            | 107.3 ms |
| p50OpenClawActivationMs        | 1.1 ms   |
| p95OpenClawActivationMs        | 1.2 ms   |
| maxPeakRssMb                   | 530.8 MB |
| maxCpuMsEstimate               | 5777 ms  |
| baselineReferenceWallMs        | 4067 ms  |
| baselineReferencePeakRssMb     | 527.5 MB |
| baselineReferenceCpuMsEstimate | 5658 ms  |
| statSampleCount                | 482      |
| rssSampleCount                 | 482      |
| cpuSampleCount                 | 482      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 4067 ms                                  |
| referencePeakRssMb     | 527.5 MB                                 |
| referenceCpuMsEstimate | 5658 ms                                  |
| maxWallMs              | 9425 ms                                  |
| maxPeakRssMb           | 722.9 MB                                 |
| maxCpuMsEstimate       | 8898 ms                                  |
| statSampleCount        | 695                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 107.3 ms        | 1.1 ms            | 0 ms              | 2.9 MB           | 0 ms             | 4016 ms  | 530.4 MB     | 5637 ms          | 160/160         | 0    |
| 1   | captured | 2        | 107 ms          | 1.2 ms            | 0 ms              | 3.3 MB           | 119 ms           | 4062 ms  | 530.8 MB     | 5777 ms          | 162/162         | 0    |
| 2   | captured | 2        | 105.2 ms        | 1.1 ms            | 0 ms              | 0 MB             | 0 ms             | 4034 ms  | 525.5 MB     | 5627 ms          | 160/160         | 0    |
