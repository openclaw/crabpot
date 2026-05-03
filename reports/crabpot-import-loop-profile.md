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
| p50WallMs                      | 2318     |
| p95WallMs                      | 2340     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 23.5 MB  |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 53.4 ms  |
| p95OpenClawImportMs            | 53.6 ms  |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.3 ms   |
| maxPeakRssMb                   | 354.8 MB |
| maxCpuMsEstimate               | 4633 ms  |
| baselineReferenceWallMs        | 2343 ms  |
| baselineReferencePeakRssMb     | 331.3 MB |
| baselineReferenceCpuMsEstimate | 4698 ms  |
| statSampleCount                | 274      |
| rssSampleCount                 | 274      |
| cpuSampleCount                 | 274      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2343 ms                                  |
| referencePeakRssMb     | 331.3 MB                                 |
| referenceCpuMsEstimate | 4698 ms                                  |
| maxWallMs              | 2820 ms                                  |
| maxPeakRssMb           | 340.3 MB                                 |
| maxCpuMsEstimate       | 5201 ms                                  |
| statSampleCount        | 294                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 53.6 ms         | 0.3 ms            | 0 ms              | 14.4 MB          | 0 ms             | 2315 ms  | 345.7 MB     | 4550 ms          | 92/92           | 0    |
| 1   | captured | 2        | 52.5 ms         | 0.3 ms            | 0 ms              | 23.5 MB          | 0 ms             | 2340 ms  | 354.8 MB     | 4633 ms          | 91/91           | 0    |
| 2   | captured | 2        | 53.4 ms         | 0.3 ms            | 0 ms              | 2.6 MB           | 0 ms             | 2318 ms  | 333.9 MB     | 4589 ms          | 91/91           | 0    |
