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
| p50WallMs                      | 2241     |
| p95WallMs                      | 2289     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 13       |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 79 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 111.2 ms |
| p95OpenClawImportMs            | 114.3 ms |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 295.3 MB |
| maxCpuMsEstimate               | 4575 ms  |
| baselineReferenceWallMs        | 2276 ms  |
| baselineReferencePeakRssMb     | 299.1 MB |
| baselineReferenceCpuMsEstimate | 4496 ms  |
| statSampleCount                | 266      |
| rssSampleCount                 | 266      |
| cpuSampleCount                 | 266      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2276 ms                                  |
| referencePeakRssMb     | 299.1 MB                                 |
| referenceCpuMsEstimate | 4496 ms                                  |
| maxWallMs              | 3133 ms                                  |
| maxPeakRssMb           | 320.1 MB                                 |
| maxCpuMsEstimate       | 5563 ms                                  |
| statSampleCount        | 301                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 114.3 ms        | 0.4 ms            | 0 ms              | 0 MB             | 0 ms             | 2219 ms  | 295.3 MB     | 4405 ms          | 87/87           | 0    |
| 1   | captured | 2        | 110.7 ms        | 0.3 ms            | 13 ms             | 0 MB             | 79 ms            | 2289 ms  | 283.2 MB     | 4575 ms          | 91/91           | 0    |
| 2   | captured | 2        | 111.2 ms        | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 2241 ms  | 288.4 MB     | 4407 ms          | 88/88           | 0    |
