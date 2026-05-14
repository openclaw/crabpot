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
| p50WallMs                      | 2457     |
| p95WallMs                      | 2487     |
| p50PluginWallDeltaMs           | 46       |
| p95PluginWallDeltaMs           | 76       |
| maxPluginPeakRssDeltaMb        | 1.8 MB   |
| maxPluginCpuDeltaMsEstimate    | 133 ms   |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 77.2 ms  |
| p95OpenClawImportMs            | 86.2 ms  |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.3 ms   |
| maxPeakRssMb                   | 350 MB   |
| maxCpuMsEstimate               | 4852 ms  |
| baselineReferenceWallMs        | 2411 ms  |
| baselineReferencePeakRssMb     | 348.2 MB |
| baselineReferenceCpuMsEstimate | 4719 ms  |
| statSampleCount                | 291      |
| rssSampleCount                 | 291      |
| cpuSampleCount                 | 291      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2411 ms                                  |
| referencePeakRssMb     | 348.2 MB                                 |
| referenceCpuMsEstimate | 4719 ms                                  |
| maxWallMs              | 2956 ms                                  |
| maxPeakRssMb           | 349.5 MB                                 |
| maxCpuMsEstimate       | 5331 ms                                  |
| statSampleCount        | 302                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 77.2 ms         | 0.3 ms            | 76 ms             | 0 MB             | 129 ms           | 2487 ms  | 326.2 MB     | 4848 ms          | 98/98           | 0    |
| 1   | captured | 2        | 76.1 ms         | 0.3 ms            | 46 ms             | 0 MB             | 133 ms           | 2457 ms  | 330.6 MB     | 4852 ms          | 97/97           | 0    |
| 2   | captured | 2        | 86.2 ms         | 0.3 ms            | 32 ms             | 1.8 MB           | 83 ms            | 2443 ms  | 350 MB       | 4802 ms          | 96/96           | 0    |
