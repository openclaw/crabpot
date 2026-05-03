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
| p50WallMs                      | 2366     |
| p95WallMs                      | 2394     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 21       |
| maxPluginPeakRssDeltaMb        | 2.6 MB   |
| maxPluginCpuDeltaMsEstimate    | 74 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 53 ms    |
| p95OpenClawImportMs            | 57.1 ms  |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.3 ms   |
| maxPeakRssMb                   | 338.5 MB |
| maxCpuMsEstimate               | 4725 ms  |
| baselineReferenceWallMs        | 2373 ms  |
| baselineReferencePeakRssMb     | 335.9 MB |
| baselineReferenceCpuMsEstimate | 4651 ms  |
| statSampleCount                | 278      |
| rssSampleCount                 | 278      |
| cpuSampleCount                 | 278      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2373 ms                                  |
| referencePeakRssMb     | 335.9 MB                                 |
| referenceCpuMsEstimate | 4651 ms                                  |
| maxWallMs              | 2897 ms                                  |
| maxPeakRssMb           | 341.3 MB                                 |
| maxCpuMsEstimate       | 5262 ms                                  |
| statSampleCount        | 301                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 53 ms           | 0.3 ms            | 21 ms             | 2.6 MB           | 74 ms            | 2394 ms  | 338.5 MB     | 4725 ms          | 93/93           | 0    |
| 1   | captured | 2        | 52.3 ms         | 0.3 ms            | 0 ms              | 0 MB             | 24 ms            | 2344 ms  | 333.2 MB     | 4675 ms          | 93/93           | 0    |
| 2   | captured | 2        | 57.1 ms         | 0.3 ms            | 0 ms              | 0 MB             | 47 ms            | 2366 ms  | 325.6 MB     | 4698 ms          | 92/92           | 0    |
