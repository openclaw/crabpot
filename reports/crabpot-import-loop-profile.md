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
| p50WallMs                      | 4326     |
| p95WallMs                      | 4372     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 5        |
| maxPluginPeakRssDeltaMb        | 4.5 MB   |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 113.8 ms |
| p95OpenClawImportMs            | 114 ms   |
| p50OpenClawActivationMs        | 1.2 ms   |
| p95OpenClawActivationMs        | 1.3 ms   |
| maxPeakRssMb                   | 532.1 MB |
| maxCpuMsEstimate               | 6043 ms  |
| baselineReferenceWallMs        | 4367 ms  |
| baselineReferencePeakRssMb     | 527.6 MB |
| baselineReferenceCpuMsEstimate | 6083 ms  |
| statSampleCount                | 517      |
| rssSampleCount                 | 517      |
| cpuSampleCount                 | 517      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 4367 ms                                  |
| referencePeakRssMb     | 527.6 MB                                 |
| referenceCpuMsEstimate | 6083 ms                                  |
| maxWallMs              | 10172 ms                                 |
| maxPeakRssMb           | 733.9 MB                                 |
| maxCpuMsEstimate       | 9475 ms                                  |
| statSampleCount        | 747                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 113.8 ms        | 1.1 ms            | 0 ms              | 1.4 MB           | 0 ms             | 4326 ms  | 529 MB       | 5991 ms          | 172/172         | 0    |
| 1   | captured | 2        | 114 ms          | 1.2 ms            | 0 ms              | 2.2 MB           | 0 ms             | 4321 ms  | 529.8 MB     | 6004 ms          | 172/172         | 0    |
| 2   | captured | 2        | 111.3 ms        | 1.3 ms            | 5 ms              | 4.5 MB           | 0 ms             | 4372 ms  | 532.1 MB     | 6043 ms          | 173/173         | 0    |
