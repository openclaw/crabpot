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
| p50WallMs                      | 2887     |
| p95WallMs                      | 2892     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 71 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 59.1 ms  |
| p95OpenClawImportMs            | 61.5 ms  |
| p50OpenClawActivationMs        | 0.4 ms   |
| p95OpenClawActivationMs        | 0.5 ms   |
| maxPeakRssMb                   | 420.7 MB |
| maxCpuMsEstimate               | 3951 ms  |
| baselineReferenceWallMs        | 2895 ms  |
| baselineReferencePeakRssMb     | 421.9 MB |
| baselineReferenceCpuMsEstimate | 3880 ms  |
| statSampleCount                | 344      |
| rssSampleCount                 | 344      |
| cpuSampleCount                 | 344      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2895 ms                                  |
| referencePeakRssMb     | 421.9 MB                                 |
| referenceCpuMsEstimate | 3880 ms                                  |
| maxWallMs              | 6354 ms                                  |
| maxPeakRssMb           | 597.9 MB                                 |
| maxCpuMsEstimate       | 6046 ms                                  |
| statSampleCount        | 483                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 61.5 ms         | 0.5 ms            | 0 ms              | 0 MB             | 0 ms             | 2887 ms  | 420.7 MB     | 3848 ms          | 115/115         | 0    |
| 1   | captured | 2        | 57.5 ms         | 0.4 ms            | 0 ms              | 0 MB             | 0 ms             | 2863 ms  | 419.4 MB     | 3816 ms          | 114/114         | 0    |
| 2   | captured | 2        | 59.1 ms         | 0.4 ms            | 0 ms              | 0 MB             | 71 ms            | 2892 ms  | 418.8 MB     | 3951 ms          | 115/115         | 0    |
