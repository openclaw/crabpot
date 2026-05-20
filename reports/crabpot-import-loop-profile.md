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
| p50WallMs                      | 1416     |
| p95WallMs                      | 1444     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 14       |
| maxPluginPeakRssDeltaMb        | 3.4 MB   |
| maxPluginCpuDeltaMsEstimate    | 36 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 80.6 ms  |
| p95OpenClawImportMs            | 100.3 ms |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.3 ms   |
| maxPeakRssMb                   | 261.5 MB |
| maxCpuMsEstimate               | 2648 ms  |
| baselineReferenceWallMs        | 1430 ms  |
| baselineReferencePeakRssMb     | 258.1 MB |
| baselineReferenceCpuMsEstimate | 2612 ms  |
| statSampleCount                | 166      |
| rssSampleCount                 | 166      |
| cpuSampleCount                 | 166      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 1430 ms                                  |
| referencePeakRssMb     | 258.1 MB                                 |
| referenceCpuMsEstimate | 2612 ms                                  |
| maxWallMs              | 1942 ms                                  |
| maxPeakRssMb           | 272.1 MB                                 |
| maxCpuMsEstimate       | 3481 ms                                  |
| statSampleCount        | 189                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 80.6 ms         | 0.3 ms            | 0 ms              | 3.4 MB           | 0 ms             | 1416 ms  | 261.5 MB     | 2568 ms          | 55/55           | 0    |
| 1   | captured | 2        | 100.3 ms        | 0.3 ms            | 14 ms             | 0 MB             | 36 ms            | 1444 ms  | 255.7 MB     | 2648 ms          | 56/56           | 0    |
| 2   | captured | 2        | 78.5 ms         | 0.3 ms            | 0 ms              | 1.8 MB           | 0 ms             | 1398 ms  | 259.9 MB     | 2525 ms          | 55/55           | 0    |
