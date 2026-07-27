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
| p50WallMs                      | 1234     |
| p95WallMs                      | 1290     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 0.9 MB   |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 60.6 ms  |
| p95OpenClawImportMs            | 61 ms    |
| p50OpenClawActivationMs        | 0.1 ms   |
| p95OpenClawActivationMs        | 0.1 ms   |
| maxPeakRssMb                   | 374.1 MB |
| maxCpuMsEstimate               | 1226 ms  |
| baselineReferenceWallMs        | 2181 ms  |
| baselineReferencePeakRssMb     | 373.2 MB |
| baselineReferenceCpuMsEstimate | 2106 ms  |
| statSampleCount                | 143      |
| rssSampleCount                 | 143      |
| cpuSampleCount                 | 143      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2181 ms                                  |
| referencePeakRssMb     | 373.2 MB                                 |
| referenceCpuMsEstimate | 2106 ms                                  |
| maxWallMs              | 2650 ms                                  |
| maxPeakRssMb           | 384.8 MB                                 |
| maxCpuMsEstimate       | 2270 ms                                  |
| statSampleCount        | 246                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 61 ms           | 0.1 ms            | 0 ms              | 0 MB             | 0 ms             | 1290 ms  | 372.4 MB     | 1226 ms          | 49/49           | 0    |
| 1   | captured | 2        | 60.6 ms         | 0.1 ms            | 0 ms              | 0 MB             | 0 ms             | 1227 ms  | 372.3 MB     | 1178 ms          | 47/47           | 0    |
| 2   | captured | 2        | 60.6 ms         | 0.1 ms            | 0 ms              | 0.9 MB           | 0 ms             | 1234 ms  | 374.1 MB     | 1166 ms          | 47/47           | 0    |
