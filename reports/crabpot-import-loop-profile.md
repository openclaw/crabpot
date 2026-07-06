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
| p50WallMs                      | 2432     |
| p95WallMs                      | 2469     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 2.2 MB   |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 115.3 ms |
| p95OpenClawImportMs            | 115.8 ms |
| p50OpenClawActivationMs        | 0.4 ms   |
| p95OpenClawActivationMs        | 0.5 ms   |
| maxPeakRssMb                   | 312.8 MB |
| maxCpuMsEstimate               | 4857 ms  |
| baselineReferenceWallMs        | 2514 ms  |
| baselineReferencePeakRssMb     | 310.6 MB |
| baselineReferenceCpuMsEstimate | 5006 ms  |
| statSampleCount                | 286      |
| rssSampleCount                 | 286      |
| cpuSampleCount                 | 286      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2514 ms                                  |
| referencePeakRssMb     | 310.6 MB                                 |
| referenceCpuMsEstimate | 5006 ms                                  |
| maxWallMs              | 3312 ms                                  |
| maxPeakRssMb           | 322.4 MB                                 |
| maxCpuMsEstimate       | 5776 ms                                  |
| statSampleCount        | 322                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 112.6 ms        | 0.5 ms            | 0 ms              | 0 MB             | 0 ms             | 2432 ms  | 308.8 MB     | 4797 ms          | 96/96           | 0    |
| 1   | captured | 2        | 115.3 ms        | 0.4 ms            | 0 ms              | 2.2 MB           | 0 ms             | 2469 ms  | 312.8 MB     | 4857 ms          | 97/97           | 0    |
| 2   | captured | 2        | 115.8 ms        | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 2351 ms  | 301.7 MB     | 4634 ms          | 93/93           | 0    |
