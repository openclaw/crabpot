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
| p50WallMs                      | 4307     |
| p95WallMs                      | 4340     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 0.8 MB   |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 113.9 ms |
| p95OpenClawImportMs            | 114.7 ms |
| p50OpenClawActivationMs        | 1.2 ms   |
| p95OpenClawActivationMs        | 1.2 ms   |
| maxPeakRssMb                   | 530.1 MB |
| maxCpuMsEstimate               | 6061 ms  |
| baselineReferenceWallMs        | 4378 ms  |
| baselineReferencePeakRssMb     | 529.3 MB |
| baselineReferenceCpuMsEstimate | 6122 ms  |
| statSampleCount                | 513      |
| rssSampleCount                 | 513      |
| cpuSampleCount                 | 513      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 4378 ms                                  |
| referencePeakRssMb     | 529.3 MB                                 |
| referenceCpuMsEstimate | 6122 ms                                  |
| maxWallMs              | 9958 ms                                  |
| maxPeakRssMb           | 732.8 MB                                 |
| maxCpuMsEstimate       | 9355 ms                                  |
| statSampleCount        | 740                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 114.7 ms        | 1.2 ms            | 0 ms              | 0.8 MB           | 0 ms             | 4340 ms  | 530.1 MB     | 6061 ms          | 172/172         | 0    |
| 1   | captured | 2        | 113.9 ms        | 1.2 ms            | 0 ms              | 0.7 MB           | 0 ms             | 4307 ms  | 530 MB       | 6005 ms          | 171/171         | 0    |
| 2   | captured | 2        | 111.9 ms        | 1.2 ms            | 0 ms              | 0 MB             | 0 ms             | 4295 ms  | 527.7 MB     | 5911 ms          | 170/170         | 0    |
