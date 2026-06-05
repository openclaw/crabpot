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
| p50WallMs                      | 2377     |
| p95WallMs                      | 2382     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 4.4 MB   |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 111.2 ms |
| p95OpenClawImportMs            | 115.3 ms |
| p50OpenClawActivationMs        | 0.4 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 302.9 MB |
| maxCpuMsEstimate               | 4769 ms  |
| baselineReferenceWallMs        | 2437 ms  |
| baselineReferencePeakRssMb     | 298.5 MB |
| baselineReferenceCpuMsEstimate | 4827 ms  |
| statSampleCount                | 279      |
| rssSampleCount                 | 279      |
| cpuSampleCount                 | 279      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2437 ms                                  |
| referencePeakRssMb     | 298.5 MB                                 |
| referenceCpuMsEstimate | 4827 ms                                  |
| maxWallMs              | 3117 ms                                  |
| maxPeakRssMb           | 309.8 MB                                 |
| maxCpuMsEstimate       | 5584 ms                                  |
| statSampleCount        | 308                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 109.7 ms        | 0.4 ms            | 0 ms              | 0 MB             | 0 ms             | 2377 ms  | 293.3 MB     | 4711 ms          | 94/94           | 0    |
| 1   | captured | 2        | 111.2 ms        | 0.4 ms            | 0 ms              | 4.4 MB           | 0 ms             | 2382 ms  | 302.9 MB     | 4769 ms          | 94/94           | 0    |
| 2   | captured | 2        | 115.3 ms        | 0.4 ms            | 0 ms              | 0 MB             | 0 ms             | 2317 ms  | 295.5 MB     | 4603 ms          | 91/91           | 0    |
