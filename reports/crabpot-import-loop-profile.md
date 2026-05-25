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
| p50WallMs                      | 1553     |
| p95WallMs                      | 1568     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 108.7 ms |
| p95OpenClawImportMs            | 111.1 ms |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.3 ms   |
| maxPeakRssMb                   | 258.5 MB |
| maxCpuMsEstimate               | 2821 ms  |
| baselineReferenceWallMs        | 1597 ms  |
| baselineReferencePeakRssMb     | 259.8 MB |
| baselineReferenceCpuMsEstimate | 2958 ms  |
| statSampleCount                | 182      |
| rssSampleCount                 | 182      |
| cpuSampleCount                 | 182      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 1597 ms                                  |
| referencePeakRssMb     | 259.8 MB                                 |
| referenceCpuMsEstimate | 2958 ms                                  |
| maxWallMs              | 2092 ms                                  |
| maxPeakRssMb           | 276.4 MB                                 |
| maxCpuMsEstimate       | 3699 ms                                  |
| statSampleCount        | 207                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 111.1 ms        | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 1568 ms  | 254 MB       | 2821 ms          | 62/62           | 0    |
| 1   | captured | 2        | 108.7 ms        | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 1553 ms  | 258.5 MB     | 2816 ms          | 61/61           | 0    |
| 2   | captured | 2        | 108.7 ms        | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 1497 ms  | 258.3 MB     | 2768 ms          | 59/59           | 0    |
