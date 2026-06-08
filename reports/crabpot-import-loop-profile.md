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
| p50WallMs                      | 1700     |
| p95WallMs                      | 1702     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 4.4 MB   |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 89 ms    |
| p95OpenClawImportMs            | 89.7 ms  |
| p50OpenClawActivationMs        | 0.2 ms   |
| p95OpenClawActivationMs        | 0.3 ms   |
| maxPeakRssMb                   | 288.6 MB |
| maxCpuMsEstimate               | 3406 ms  |
| baselineReferenceWallMs        | 1713 ms  |
| baselineReferencePeakRssMb     | 284.2 MB |
| baselineReferenceCpuMsEstimate | 3413 ms  |
| statSampleCount                | 199      |
| rssSampleCount                 | 199      |
| cpuSampleCount                 | 199      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 1713 ms                                  |
| referencePeakRssMb     | 284.2 MB                                 |
| referenceCpuMsEstimate | 3413 ms                                  |
| maxWallMs              | 2350 ms                                  |
| maxPeakRssMb           | 319.5 MB                                 |
| maxCpuMsEstimate       | 4305 ms                                  |
| statSampleCount        | 225                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 89 ms           | 0.2 ms            | 0 ms              | 4.4 MB           | 0 ms             | 1700 ms  | 288.6 MB     | 3406 ms          | 67/67           | 0    |
| 1   | captured | 2        | 89.7 ms         | 0.2 ms            | 0 ms              | 3.4 MB           | 0 ms             | 1702 ms  | 287.6 MB     | 3402 ms          | 67/67           | 0    |
| 2   | captured | 2        | 87.2 ms         | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 1653 ms  | 280.6 MB     | 3291 ms          | 65/65           | 0    |
