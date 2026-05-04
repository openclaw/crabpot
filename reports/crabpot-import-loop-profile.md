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
| p50WallMs                      | 2468     |
| p95WallMs                      | 2476     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 54.7 ms  |
| p95OpenClawImportMs            | 55 ms    |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 344.6 MB |
| maxCpuMsEstimate               | 4885 ms  |
| baselineReferenceWallMs        | 2488 ms  |
| baselineReferencePeakRssMb     | 347.5 MB |
| baselineReferenceCpuMsEstimate | 4941 ms  |
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
| referenceWallMs        | 2488 ms                                  |
| referencePeakRssMb     | 347.5 MB                                 |
| referenceCpuMsEstimate | 4941 ms                                  |
| maxWallMs              | 2969 ms                                  |
| maxPeakRssMb           | 350.6 MB                                 |
| maxCpuMsEstimate       | 5336 ms                                  |
| statSampleCount        | 310                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 55 ms           | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 2379 ms  | 344.6 MB     | 4718 ms          | 93/93           | 0    |
| 1   | captured | 2        | 52.3 ms         | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 2468 ms  | 339.9 MB     | 4818 ms          | 97/97           | 0    |
| 2   | captured | 2        | 54.7 ms         | 0.4 ms            | 0 ms              | 0 MB             | 0 ms             | 2476 ms  | 336.7 MB     | 4885 ms          | 97/97           | 0    |
