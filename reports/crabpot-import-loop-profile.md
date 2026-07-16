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
| p50WallMs                      | 2060     |
| p95WallMs                      | 2147     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 101.9 ms |
| p95OpenClawImportMs            | 105.7 ms |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.3 ms   |
| maxPeakRssMb                   | 285.5 MB |
| maxCpuMsEstimate               | 4339 ms  |
| baselineReferenceWallMs        | 2205 ms  |
| baselineReferencePeakRssMb     | 302.4 MB |
| baselineReferenceCpuMsEstimate | 4367 ms  |
| statSampleCount                | 248      |
| rssSampleCount                 | 248      |
| cpuSampleCount                 | 248      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2205 ms                                  |
| referencePeakRssMb     | 302.4 MB                                 |
| referenceCpuMsEstimate | 4367 ms                                  |
| maxWallMs              | 3076 ms                                  |
| maxPeakRssMb           | 315 MB                                   |
| maxCpuMsEstimate       | 5467 ms                                  |
| statSampleCount        | 291                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 105.7 ms        | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 2032 ms  | 285.5 MB     | 4119 ms          | 80/80           | 0    |
| 1   | captured | 2        | 100.1 ms        | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 2060 ms  | 285.2 MB     | 4135 ms          | 82/82           | 0    |
| 2   | captured | 2        | 101.9 ms        | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 2147 ms  | 281.3 MB     | 4339 ms          | 86/86           | 0    |
