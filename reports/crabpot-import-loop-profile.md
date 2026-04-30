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
| p50WallMs                      | 1886     |
| p95WallMs                      | 2624     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 313      |
| maxPluginPeakRssDeltaMb        | 23.7 MB  |
| maxPluginCpuDeltaMsEstimate    | 81 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 302.4 ms |
| p95OpenClawImportMs            | 302.4 ms |
| p50OpenClawActivationMs        | 0.1 ms   |
| p95OpenClawActivationMs        | 0.1 ms   |
| maxPeakRssMb                   | 362 MB   |
| maxCpuMsEstimate               | 1930 ms  |
| baselineReferenceWallMs        | 2311 ms  |
| baselineReferencePeakRssMb     | 338.3 MB |
| baselineReferenceCpuMsEstimate | 1849 ms  |
| statSampleCount                | 17       |
| rssSampleCount                 | 17       |
| cpuSampleCount                 | 17       |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2311 ms                                  |
| referencePeakRssMb     | 338.3 MB                                 |
| referenceCpuMsEstimate | 1849 ms                                  |
| maxWallMs              | 9721 ms                                  |
| maxPeakRssMb           | 354.9 MB                                 |
| maxCpuMsEstimate       | 2436 ms                                  |
| statSampleCount        | 42                                       |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 301.5 ms        | 0.1 ms            | 313 ms            | 16.9 MB          | 81 ms            | 2624 ms  | 355.2 MB     | 1930 ms          | 7/7             | 0    |
| 1   | captured | 2        | 302.4 ms        | 0.1 ms            | 0 ms              | 21.8 MB          | 0 ms             | 1886 ms  | 360.1 MB     | 1521 ms          | 5/5             | 0    |
| 2   | captured | 2        | 302.4 ms        | 0.1 ms            | 0 ms              | 23.7 MB          | 0 ms             | 1866 ms  | 362 MB       | 1501 ms          | 5/5             | 0    |
