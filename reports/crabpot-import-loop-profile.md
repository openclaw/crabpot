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
| p50WallMs                      | 2523     |
| p95WallMs                      | 2525     |
| p50PluginWallDeltaMs           | 25       |
| p95PluginWallDeltaMs           | 27       |
| maxPluginPeakRssDeltaMb        | 6.5 MB   |
| maxPluginCpuDeltaMsEstimate    | 43 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 117.9 ms |
| p95OpenClawImportMs            | 123.2 ms |
| p50OpenClawActivationMs        | 0.4 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 318.4 MB |
| maxCpuMsEstimate               | 5043 ms  |
| baselineReferenceWallMs        | 2498 ms  |
| baselineReferencePeakRssMb     | 311.9 MB |
| baselineReferenceCpuMsEstimate | 5000 ms  |
| statSampleCount                | 297      |
| rssSampleCount                 | 297      |
| cpuSampleCount                 | 297      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2498 ms                                  |
| referencePeakRssMb     | 311.9 MB                                 |
| referenceCpuMsEstimate | 5000 ms                                  |
| maxWallMs              | 3409 ms                                  |
| maxPeakRssMb           | 324.4 MB                                 |
| maxCpuMsEstimate       | 6150 ms                                  |
| statSampleCount        | 322                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 123.2 ms        | 0.4 ms            | 0 ms              | 6.5 MB           | 0 ms             | 2494 ms  | 318.4 MB     | 4967 ms          | 99/99           | 0    |
| 1   | captured | 2        | 117.9 ms        | 0.4 ms            | 27 ms             | 0 MB             | 43 ms            | 2525 ms  | 308.7 MB     | 5043 ms          | 99/99           | 0    |
| 2   | captured | 2        | 116.5 ms        | 0.3 ms            | 25 ms             | 0 MB             | 0 ms             | 2523 ms  | 303.8 MB     | 4985 ms          | 99/99           | 0    |
