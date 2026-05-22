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
| p50WallMs                      | 1153     |
| p95WallMs                      | 1162     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 8        |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 65.4 ms  |
| p95OpenClawImportMs            | 67.6 ms  |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.3 ms   |
| maxPeakRssMb                   | 259.6 MB |
| maxCpuMsEstimate               | 2111 ms  |
| baselineReferenceWallMs        | 1154 ms  |
| baselineReferencePeakRssMb     | 261.9 MB |
| baselineReferenceCpuMsEstimate | 2125 ms  |
| statSampleCount                | 137      |
| rssSampleCount                 | 137      |
| cpuSampleCount                 | 137      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 1154 ms                                  |
| referencePeakRssMb     | 261.9 MB                                 |
| referenceCpuMsEstimate | 2125 ms                                  |
| maxWallMs              | 1529 ms                                  |
| maxPeakRssMb           | 265.8 MB                                 |
| maxCpuMsEstimate       | 2728 ms                                  |
| statSampleCount        | 151                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 67.6 ms         | 0.3 ms            | 8 ms              | 0 MB             | 0 ms             | 1162 ms  | 259.6 MB     | 2111 ms          | 46/46           | 0    |
| 1   | captured | 2        | 62.5 ms         | 0.2 ms            | 0 ms              | 0 MB             | 0 ms             | 1153 ms  | 254.2 MB     | 2108 ms          | 46/46           | 0    |
| 2   | captured | 2        | 65.4 ms         | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 1153 ms  | 258.9 MB     | 2103 ms          | 45/45           | 0    |
