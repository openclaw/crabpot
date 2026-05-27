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
| p50WallMs                      | 1601     |
| p95WallMs                      | 1616     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 3        |
| maxPluginPeakRssDeltaMb        | 0.8 MB   |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 112.5 ms |
| p95OpenClawImportMs            | 114.8 ms |
| p50OpenClawActivationMs        | 0.4 ms   |
| p95OpenClawActivationMs        | 0.5 ms   |
| maxPeakRssMb                   | 261.7 MB |
| maxCpuMsEstimate               | 2933 ms  |
| baselineReferenceWallMs        | 1613 ms  |
| baselineReferencePeakRssMb     | 260.9 MB |
| baselineReferenceCpuMsEstimate | 2937 ms  |
| statSampleCount                | 188      |
| rssSampleCount                 | 188      |
| cpuSampleCount                 | 188      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 1613 ms                                  |
| referencePeakRssMb     | 260.9 MB                                 |
| referenceCpuMsEstimate | 2937 ms                                  |
| maxWallMs              | 2164 ms                                  |
| maxPeakRssMb           | 268.2 MB                                 |
| maxCpuMsEstimate       | 3850 ms                                  |
| statSampleCount        | 212                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 114.8 ms        | 0.4 ms            | 3 ms              | 0 MB             | 0 ms             | 1616 ms  | 256 MB       | 2933 ms          | 64/64           | 0    |
| 1   | captured | 2        | 112.5 ms        | 0.5 ms            | 0 ms              | 0.8 MB           | 0 ms             | 1601 ms  | 261.7 MB     | 2904 ms          | 63/63           | 0    |
| 2   | captured | 2        | 108.3 ms        | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 1543 ms  | 257.7 MB     | 2822 ms          | 61/61           | 0    |
