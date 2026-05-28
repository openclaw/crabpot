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
| p50WallMs                      | 1504     |
| p95WallMs                      | 1505     |
| p50PluginWallDeltaMs           | 16       |
| p95PluginWallDeltaMs           | 17       |
| maxPluginPeakRssDeltaMb        | 2.2 MB   |
| maxPluginCpuDeltaMsEstimate    | 1 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 96.2 ms  |
| p95OpenClawImportMs            | 97.6 ms  |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.3 ms   |
| maxPeakRssMb                   | 295.8 MB |
| maxCpuMsEstimate               | 2891 ms  |
| baselineReferenceWallMs        | 1488 ms  |
| baselineReferencePeakRssMb     | 293.6 MB |
| baselineReferenceCpuMsEstimate | 2890 ms  |
| statSampleCount                | 177      |
| rssSampleCount                 | 177      |
| cpuSampleCount                 | 177      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 1488 ms                                  |
| referencePeakRssMb     | 293.6 MB                                 |
| referenceCpuMsEstimate | 2890 ms                                  |
| maxWallMs              | 1956 ms                                  |
| maxPeakRssMb           | 297 MB                                   |
| maxCpuMsEstimate       | 3456 ms                                  |
| statSampleCount        | 193                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 97.6 ms         | 0.3 ms            | 16 ms             | 0 MB             | 1 ms             | 1504 ms  | 292.6 MB     | 2891 ms          | 59/59           | 0    |
| 1   | captured | 2        | 96.2 ms         | 0.3 ms            | 7 ms              | 0 MB             | 0 ms             | 1495 ms  | 289 MB       | 2838 ms          | 59/59           | 0    |
| 2   | captured | 2        | 91.7 ms         | 0.3 ms            | 17 ms             | 2.2 MB           | 0 ms             | 1505 ms  | 295.8 MB     | 2885 ms          | 59/59           | 0    |
