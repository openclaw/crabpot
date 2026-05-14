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
| p50WallMs                      | 2449     |
| p95WallMs                      | 2518     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 30       |
| maxPluginPeakRssDeltaMb        | 9.4 MB   |
| maxPluginCpuDeltaMsEstimate    | 161 ms   |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 89 ms    |
| p95OpenClawImportMs            | 89.8 ms  |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.3 ms   |
| maxPeakRssMb                   | 340.2 MB |
| maxCpuMsEstimate               | 4862 ms  |
| baselineReferenceWallMs        | 2488 ms  |
| baselineReferencePeakRssMb     | 330.8 MB |
| baselineReferenceCpuMsEstimate | 4701 ms  |
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
| referenceWallMs        | 2488 ms                                  |
| referencePeakRssMb     | 330.8 MB                                 |
| referenceCpuMsEstimate | 4701 ms                                  |
| maxWallMs              | 4436 ms                                  |
| maxPeakRssMb           | 346.3 MB                                 |
| maxCpuMsEstimate       | 4733 ms                                  |
| statSampleCount        | 368                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 89.8 ms         | 0.3 ms            | 30 ms             | 5.7 MB           | 161 ms           | 2518 ms  | 336.5 MB     | 4862 ms          | 99/99           | 0    |
| 1   | captured | 2        | 84.2 ms         | 0.3 ms            | 0 ms              | 9.4 MB           | 0 ms             | 2449 ms  | 340.2 MB     | 4681 ms          | 96/96           | 0    |
| 2   | captured | 2        | 89 ms           | 0.3 ms            | 0 ms              | 5.5 MB           | 18 ms            | 2421 ms  | 336.3 MB     | 4719 ms          | 96/96           | 0    |
