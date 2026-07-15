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
| p50WallMs                      | 2586     |
| p95WallMs                      | 2588     |
| p50PluginWallDeltaMs           | 80       |
| p95PluginWallDeltaMs           | 82       |
| maxPluginPeakRssDeltaMb        | 14 MB    |
| maxPluginCpuDeltaMsEstimate    | 203 ms   |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 122.4 ms |
| p95OpenClawImportMs            | 126.4 ms |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 311.3 MB |
| maxCpuMsEstimate               | 5167 ms  |
| baselineReferenceWallMs        | 2506 ms  |
| baselineReferencePeakRssMb     | 297.3 MB |
| baselineReferenceCpuMsEstimate | 4964 ms  |
| statSampleCount                | 300      |
| rssSampleCount                 | 300      |
| cpuSampleCount                 | 300      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2506 ms                                  |
| referencePeakRssMb     | 297.3 MB                                 |
| referenceCpuMsEstimate | 4964 ms                                  |
| maxWallMs              | 3575 ms                                  |
| maxPeakRssMb           | 325.3 MB                                 |
| maxCpuMsEstimate       | 6242 ms                                  |
| statSampleCount        | 334                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 126.4 ms        | 0.4 ms            | 82 ms             | 0 MB             | 203 ms           | 2588 ms  | 286.4 MB     | 5167 ms          | 102/102         | 0    |
| 1   | captured | 2        | 122.4 ms        | 0.3 ms            | 80 ms             | 10.2 MB          | 150 ms           | 2586 ms  | 307.5 MB     | 5114 ms          | 102/102         | 0    |
| 2   | captured | 2        | 120.5 ms        | 0.3 ms            | 0 ms              | 14 MB            | 0 ms             | 2467 ms  | 311.3 MB     | 4926 ms          | 96/96           | 0    |
