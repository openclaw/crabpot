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
| p50WallMs                      | 2321     |
| p95WallMs                      | 2386     |
| p50PluginWallDeltaMs           | 39       |
| p95PluginWallDeltaMs           | 104      |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 177 ms   |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 106.9 ms |
| p95OpenClawImportMs            | 107.4 ms |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.3 ms   |
| maxPeakRssMb                   | 314.6 MB |
| maxCpuMsEstimate               | 4765 ms  |
| baselineReferenceWallMs        | 2282 ms  |
| baselineReferencePeakRssMb     | 315.8 MB |
| baselineReferenceCpuMsEstimate | 4588 ms  |
| statSampleCount                | 276      |
| rssSampleCount                 | 276      |
| cpuSampleCount                 | 276      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2282 ms                                  |
| referencePeakRssMb     | 315.8 MB                                 |
| referenceCpuMsEstimate | 4588 ms                                  |
| maxWallMs              | 3415 ms                                  |
| maxPeakRssMb           | 334.6 MB                                 |
| maxCpuMsEstimate       | 6035 ms                                  |
| statSampleCount        | 313                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 107.4 ms        | 0.3 ms            | 104 ms            | 0 MB             | 177 ms           | 2386 ms  | 313.8 MB     | 4765 ms          | 94/94           | 0    |
| 1   | captured | 2        | 105.6 ms        | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 2277 ms  | 307.6 MB     | 4547 ms          | 90/90           | 0    |
| 2   | captured | 2        | 106.9 ms        | 0.3 ms            | 39 ms             | 0 MB             | 113 ms           | 2321 ms  | 314.6 MB     | 4701 ms          | 92/92           | 0    |
