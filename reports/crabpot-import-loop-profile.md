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
| p50WallMs                      | 2146     |
| p95WallMs                      | 2179     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 4.7 MB   |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 108.4 ms |
| p95OpenClawImportMs            | 109.6 ms |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.3 ms   |
| maxPeakRssMb                   | 292.8 MB |
| maxCpuMsEstimate               | 4270 ms  |
| baselineReferenceWallMs        | 2245 ms  |
| baselineReferencePeakRssMb     | 288.1 MB |
| baselineReferenceCpuMsEstimate | 4455 ms  |
| statSampleCount                | 254      |
| rssSampleCount                 | 254      |
| cpuSampleCount                 | 254      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2245 ms                                  |
| referencePeakRssMb     | 288.1 MB                                 |
| referenceCpuMsEstimate | 4455 ms                                  |
| maxWallMs              | 2993 ms                                  |
| maxPeakRssMb           | 322.9 MB                                 |
| maxCpuMsEstimate       | 5416 ms                                  |
| statSampleCount        | 291                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 109.6 ms        | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 2179 ms  | 283.7 MB     | 4270 ms          | 85/85           | 0    |
| 1   | captured | 2        | 107.1 ms        | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 2139 ms  | 280.1 MB     | 4259 ms          | 84/84           | 0    |
| 2   | captured | 2        | 108.4 ms        | 0.3 ms            | 0 ms              | 4.7 MB           | 0 ms             | 2146 ms  | 292.8 MB     | 4216 ms          | 85/85           | 0    |
