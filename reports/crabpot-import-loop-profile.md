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
| p50WallMs                      | 2421     |
| p95WallMs                      | 2471     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 29       |
| maxPluginPeakRssDeltaMb        | 13.3 MB  |
| maxPluginCpuDeltaMsEstimate    | 35 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 84 ms    |
| p95OpenClawImportMs            | 88.6 ms  |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 1.2 ms   |
| maxPeakRssMb                   | 347.9 MB |
| maxCpuMsEstimate               | 4780 ms  |
| baselineReferenceWallMs        | 2442 ms  |
| baselineReferencePeakRssMb     | 334.6 MB |
| baselineReferenceCpuMsEstimate | 4745 ms  |
| statSampleCount                | 287      |
| rssSampleCount                 | 287      |
| cpuSampleCount                 | 287      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2442 ms                                  |
| referencePeakRssMb     | 334.6 MB                                 |
| referenceCpuMsEstimate | 4745 ms                                  |
| maxWallMs              | 2958 ms                                  |
| maxPeakRssMb           | 347.9 MB                                 |
| maxCpuMsEstimate       | 5384 ms                                  |
| statSampleCount        | 306                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 84 ms           | 0.3 ms            | 29 ms             | 8 MB             | 35 ms            | 2471 ms  | 342.6 MB     | 4780 ms          | 97/97           | 0    |
| 1   | captured | 2        | 81.8 ms         | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 2421 ms  | 333.8 MB     | 4743 ms          | 96/96           | 0    |
| 2   | captured | 2        | 88.6 ms         | 1.2 ms            | 0 ms              | 13.3 MB          | 0 ms             | 2392 ms  | 347.9 MB     | 4639 ms          | 94/94           | 0    |
