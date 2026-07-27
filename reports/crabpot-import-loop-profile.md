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
| p50WallMs                      | 1241     |
| p95WallMs                      | 1244     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 2.3 MB   |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 60.9 ms  |
| p95OpenClawImportMs            | 62.2 ms  |
| p50OpenClawActivationMs        | 0.1 ms   |
| p95OpenClawActivationMs        | 0.1 ms   |
| maxPeakRssMb                   | 374.5 MB |
| maxCpuMsEstimate               | 1197 ms  |
| baselineReferenceWallMs        | 1270 ms  |
| baselineReferencePeakRssMb     | 372.2 MB |
| baselineReferenceCpuMsEstimate | 1218 ms  |
| statSampleCount                | 140      |
| rssSampleCount                 | 140      |
| cpuSampleCount                 | 140      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 1270 ms                                  |
| referencePeakRssMb     | 372.2 MB                                 |
| referenceCpuMsEstimate | 1218 ms                                  |
| maxWallMs              | 1979 ms                                  |
| maxPeakRssMb           | 373 MB                                   |
| maxCpuMsEstimate       | 1493 ms                                  |
| statSampleCount        | 170                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 62.2 ms         | 0.1 ms            | 0 ms              | 0 MB             | 0 ms             | 1244 ms  | 372.2 MB     | 1179 ms          | 47/47           | 0    |
| 1   | captured | 2        | 60.2 ms         | 0.1 ms            | 0 ms              | 0.7 MB           | 0 ms             | 1233 ms  | 372.9 MB     | 1173 ms          | 46/46           | 0    |
| 2   | captured | 2        | 60.9 ms         | 0.1 ms            | 0 ms              | 2.3 MB           | 0 ms             | 1241 ms  | 374.5 MB     | 1197 ms          | 47/47           | 0    |
