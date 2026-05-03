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
| p50WallMs                      | 2365     |
| p95WallMs                      | 2423     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 8        |
| maxPluginPeakRssDeltaMb        | 0.6 MB   |
| maxPluginCpuDeltaMsEstimate    | 39 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 53.3 ms  |
| p95OpenClawImportMs            | 54.6 ms  |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.3 ms   |
| maxPeakRssMb                   | 339.3 MB |
| maxCpuMsEstimate               | 4782 ms  |
| baselineReferenceWallMs        | 2415 ms  |
| baselineReferencePeakRssMb     | 338.7 MB |
| baselineReferenceCpuMsEstimate | 4743 ms  |
| statSampleCount                | 279      |
| rssSampleCount                 | 279      |
| cpuSampleCount                 | 279      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2415 ms                                  |
| referencePeakRssMb     | 338.7 MB                                 |
| referenceCpuMsEstimate | 4743 ms                                  |
| maxWallMs              | 2921 ms                                  |
| maxPeakRssMb           | 342.9 MB                                 |
| maxCpuMsEstimate       | 5406 ms                                  |
| statSampleCount        | 300                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 54.6 ms         | 0.3 ms            | 8 ms              | 0.6 MB           | 39 ms            | 2423 ms  | 339.3 MB     | 4782 ms          | 94/94           | 0    |
| 1   | captured | 2        | 53.3 ms         | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 2365 ms  | 338 MB       | 4630 ms          | 93/93           | 0    |
| 2   | captured | 2        | 52 ms           | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 2334 ms  | 329.2 MB     | 4632 ms          | 92/92           | 0    |
