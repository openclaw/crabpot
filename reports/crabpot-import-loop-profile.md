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
| p50WallMs                      | 2447     |
| p95WallMs                      | 2455     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 13.6 MB  |
| maxPluginCpuDeltaMsEstimate    | 33 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 117.8 ms |
| p95OpenClawImportMs            | 118.5 ms |
| p50OpenClawActivationMs        | 0.4 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 313.2 MB |
| maxCpuMsEstimate               | 4911 ms  |
| baselineReferenceWallMs        | 2466 ms  |
| baselineReferencePeakRssMb     | 299.6 MB |
| baselineReferenceCpuMsEstimate | 4878 ms  |
| statSampleCount                | 288      |
| rssSampleCount                 | 288      |
| cpuSampleCount                 | 288      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2466 ms                                  |
| referencePeakRssMb     | 299.6 MB                                 |
| referenceCpuMsEstimate | 4878 ms                                  |
| maxWallMs              | 3331 ms                                  |
| maxPeakRssMb           | 322.9 MB                                 |
| maxCpuMsEstimate       | 6040 ms                                  |
| statSampleCount        | 322                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 118.5 ms        | 0.4 ms            | 0 ms              | 6.3 MB           | 0 ms             | 2390 ms  | 305.9 MB     | 4772 ms          | 94/94           | 0    |
| 1   | captured | 2        | 117.8 ms        | 0.4 ms            | 0 ms              | 13.6 MB          | 0 ms             | 2455 ms  | 313.2 MB     | 4863 ms          | 97/97           | 0    |
| 2   | captured | 2        | 114 ms          | 0.3 ms            | 0 ms              | 0 MB             | 33 ms            | 2447 ms  | 289 MB       | 4911 ms          | 97/97           | 0    |
