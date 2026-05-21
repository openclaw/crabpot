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
| p50WallMs                      | 1616     |
| p95WallMs                      | 1617     |
| p50PluginWallDeltaMs           | 52       |
| p95PluginWallDeltaMs           | 53       |
| maxPluginPeakRssDeltaMb        | 1.8 MB   |
| maxPluginCpuDeltaMsEstimate    | 110 ms   |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 83.3 ms  |
| p95OpenClawImportMs            | 101.8 ms |
| p50OpenClawActivationMs        | 0.4 ms   |
| p95OpenClawActivationMs        | 0.6 ms   |
| maxPeakRssMb                   | 258.7 MB |
| maxCpuMsEstimate               | 2941 ms  |
| baselineReferenceWallMs        | 1564 ms  |
| baselineReferencePeakRssMb     | 256.9 MB |
| baselineReferenceCpuMsEstimate | 2831 ms  |
| statSampleCount                | 190      |
| rssSampleCount                 | 190      |
| cpuSampleCount                 | 190      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 1564 ms                                  |
| referencePeakRssMb     | 256.9 MB                                 |
| referenceCpuMsEstimate | 2831 ms                                  |
| maxWallMs              | 2136 ms                                  |
| maxPeakRssMb           | 262.8 MB                                 |
| maxCpuMsEstimate       | 3799 ms                                  |
| statSampleCount        | 207                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 83.1 ms         | 0.4 ms            | 26 ms             | 0 MB             | 67 ms            | 1590 ms  | 251.9 MB     | 2898 ms          | 63/63           | 0    |
| 1   | captured | 2        | 101.8 ms        | 0.4 ms            | 53 ms             | 1.8 MB           | 83 ms            | 1617 ms  | 258.7 MB     | 2914 ms          | 63/63           | 0    |
| 2   | captured | 2        | 83.3 ms         | 0.6 ms            | 52 ms             | 0 MB             | 110 ms           | 1616 ms  | 255.8 MB     | 2941 ms          | 64/64           | 0    |
