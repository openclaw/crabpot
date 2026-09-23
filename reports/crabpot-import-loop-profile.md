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
| p50WallMs                      | 2926     |
| p95WallMs                      | 2960     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 19       |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 4 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 60.9 ms  |
| p95OpenClawImportMs            | 61 ms    |
| p50OpenClawActivationMs        | 0.5 ms   |
| p95OpenClawActivationMs        | 0.5 ms   |
| maxPeakRssMb                   | 421.1 MB |
| maxCpuMsEstimate               | 4021 ms  |
| baselineReferenceWallMs        | 2941 ms  |
| baselineReferencePeakRssMb     | 422.3 MB |
| baselineReferenceCpuMsEstimate | 4017 ms  |
| statSampleCount                | 351      |
| rssSampleCount                 | 351      |
| cpuSampleCount                 | 351      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2941 ms                                  |
| referencePeakRssMb     | 422.3 MB                                 |
| referenceCpuMsEstimate | 4017 ms                                  |
| maxWallMs              | 6723 ms                                  |
| maxPeakRssMb           | 575.3 MB                                 |
| maxCpuMsEstimate       | 6294 ms                                  |
| statSampleCount        | 500                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 60.9 ms         | 0.5 ms            | 19 ms             | 0 MB             | 4 ms             | 2960 ms  | 418.5 MB     | 4021 ms          | 118/118         | 0    |
| 1   | captured | 2        | 61 ms           | 0.5 ms            | 0 ms              | 0 MB             | 0 ms             | 2926 ms  | 421.1 MB     | 3995 ms          | 117/117         | 0    |
| 2   | captured | 2        | 59.7 ms         | 0.5 ms            | 0 ms              | 0 MB             | 0 ms             | 2921 ms  | 418.8 MB     | 4006 ms          | 116/116         | 0    |
