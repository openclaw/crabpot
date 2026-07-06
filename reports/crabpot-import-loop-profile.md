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
| p50WallMs                      | 2246     |
| p95WallMs                      | 2295     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 13 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 118.2 ms |
| p95OpenClawImportMs            | 118.3 ms |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.3 ms   |
| maxPeakRssMb                   | 298.9 MB |
| maxCpuMsEstimate               | 4612 ms  |
| baselineReferenceWallMs        | 2318 ms  |
| baselineReferencePeakRssMb     | 300.4 MB |
| baselineReferenceCpuMsEstimate | 4599 ms  |
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
| referenceWallMs        | 2318 ms                                  |
| referencePeakRssMb     | 300.4 MB                                 |
| referenceCpuMsEstimate | 4599 ms                                  |
| maxWallMs              | 3158 ms                                  |
| maxPeakRssMb           | 320.9 MB                                 |
| maxCpuMsEstimate       | 5668 ms                                  |
| statSampleCount        | 302                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 118.2 ms        | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 2246 ms  | 289.7 MB     | 4513 ms          | 88/88           | 0    |
| 1   | captured | 2        | 114 ms          | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 2220 ms  | 298.9 MB     | 4408 ms          | 87/87           | 0    |
| 2   | captured | 2        | 118.3 ms        | 0.3 ms            | 0 ms              | 0 MB             | 13 ms            | 2295 ms  | 294.7 MB     | 4612 ms          | 91/91           | 0    |
