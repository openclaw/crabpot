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
| p50WallMs                      | 2065     |
| p95WallMs                      | 2103     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 10 MB    |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 100.3 ms |
| p95OpenClawImportMs            | 101.6 ms |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.3 ms   |
| maxPeakRssMb                   | 312.1 MB |
| maxCpuMsEstimate               | 4215 ms  |
| baselineReferenceWallMs        | 2121 ms  |
| baselineReferencePeakRssMb     | 302.1 MB |
| baselineReferenceCpuMsEstimate | 4230 ms  |
| statSampleCount                | 244      |
| rssSampleCount                 | 244      |
| cpuSampleCount                 | 244      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2121 ms                                  |
| referencePeakRssMb     | 302.1 MB                                 |
| referenceCpuMsEstimate | 4230 ms                                  |
| maxWallMs              | 2853 ms                                  |
| maxPeakRssMb           | 311.5 MB                                 |
| maxCpuMsEstimate       | 5154 ms                                  |
| statSampleCount        | 280                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 101.6 ms        | 0.3 ms            | 0 ms              | 7.6 MB           | 0 ms             | 2065 ms  | 309.7 MB     | 4184 ms          | 81/81           | 0    |
| 1   | captured | 2        | 99.7 ms         | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 2103 ms  | 284.9 MB     | 4215 ms          | 83/83           | 0    |
| 2   | captured | 2        | 100.3 ms        | 0.3 ms            | 0 ms              | 10 MB            | 0 ms             | 2026 ms  | 312.1 MB     | 4123 ms          | 80/80           | 0    |
