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
| p50WallMs                      | 4381     |
| p95WallMs                      | 4441     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 13       |
| maxPluginPeakRssDeltaMb        | 1.2 MB   |
| maxPluginCpuDeltaMsEstimate    | 187 ms   |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 115.1 ms |
| p95OpenClawImportMs            | 116.6 ms |
| p50OpenClawActivationMs        | 1.3 ms   |
| p95OpenClawActivationMs        | 1.4 ms   |
| maxPeakRssMb                   | 529.7 MB |
| maxCpuMsEstimate               | 6285 ms  |
| baselineReferenceWallMs        | 4428 ms  |
| baselineReferencePeakRssMb     | 528.5 MB |
| baselineReferenceCpuMsEstimate | 6098 ms  |
| statSampleCount                | 523      |
| rssSampleCount                 | 523      |
| cpuSampleCount                 | 523      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 4428 ms                                  |
| referencePeakRssMb     | 528.5 MB                                 |
| referenceCpuMsEstimate | 6098 ms                                  |
| maxWallMs              | 10069 ms                                 |
| maxPeakRssMb           | 742.6 MB                                 |
| maxCpuMsEstimate       | 9536 ms                                  |
| statSampleCount        | 749                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 116.6 ms        | 1.4 ms            | 0 ms              | 0 MB             | 0 ms             | 4364 ms  | 527.3 MB     | 6057 ms          | 173/173         | 0    |
| 1   | captured | 2        | 115.1 ms        | 1.3 ms            | 0 ms              | 1.2 MB           | 0 ms             | 4381 ms  | 529.7 MB     | 5994 ms          | 173/173         | 0    |
| 2   | captured | 2        | 112.8 ms        | 1.3 ms            | 13 ms             | 0 MB             | 187 ms           | 4441 ms  | 528.5 MB     | 6285 ms          | 177/177         | 0    |
