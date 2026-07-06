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
| p50WallMs                      | 2356     |
| p95WallMs                      | 2388     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 6        |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 118.9 ms |
| p95OpenClawImportMs            | 120.9 ms |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.3 ms   |
| maxPeakRssMb                   | 297.9 MB |
| maxCpuMsEstimate               | 4732 ms  |
| baselineReferenceWallMs        | 2382 ms  |
| baselineReferencePeakRssMb     | 300.7 MB |
| baselineReferenceCpuMsEstimate | 4795 ms  |
| statSampleCount                | 278      |
| rssSampleCount                 | 278      |
| cpuSampleCount                 | 278      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2382 ms                                  |
| referencePeakRssMb     | 300.7 MB                                 |
| referenceCpuMsEstimate | 4795 ms                                  |
| maxWallMs              | 3253 ms                                  |
| maxPeakRssMb           | 311.3 MB                                 |
| maxCpuMsEstimate       | 5881 ms                                  |
| statSampleCount        | 309                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 120.9 ms        | 0.3 ms            | 6 ms              | 0 MB             | 0 ms             | 2388 ms  | 297.9 MB     | 4723 ms          | 94/94           | 0    |
| 1   | captured | 2        | 118.2 ms        | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 2356 ms  | 296.7 MB     | 4732 ms          | 92/92           | 0    |
| 2   | captured | 2        | 118.9 ms        | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 2329 ms  | 297.8 MB     | 4601 ms          | 92/92           | 0    |
