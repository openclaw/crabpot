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
| p50WallMs                      | 4247     |
| p95WallMs                      | 4275     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 9        |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 79 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 107.5 ms |
| p95OpenClawImportMs            | 109.4 ms |
| p50OpenClawActivationMs        | 1.1 ms   |
| p95OpenClawActivationMs        | 1.1 ms   |
| maxPeakRssMb                   | 529.9 MB |
| maxCpuMsEstimate               | 5976 ms  |
| baselineReferenceWallMs        | 4266 ms  |
| baselineReferencePeakRssMb     | 532.1 MB |
| baselineReferenceCpuMsEstimate | 5897 ms  |
| statSampleCount                | 506      |
| rssSampleCount                 | 506      |
| cpuSampleCount                 | 506      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 4266 ms                                  |
| referencePeakRssMb     | 532.1 MB                                 |
| referenceCpuMsEstimate | 5897 ms                                  |
| maxWallMs              | 9572 ms                                  |
| maxPeakRssMb           | 689.1 MB                                 |
| maxCpuMsEstimate       | 9055 ms                                  |
| statSampleCount        | 715                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 107.5 ms        | 1.1 ms            | 9 ms              | 0 MB             | 79 ms            | 4275 ms  | 529.9 MB     | 5976 ms          | 170/170         | 0    |
| 1   | captured | 2        | 109.4 ms        | 1.1 ms            | 0 ms              | 0 MB             | 0 ms             | 4201 ms  | 508.9 MB     | 5816 ms          | 167/167         | 0    |
| 2   | captured | 2        | 107 ms          | 1.1 ms            | 0 ms              | 0 MB             | 34 ms            | 4247 ms  | 529 MB       | 5931 ms          | 169/169         | 0    |
