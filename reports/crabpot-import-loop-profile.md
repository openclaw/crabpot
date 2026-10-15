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
| p50WallMs                      | 4362     |
| p95WallMs                      | 4368     |
| p50PluginWallDeltaMs           | 8        |
| p95PluginWallDeltaMs           | 14       |
| maxPluginPeakRssDeltaMb        | 1.9 MB   |
| maxPluginCpuDeltaMsEstimate    | 1 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 110.6 ms |
| p95OpenClawImportMs            | 112.7 ms |
| p50OpenClawActivationMs        | 1.3 ms   |
| p95OpenClawActivationMs        | 1.3 ms   |
| maxPeakRssMb                   | 531.4 MB |
| maxCpuMsEstimate               | 6100 ms  |
| baselineReferenceWallMs        | 4354 ms  |
| baselineReferencePeakRssMb     | 529.5 MB |
| baselineReferenceCpuMsEstimate | 6099 ms  |
| statSampleCount                | 518      |
| rssSampleCount                 | 518      |
| cpuSampleCount                 | 518      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 4354 ms                                  |
| referencePeakRssMb     | 529.5 MB                                 |
| referenceCpuMsEstimate | 6099 ms                                  |
| maxWallMs              | 9770 ms                                  |
| maxPeakRssMb           | 724.4 MB                                 |
| maxCpuMsEstimate       | 9172 ms                                  |
| statSampleCount        | 733                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 110.6 ms        | 1.3 ms            | 8 ms              | 0 MB             | 0 ms             | 4362 ms  | 527.1 MB     | 5937 ms          | 173/173         | 0    |
| 1   | captured | 2        | 107.7 ms        | 1.3 ms            | 0 ms              | 0 MB             | 0 ms             | 4327 ms  | 526.4 MB     | 6072 ms          | 172/172         | 0    |
| 2   | captured | 2        | 112.7 ms        | 1.3 ms            | 14 ms             | 1.9 MB           | 1 ms             | 4368 ms  | 531.4 MB     | 6100 ms          | 173/173         | 0    |
