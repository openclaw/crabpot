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
| p50WallMs                      | 2201     |
| p95WallMs                      | 2214     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 12       |
| maxPluginPeakRssDeltaMb        | 2.3 MB   |
| maxPluginCpuDeltaMsEstimate    | 18 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 130.4 ms |
| p95OpenClawImportMs            | 132.9 ms |
| p50OpenClawActivationMs        | 0.4 ms   |
| p95OpenClawActivationMs        | 0.5 ms   |
| maxPeakRssMb                   | 286.9 MB |
| maxCpuMsEstimate               | 4313 ms  |
| baselineReferenceWallMs        | 2202 ms  |
| baselineReferencePeakRssMb     | 284.6 MB |
| baselineReferenceCpuMsEstimate | 4295 ms  |
| statSampleCount                | 258      |
| rssSampleCount                 | 258      |
| cpuSampleCount                 | 258      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2202 ms                                  |
| referencePeakRssMb     | 284.6 MB                                 |
| referenceCpuMsEstimate | 4295 ms                                  |
| maxWallMs              | 2991 ms                                  |
| maxPeakRssMb           | 304.5 MB                                 |
| maxCpuMsEstimate       | 5285 ms                                  |
| statSampleCount        | 282                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 128.3 ms        | 0.5 ms            | 0 ms              | 0 MB             | 11 ms            | 2201 ms  | 284 MB       | 4306 ms          | 85/85           | 0    |
| 1   | captured | 2        | 132.9 ms        | 0.4 ms            | 0 ms              | 2.3 MB           | 1 ms             | 2196 ms  | 286.9 MB     | 4296 ms          | 86/86           | 0    |
| 2   | captured | 2        | 130.4 ms        | 0.4 ms            | 12 ms             | 0 MB             | 18 ms            | 2214 ms  | 282.9 MB     | 4313 ms          | 87/87           | 0    |
