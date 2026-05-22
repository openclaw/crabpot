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
| p50WallMs                      | 1157     |
| p95WallMs                      | 1172     |
| p50PluginWallDeltaMs           | 9        |
| p95PluginWallDeltaMs           | 24       |
| maxPluginPeakRssDeltaMb        | 3.6 MB   |
| maxPluginCpuDeltaMsEstimate    | 104 ms   |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 65.8 ms  |
| p95OpenClawImportMs            | 74.4 ms  |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.3 ms   |
| maxPeakRssMb                   | 263 MB   |
| maxCpuMsEstimate               | 2173 ms  |
| baselineReferenceWallMs        | 1148 ms  |
| baselineReferencePeakRssMb     | 259.4 MB |
| baselineReferenceCpuMsEstimate | 2069 ms  |
| statSampleCount                | 135      |
| rssSampleCount                 | 135      |
| cpuSampleCount                 | 135      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 1148 ms                                  |
| referencePeakRssMb     | 259.4 MB                                 |
| referenceCpuMsEstimate | 2069 ms                                  |
| maxWallMs              | 1513 ms                                  |
| maxPeakRssMb           | 267.8 MB                                 |
| maxCpuMsEstimate       | 2662 ms                                  |
| statSampleCount        | 149                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 74.4 ms         | 0.3 ms            | 9 ms              | 0 MB             | 78 ms            | 1157 ms  | 255.1 MB     | 2147 ms          | 45/45           | 0    |
| 1   | captured | 2        | 64.7 ms         | 0.3 ms            | 0 ms              | 0.3 MB           | 0 ms             | 1112 ms  | 259.7 MB     | 2014 ms          | 44/44           | 0    |
| 2   | captured | 2        | 65.8 ms         | 0.2 ms            | 24 ms             | 3.6 MB           | 104 ms           | 1172 ms  | 263 MB       | 2173 ms          | 46/46           | 0    |
