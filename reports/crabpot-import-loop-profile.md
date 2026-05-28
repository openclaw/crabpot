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
| p50WallMs                      | 1486     |
| p95WallMs                      | 1530     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 10       |
| maxPluginPeakRssDeltaMb        | 5.5 MB   |
| maxPluginCpuDeltaMsEstimate    | 68 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 95.5 ms  |
| p95OpenClawImportMs            | 99.2 ms  |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.3 ms   |
| maxPeakRssMb                   | 293.5 MB |
| maxCpuMsEstimate               | 2946 ms  |
| baselineReferenceWallMs        | 1520 ms  |
| baselineReferencePeakRssMb     | 288 MB   |
| baselineReferenceCpuMsEstimate | 2878 ms  |
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
| referenceWallMs        | 1520 ms                                  |
| referencePeakRssMb     | 288 MB                                   |
| referenceCpuMsEstimate | 2878 ms                                  |
| maxWallMs              | 2029 ms                                  |
| maxPeakRssMb           | 291.8 MB                                 |
| maxCpuMsEstimate       | 3659 ms                                  |
| statSampleCount        | 197                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 99.2 ms         | 0.3 ms            | 0 ms              | 5.5 MB           | 0 ms             | 1461 ms  | 293.5 MB     | 2797 ms          | 58/58           | 0    |
| 1   | captured | 2        | 95.5 ms         | 0.3 ms            | 0 ms              | 0 MB             | 23 ms            | 1486 ms  | 285.2 MB     | 2901 ms          | 59/59           | 0    |
| 2   | captured | 2        | 95.5 ms         | 0.3 ms            | 10 ms             | 4.6 MB           | 68 ms            | 1530 ms  | 292.6 MB     | 2946 ms          | 61/61           | 0    |
