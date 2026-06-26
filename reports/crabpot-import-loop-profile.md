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
| p50WallMs                      | 2247     |
| p95WallMs                      | 2300     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 6.9 MB   |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 112.1 ms |
| p95OpenClawImportMs            | 116.3 ms |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.3 ms   |
| maxPeakRssMb                   | 305.6 MB |
| maxCpuMsEstimate               | 4521 ms  |
| baselineReferenceWallMs        | 2372 ms  |
| baselineReferencePeakRssMb     | 298.7 MB |
| baselineReferenceCpuMsEstimate | 4704 ms  |
| statSampleCount                | 267      |
| rssSampleCount                 | 267      |
| cpuSampleCount                 | 267      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2372 ms                                  |
| referencePeakRssMb     | 298.7 MB                                 |
| referenceCpuMsEstimate | 4704 ms                                  |
| maxWallMs              | 3182 ms                                  |
| maxPeakRssMb           | 317.4 MB                                 |
| maxCpuMsEstimate       | 5799 ms                                  |
| statSampleCount        | 306                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 112.1 ms        | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 2300 ms  | 292 MB       | 4521 ms          | 91/91           | 0    |
| 1   | captured | 2        | 109.9 ms        | 0.3 ms            | 0 ms              | 6.9 MB           | 0 ms             | 2247 ms  | 305.6 MB     | 4442 ms          | 89/89           | 0    |
| 2   | captured | 2        | 116.3 ms        | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 2232 ms  | 284.7 MB     | 4431 ms          | 87/87           | 0    |
