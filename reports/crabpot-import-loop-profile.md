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
| p50WallMs                      | 3806     |
| p95WallMs                      | 3808     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 1 MB     |
| maxPluginCpuDeltaMsEstimate    | 33 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 102.9 ms |
| p95OpenClawImportMs            | 104.9 ms |
| p50OpenClawActivationMs        | 1 ms     |
| p95OpenClawActivationMs        | 1.1 ms   |
| maxPeakRssMb                   | 529.5 MB |
| maxCpuMsEstimate               | 5509 ms  |
| baselineReferenceWallMs        | 3863 ms  |
| baselineReferencePeakRssMb     | 528.5 MB |
| baselineReferenceCpuMsEstimate | 5476 ms  |
| statSampleCount                | 453      |
| rssSampleCount                 | 453      |
| cpuSampleCount                 | 453      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 3863 ms                                  |
| referencePeakRssMb     | 528.5 MB                                 |
| referenceCpuMsEstimate | 5476 ms                                  |
| maxWallMs              | 9251 ms                                  |
| maxPeakRssMb           | 689.1 MB                                 |
| maxCpuMsEstimate       | 8540 ms                                  |
| statSampleCount        | 673                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 104.9 ms        | 1 ms              | 0 ms              | 0 MB             | 17 ms            | 3806 ms  | 525.6 MB     | 5493 ms          | 151/151         | 0    |
| 1   | captured | 2        | 100.1 ms        | 1.1 ms            | 0 ms              | 1 MB             | 0 ms             | 3808 ms  | 529.5 MB     | 5428 ms          | 151/151         | 0    |
| 2   | captured | 2        | 102.9 ms        | 1 ms              | 0 ms              | 0 MB             | 33 ms            | 3797 ms  | 503.9 MB     | 5509 ms          | 151/151         | 0    |
