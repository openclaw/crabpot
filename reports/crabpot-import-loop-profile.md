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
| p50WallMs                      | 1844     |
| p95WallMs                      | 1898     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 40       |
| maxPluginPeakRssDeltaMb        | 12 MB    |
| maxPluginCpuDeltaMsEstimate    | 90 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 105.4 ms |
| p95OpenClawImportMs            | 111.4 ms |
| p50OpenClawActivationMs        | 0.4 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 315.8 MB |
| maxCpuMsEstimate               | 3772 ms  |
| baselineReferenceWallMs        | 1858 ms  |
| baselineReferencePeakRssMb     | 303.8 MB |
| baselineReferenceCpuMsEstimate | 3682 ms  |
| statSampleCount                | 220      |
| rssSampleCount                 | 220      |
| cpuSampleCount                 | 220      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 1858 ms                                  |
| referencePeakRssMb     | 303.8 MB                                 |
| referenceCpuMsEstimate | 3682 ms                                  |
| maxWallMs              | 2731 ms                                  |
| maxPeakRssMb           | 306.9 MB                                 |
| maxCpuMsEstimate       | 4937 ms                                  |
| statSampleCount        | 252                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 105.4 ms        | 0.4 ms            | 0 ms              | 9.4 MB           | 0 ms             | 1840 ms  | 313.2 MB     | 3671 ms          | 72/72           | 0    |
| 1   | captured | 2        | 111.4 ms        | 0.3 ms            | 40 ms             | 12 MB            | 90 ms            | 1898 ms  | 315.8 MB     | 3772 ms          | 75/75           | 0    |
| 2   | captured | 2        | 100.1 ms        | 0.4 ms            | 0 ms              | 0 MB             | 0 ms             | 1844 ms  | 283.9 MB     | 3660 ms          | 73/73           | 0    |
