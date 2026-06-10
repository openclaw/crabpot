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
| p50WallMs                      | 2415     |
| p95WallMs                      | 2490     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 10       |
| maxPluginPeakRssDeltaMb        | 0.1 MB   |
| maxPluginCpuDeltaMsEstimate    | 11 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 114 ms   |
| p95OpenClawImportMs            | 114 ms   |
| p50OpenClawActivationMs        | 0.4 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 302.4 MB |
| maxCpuMsEstimate               | 4891 ms  |
| baselineReferenceWallMs        | 2480 ms  |
| baselineReferencePeakRssMb     | 302.3 MB |
| baselineReferenceCpuMsEstimate | 4880 ms  |
| statSampleCount                | 287      |
| rssSampleCount                 | 287      |
| cpuSampleCount                 | 287      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2480 ms                                  |
| referencePeakRssMb     | 302.3 MB                                 |
| referenceCpuMsEstimate | 4880 ms                                  |
| maxWallMs              | 3204 ms                                  |
| maxPeakRssMb           | 309.5 MB                                 |
| maxCpuMsEstimate       | 5718 ms                                  |
| statSampleCount        | 315                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 114 ms          | 0.4 ms            | 0 ms              | 0 MB             | 0 ms             | 2415 ms  | 281.1 MB     | 4770 ms          | 96/96           | 0    |
| 1   | captured | 2        | 111.3 ms        | 0.4 ms            | 0 ms              | 0 MB             | 0 ms             | 2335 ms  | 287.3 MB     | 4664 ms          | 93/93           | 0    |
| 2   | captured | 2        | 114 ms          | 0.4 ms            | 10 ms             | 0.1 MB           | 11 ms            | 2490 ms  | 302.4 MB     | 4891 ms          | 98/98           | 0    |
