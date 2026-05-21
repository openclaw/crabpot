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
| p50WallMs                      | 1488     |
| p95WallMs                      | 1514     |
| p50PluginWallDeltaMs           | 2        |
| p95PluginWallDeltaMs           | 28       |
| maxPluginPeakRssDeltaMb        | 0.5 MB   |
| maxPluginCpuDeltaMsEstimate    | 42 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 80.7 ms  |
| p95OpenClawImportMs            | 93.4 ms  |
| p50OpenClawActivationMs        | 0.4 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 258.7 MB |
| maxCpuMsEstimate               | 2784 ms  |
| baselineReferenceWallMs        | 1486 ms  |
| baselineReferencePeakRssMb     | 258.2 MB |
| baselineReferenceCpuMsEstimate | 2742 ms  |
| statSampleCount                | 178      |
| rssSampleCount                 | 178      |
| cpuSampleCount                 | 178      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 1486 ms                                  |
| referencePeakRssMb     | 258.2 MB                                 |
| referenceCpuMsEstimate | 2742 ms                                  |
| maxWallMs              | 1996 ms                                  |
| maxPeakRssMb           | 270.1 MB                                 |
| maxCpuMsEstimate       | 3517 ms                                  |
| statSampleCount        | 195                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 93.4 ms         | 0.4 ms            | 2 ms              | 0.5 MB           | 0 ms             | 1488 ms  | 258.7 MB     | 2736 ms          | 59/59           | 0    |
| 1   | captured | 2        | 80.7 ms         | 0.4 ms            | 0 ms              | 0 MB             | 24 ms            | 1481 ms  | 251.2 MB     | 2766 ms          | 59/59           | 0    |
| 2   | captured | 2        | 80.2 ms         | 0.4 ms            | 28 ms             | 0 MB             | 42 ms            | 1514 ms  | 256.8 MB     | 2784 ms          | 60/60           | 0    |
