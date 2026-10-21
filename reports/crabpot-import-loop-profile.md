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
| p50WallMs                      | 4331     |
| p95WallMs                      | 4372     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 6.9 MB   |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 114.5 ms |
| p95OpenClawImportMs            | 123.3 ms |
| p50OpenClawActivationMs        | 1.3 ms   |
| p95OpenClawActivationMs        | 1.4 ms   |
| maxPeakRssMb                   | 525.7 MB |
| maxCpuMsEstimate               | 6111 ms  |
| baselineReferenceWallMs        | 4395 ms  |
| baselineReferencePeakRssMb     | 518.8 MB |
| baselineReferenceCpuMsEstimate | 6214 ms  |
| statSampleCount                | 517      |
| rssSampleCount                 | 517      |
| cpuSampleCount                 | 517      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 4395 ms                                  |
| referencePeakRssMb     | 518.8 MB                                 |
| referenceCpuMsEstimate | 6214 ms                                  |
| maxWallMs              | 10108 ms                                 |
| maxPeakRssMb           | 733.4 MB                                 |
| maxCpuMsEstimate       | 9244 ms                                  |
| statSampleCount        | 743                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 123.3 ms        | 1.3 ms            | 0 ms              | 0.8 MB           | 0 ms             | 4372 ms  | 519.6 MB     | 6111 ms          | 174/174         | 0    |
| 1   | captured | 2        | 109.4 ms        | 1.3 ms            | 0 ms              | 4.3 MB           | 0 ms             | 4312 ms  | 523.1 MB     | 6045 ms          | 171/171         | 0    |
| 2   | captured | 2        | 114.5 ms        | 1.4 ms            | 0 ms              | 6.9 MB           | 0 ms             | 4331 ms  | 525.7 MB     | 6000 ms          | 172/172         | 0    |
