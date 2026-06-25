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
| p50WallMs                      | 2474     |
| p95WallMs                      | 2660     |
| p50PluginWallDeltaMs           | 40       |
| p95PluginWallDeltaMs           | 226      |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 378 ms   |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 112 ms   |
| p95OpenClawImportMs            | 112.2 ms |
| p50OpenClawActivationMs        | 0.5 ms   |
| p95OpenClawActivationMs        | 0.5 ms   |
| maxPeakRssMb                   | 298.6 MB |
| maxCpuMsEstimate               | 5249 ms  |
| baselineReferenceWallMs        | 2434 ms  |
| baselineReferencePeakRssMb     | 303.4 MB |
| baselineReferenceCpuMsEstimate | 4871 ms  |
| statSampleCount                | 298      |
| rssSampleCount                 | 298      |
| cpuSampleCount                 | 298      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2434 ms                                  |
| referencePeakRssMb     | 303.4 MB                                 |
| referenceCpuMsEstimate | 4871 ms                                  |
| maxWallMs              | 3295 ms                                  |
| maxPeakRssMb           | 330.4 MB                                 |
| maxCpuMsEstimate       | 5859 ms                                  |
| statSampleCount        | 318                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 112 ms          | 0.5 ms            | 0 ms              | 0 MB             | 0 ms             | 2406 ms  | 295.4 MB     | 4816 ms          | 95/95           | 0    |
| 1   | captured | 2        | 112.2 ms        | 0.5 ms            | 40 ms             | 0 MB             | 32 ms            | 2474 ms  | 298.6 MB     | 4903 ms          | 98/98           | 0    |
| 2   | captured | 2        | 111.8 ms        | 0.4 ms            | 226 ms            | 0 MB             | 378 ms           | 2660 ms  | 294.3 MB     | 5249 ms          | 105/105         | 0    |
