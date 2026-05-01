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
| p50WallMs                      | 1569     |
| p95WallMs                      | 1618     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 18       |
| maxPluginPeakRssDeltaMb        | 2.1 MB   |
| maxPluginCpuDeltaMsEstimate    | 68 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 101.4 ms |
| p95OpenClawImportMs            | 102.4 ms |
| p50OpenClawActivationMs        | 0.2 ms   |
| p95OpenClawActivationMs        | 0.3 ms   |
| maxPeakRssMb                   | 281 MB   |
| maxCpuMsEstimate               | 2959 ms  |
| baselineReferenceWallMs        | 1600 ms  |
| baselineReferencePeakRssMb     | 278.9 MB |
| baselineReferenceCpuMsEstimate | 2891 ms  |
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
| referenceWallMs        | 1600 ms                                  |
| referencePeakRssMb     | 278.9 MB                                 |
| referenceCpuMsEstimate | 2891 ms                                  |
| maxWallMs              | 2125 ms                                  |
| maxPeakRssMb           | 294.2 MB                                 |
| maxCpuMsEstimate       | 3617 ms                                  |
| statSampleCount        | 208                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 102.4 ms        | 0.3 ms            | 18 ms             | 0 MB             | 68 ms            | 1618 ms  | 275.1 MB     | 2959 ms          | 64/64           | 0    |
| 1   | captured | 2        | 97.2 ms         | 0.2 ms            | 0 ms              | 0 MB             | 0 ms             | 1569 ms  | 278 MB       | 2838 ms          | 62/62           | 0    |
| 2   | captured | 2        | 101.4 ms        | 0.2 ms            | 0 ms              | 2.1 MB           | 0 ms             | 1564 ms  | 281 MB       | 2834 ms          | 62/62           | 0    |
