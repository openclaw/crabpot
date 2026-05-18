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
| p50WallMs                      | 1542     |
| p95WallMs                      | 1594     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 37       |
| maxPluginPeakRssDeltaMb        | 4.7 MB   |
| maxPluginCpuDeltaMsEstimate    | 79 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 91.9 ms  |
| p95OpenClawImportMs            | 101.2 ms |
| p50OpenClawActivationMs        | 0.4 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 268.8 MB |
| maxCpuMsEstimate               | 2896 ms  |
| baselineReferenceWallMs        | 1557 ms  |
| baselineReferencePeakRssMb     | 264.1 MB |
| baselineReferenceCpuMsEstimate | 2817 ms  |
| statSampleCount                | 184      |
| rssSampleCount                 | 184      |
| cpuSampleCount                 | 184      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 1557 ms                                  |
| referencePeakRssMb     | 264.1 MB                                 |
| referenceCpuMsEstimate | 2817 ms                                  |
| maxWallMs              | 2065 ms                                  |
| maxPeakRssMb           | 277.1 MB                                 |
| maxCpuMsEstimate       | 3681 ms                                  |
| statSampleCount        | 202                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 101.2 ms        | 0.4 ms            | 0 ms              | 4.7 MB           | 0 ms             | 1531 ms  | 268.8 MB     | 2791 ms          | 60/60           | 0    |
| 1   | captured | 2        | 90.2 ms         | 0.4 ms            | 37 ms             | 0 MB             | 79 ms            | 1594 ms  | 258.2 MB     | 2896 ms          | 63/63           | 0    |
| 2   | captured | 2        | 91.9 ms         | 0.4 ms            | 0 ms              | 0 MB             | 16 ms            | 1542 ms  | 257.9 MB     | 2833 ms          | 61/61           | 0    |
