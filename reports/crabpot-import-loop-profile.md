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
| p95WallMs                      | 2069     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 29       |
| maxPluginPeakRssDeltaMb        | 8.9 MB   |
| maxPluginCpuDeltaMsEstimate    | 147 ms   |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 108 ms   |
| p95OpenClawImportMs            | 108.1 ms |
| p50OpenClawActivationMs        | 0.4 ms   |
| p95OpenClawActivationMs        | 0.5 ms   |
| maxPeakRssMb                   | 297.1 MB |
| maxCpuMsEstimate               | 4030 ms  |
| baselineReferenceWallMs        | 2040 ms  |
| baselineReferencePeakRssMb     | 288.2 MB |
| baselineReferenceCpuMsEstimate | 3883 ms  |
| statSampleCount                | 241      |
| rssSampleCount                 | 241      |
| cpuSampleCount                 | 241      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2040 ms                                  |
| referencePeakRssMb     | 288.2 MB                                 |
| referenceCpuMsEstimate | 3883 ms                                  |
| maxWallMs              | 2556 ms                                  |
| maxPeakRssMb           | 289.1 MB                                 |
| maxCpuMsEstimate       | 4685 ms                                  |
| statSampleCount        | 260                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 108 ms          | 0.5 ms            | 0 ms              | 0 MB             | 47 ms            | 2039 ms  | 283.5 MB     | 3930 ms          | 81/81           | 0    |
| 1   | captured | 2        | 108.1 ms        | 0.4 ms            | 0 ms              | 1.7 MB           | 22 ms            | 2018 ms  | 289.9 MB     | 3905 ms          | 79/79           | 0    |
| 2   | captured | 2        | 101.7 ms        | 0.4 ms            | 29 ms             | 8.9 MB           | 147 ms           | 2069 ms  | 297.1 MB     | 4030 ms          | 81/81           | 0    |
