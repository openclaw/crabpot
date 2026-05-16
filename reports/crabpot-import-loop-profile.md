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
| p50WallMs                      | 2230     |
| p95WallMs                      | 3571     |
| p50PluginWallDeltaMs           | 280      |
| p95PluginWallDeltaMs           | 1621     |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 347.7 ms |
| p95OpenClawImportMs            | 573.9 ms |
| p50OpenClawActivationMs        | 0.2 ms   |
| p95OpenClawActivationMs        | 0.3 ms   |
| maxPeakRssMb                   | 231.5 MB |
| maxCpuMsEstimate               | 2043 ms  |
| baselineReferenceWallMs        | 1950 ms  |
| baselineReferencePeakRssMb     | 244.3 MB |
| baselineReferenceCpuMsEstimate | 2090 ms  |
| statSampleCount                | 19       |
| rssSampleCount                 | 19       |
| cpuSampleCount                 | 19       |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 1950 ms                                  |
| referencePeakRssMb     | 244.3 MB                                 |
| referenceCpuMsEstimate | 2090 ms                                  |
| maxWallMs              | 3186 ms                                  |
| maxPeakRssMb           | 252.8 MB                                 |
| maxCpuMsEstimate       | 2617 ms                                  |
| statSampleCount        | 19                                       |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 347.7 ms        | 0.3 ms            | 280 ms            | 0 MB             | 0 ms             | 2230 ms  | 225.5 MB     | 2043 ms          | 6/6             | 0    |
| 1   | captured | 2        | 345.4 ms        | 0.2 ms            | 13 ms             | 0 MB             | 0 ms             | 1963 ms  | 231.5 MB     | 1708 ms          | 5/5             | 0    |
| 2   | captured | 2        | 573.9 ms        | 0.2 ms            | 1621 ms           | 0 MB             | 0 ms             | 3571 ms  | 217.9 MB     | 1962 ms          | 8/8             | 0    |
