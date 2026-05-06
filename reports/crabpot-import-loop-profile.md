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
| p50WallMs                      | 2410     |
| p95WallMs                      | 2469     |
| p50PluginWallDeltaMs           | 23       |
| p95PluginWallDeltaMs           | 82       |
| maxPluginPeakRssDeltaMb        | 8.4 MB   |
| maxPluginCpuDeltaMsEstimate    | 219 ms   |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 80.7 ms  |
| p95OpenClawImportMs            | 97.2 ms  |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.3 ms   |
| maxPeakRssMb                   | 342.3 MB |
| maxCpuMsEstimate               | 4811 ms  |
| baselineReferenceWallMs        | 2387 ms  |
| baselineReferencePeakRssMb     | 333.9 MB |
| baselineReferenceCpuMsEstimate | 4592 ms  |
| statSampleCount                | 283      |
| rssSampleCount                 | 283      |
| cpuSampleCount                 | 283      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2387 ms                                  |
| referencePeakRssMb     | 333.9 MB                                 |
| referenceCpuMsEstimate | 4592 ms                                  |
| maxWallMs              | 2865 ms                                  |
| maxPeakRssMb           | 337.1 MB                                 |
| maxCpuMsEstimate       | 5161 ms                                  |
| statSampleCount        | 295                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 97.2 ms         | 0.3 ms            | 82 ms             | 8.4 MB           | 219 ms           | 2469 ms  | 342.3 MB     | 4811 ms          | 97/97           | 0    |
| 1   | captured | 2        | 76.1 ms         | 0.3 ms            | 23 ms             | 0 MB             | 137 ms           | 2410 ms  | 326.2 MB     | 4729 ms          | 95/95           | 0    |
| 2   | captured | 2        | 80.7 ms         | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 2304 ms  | 333.3 MB     | 4494 ms          | 91/91           | 0    |
