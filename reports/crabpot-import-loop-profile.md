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
| p50WallMs                      | 2039     |
| p95WallMs                      | 2053     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 4        |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 61 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 112 ms   |
| p95OpenClawImportMs            | 118 ms   |
| p50OpenClawActivationMs        | 0.4 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 297.4 MB |
| maxCpuMsEstimate               | 4090 ms  |
| baselineReferenceWallMs        | 2049 ms  |
| baselineReferencePeakRssMb     | 297.8 MB |
| baselineReferenceCpuMsEstimate | 4029 ms  |
| statSampleCount                | 239      |
| rssSampleCount                 | 239      |
| cpuSampleCount                 | 239      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2049 ms                                  |
| referencePeakRssMb     | 297.8 MB                                 |
| referenceCpuMsEstimate | 4029 ms                                  |
| maxWallMs              | 2667 ms                                  |
| maxPeakRssMb           | 299.8 MB                                 |
| maxCpuMsEstimate       | 4776 ms                                  |
| statSampleCount        | 265                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 105.4 ms        | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 2037 ms  | 297.4 MB     | 4010 ms          | 80/80           | 0    |
| 1   | captured | 2        | 118 ms          | 0.4 ms            | 0 ms              | 0 MB             | 35 ms            | 2039 ms  | 295.3 MB     | 4064 ms          | 79/79           | 0    |
| 2   | captured | 2        | 112 ms          | 0.4 ms            | 4 ms              | 0 MB             | 61 ms            | 2053 ms  | 295.3 MB     | 4090 ms          | 80/80           | 0    |
