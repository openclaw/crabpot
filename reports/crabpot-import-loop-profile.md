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
| p50WallMs                      | 1560     |
| p95WallMs                      | 1568     |
| p50PluginWallDeltaMs           | 28       |
| p95PluginWallDeltaMs           | 36       |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 45 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 80.1 ms  |
| p95OpenClawImportMs            | 85.4 ms  |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 257.3 MB |
| maxCpuMsEstimate               | 2865 ms  |
| baselineReferenceWallMs        | 1532 ms  |
| baselineReferencePeakRssMb     | 265.3 MB |
| baselineReferenceCpuMsEstimate | 2820 ms  |
| statSampleCount                | 183      |
| rssSampleCount                 | 183      |
| cpuSampleCount                 | 183      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 1532 ms                                  |
| referencePeakRssMb     | 265.3 MB                                 |
| referenceCpuMsEstimate | 2820 ms                                  |
| maxWallMs              | 2052 ms                                  |
| maxPeakRssMb           | 269.6 MB                                 |
| maxCpuMsEstimate       | 3657 ms                                  |
| statSampleCount        | 201                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 80.1 ms         | 0.4 ms            | 28 ms             | 0 MB             | 17 ms            | 1560 ms  | 257.3 MB     | 2837 ms          | 62/62           | 0    |
| 1   | captured | 2        | 85.4 ms         | 0.3 ms            | 36 ms             | 0 MB             | 45 ms            | 1568 ms  | 256.8 MB     | 2865 ms          | 61/61           | 0    |
| 2   | captured | 2        | 77 ms           | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 1514 ms  | 254.6 MB     | 2797 ms          | 60/60           | 0    |
