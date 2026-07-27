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
| p50WallMs                      | 1458     |
| p95WallMs                      | 1463     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 4.3 MB   |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 68.6 ms  |
| p95OpenClawImportMs            | 70.7 ms  |
| p50OpenClawActivationMs        | 0.1 ms   |
| p95OpenClawActivationMs        | 0.2 ms   |
| maxPeakRssMb                   | 384.9 MB |
| maxCpuMsEstimate               | 1446 ms  |
| baselineReferenceWallMs        | 2184 ms  |
| baselineReferencePeakRssMb     | 380.6 MB |
| baselineReferenceCpuMsEstimate | 2240 ms  |
| statSampleCount                | 163      |
| rssSampleCount                 | 163      |
| cpuSampleCount                 | 163      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2184 ms                                  |
| referencePeakRssMb     | 380.6 MB                                 |
| referenceCpuMsEstimate | 2240 ms                                  |
| maxWallMs              | 2697 ms                                  |
| maxPeakRssMb           | 383 MB                                   |
| maxCpuMsEstimate       | 2370 ms                                  |
| statSampleCount        | 254                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 70.7 ms         | 0.2 ms            | 0 ms              | 4.3 MB           | 0 ms             | 1458 ms  | 384.9 MB     | 1446 ms          | 55/55           | 0    |
| 1   | captured | 2        | 68.6 ms         | 0.1 ms            | 0 ms              | 0 MB             | 0 ms             | 1463 ms  | 372.2 MB     | 1418 ms          | 55/55           | 0    |
| 2   | captured | 2        | 67.5 ms         | 0.1 ms            | 0 ms              | 0 MB             | 0 ms             | 1403 ms  | 370.9 MB     | 1340 ms          | 53/53           | 0    |
