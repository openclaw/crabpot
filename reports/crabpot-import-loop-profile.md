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
| p50WallMs                      | 2245     |
| p95WallMs                      | 2296     |
| p50PluginWallDeltaMs           | 10       |
| p95PluginWallDeltaMs           | 61       |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 179 ms   |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 112.5 ms |
| p95OpenClawImportMs            | 113.9 ms |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 295.9 MB |
| maxCpuMsEstimate               | 4558 ms  |
| baselineReferenceWallMs        | 2235 ms  |
| baselineReferencePeakRssMb     | 298.8 MB |
| baselineReferenceCpuMsEstimate | 4379 ms  |
| statSampleCount                | 265      |
| rssSampleCount                 | 265      |
| cpuSampleCount                 | 265      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2235 ms                                  |
| referencePeakRssMb     | 298.8 MB                                 |
| referenceCpuMsEstimate | 4379 ms                                  |
| maxWallMs              | 3092 ms                                  |
| maxPeakRssMb           | 306.4 MB                                 |
| maxCpuMsEstimate       | 5512 ms                                  |
| statSampleCount        | 295                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 111.3 ms        | 0.3 ms            | 10 ms             | 0 MB             | 109 ms           | 2245 ms  | 294.1 MB     | 4488 ms          | 88/88           | 0    |
| 1   | captured | 2        | 112.5 ms        | 0.3 ms            | 61 ms             | 0 MB             | 179 ms           | 2296 ms  | 295.9 MB     | 4558 ms          | 90/90           | 0    |
| 2   | captured | 2        | 113.9 ms        | 0.4 ms            | 0 ms              | 0 MB             | 16 ms            | 2198 ms  | 290.4 MB     | 4395 ms          | 87/87           | 0    |
