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
| p50WallMs                      | 2348     |
| p95WallMs                      | 3319     |
| p50PluginWallDeltaMs           | 11       |
| p95PluginWallDeltaMs           | 982      |
| maxPluginPeakRssDeltaMb        | 21.5 MB  |
| maxPluginCpuDeltaMsEstimate    | 1516 ms  |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 62.2 ms  |
| p95OpenClawImportMs            | 66 ms    |
| p50OpenClawActivationMs        | 0.6 ms   |
| p95OpenClawActivationMs        | 0.6 ms   |
| maxPeakRssMb                   | 530.4 MB |
| maxCpuMsEstimate               | 4894 ms  |
| baselineReferenceWallMs        | 2337 ms  |
| baselineReferencePeakRssMb     | 508.9 MB |
| baselineReferenceCpuMsEstimate | 3378 ms  |
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
| referenceWallMs        | 2337 ms                                  |
| referencePeakRssMb     | 508.9 MB                                 |
| referenceCpuMsEstimate | 3378 ms                                  |
| maxWallMs              | 5673 ms                                  |
| maxPeakRssMb           | 735.6 MB                                 |
| maxCpuMsEstimate       | 5550 ms                                  |
| statSampleCount        | 411                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 66 ms           | 0.6 ms            | 11 ms             | 21.5 MB          | 141 ms           | 2348 ms  | 530.4 MB     | 3519 ms          | 93/93           | 0    |
| 1   | captured | 2        | 61 ms           | 0.6 ms            | 0 ms              | 0 MB             | 18 ms            | 2322 ms  | 508.3 MB     | 3396 ms          | 93/93           | 0    |
| 2   | captured | 2        | 62.2 ms         | 0.6 ms            | 982 ms            | 0 MB             | 1516 ms          | 3319 ms  | 506.1 MB     | 4894 ms          | 93/93           | 0    |
