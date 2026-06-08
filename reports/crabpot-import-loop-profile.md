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
| p50WallMs                      | 2401     |
| p95WallMs                      | 2442     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 10.8 MB  |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 117.7 ms |
| p95OpenClawImportMs            | 118.4 ms |
| p50OpenClawActivationMs        | 0.4 ms   |
| p95OpenClawActivationMs        | 0.5 ms   |
| maxPeakRssMb                   | 297.6 MB |
| maxCpuMsEstimate               | 4852 ms  |
| baselineReferenceWallMs        | 2489 ms  |
| baselineReferencePeakRssMb     | 286.8 MB |
| baselineReferenceCpuMsEstimate | 4948 ms  |
| statSampleCount                | 284      |
| rssSampleCount                 | 284      |
| cpuSampleCount                 | 284      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2489 ms                                  |
| referencePeakRssMb     | 286.8 MB                                 |
| referenceCpuMsEstimate | 4948 ms                                  |
| maxWallMs              | 3273 ms                                  |
| maxPeakRssMb           | 322 MB                                   |
| maxCpuMsEstimate       | 5843 ms                                  |
| statSampleCount        | 322                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 118.4 ms        | 0.5 ms            | 0 ms              | 0.7 MB           | 0 ms             | 2401 ms  | 287.5 MB     | 4683 ms          | 95/95           | 0    |
| 1   | captured | 2        | 117.7 ms        | 0.4 ms            | 0 ms              | 10.3 MB          | 0 ms             | 2335 ms  | 297.1 MB     | 4685 ms          | 93/93           | 0    |
| 2   | captured | 2        | 117.1 ms        | 0.3 ms            | 0 ms              | 10.8 MB          | 0 ms             | 2442 ms  | 297.6 MB     | 4852 ms          | 96/96           | 0    |
