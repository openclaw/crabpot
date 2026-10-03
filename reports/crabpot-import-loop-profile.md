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
| p50WallMs                      | 4254     |
| p95WallMs                      | 4284     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 1.4 MB   |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 110.7 ms |
| p95OpenClawImportMs            | 112.5 ms |
| p50OpenClawActivationMs        | 1.2 ms   |
| p95OpenClawActivationMs        | 1.5 ms   |
| maxPeakRssMb                   | 532.2 MB |
| maxCpuMsEstimate               | 5969 ms  |
| baselineReferenceWallMs        | 4356 ms  |
| baselineReferencePeakRssMb     | 530.8 MB |
| baselineReferenceCpuMsEstimate | 6040 ms  |
| statSampleCount                | 508      |
| rssSampleCount                 | 508      |
| cpuSampleCount                 | 508      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 4356 ms                                  |
| referencePeakRssMb     | 530.8 MB                                 |
| referenceCpuMsEstimate | 6040 ms                                  |
| maxWallMs              | 9647 ms                                  |
| maxPeakRssMb           | 681.2 MB                                 |
| maxCpuMsEstimate       | 9056 ms                                  |
| statSampleCount        | 728                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 112.5 ms        | 1.2 ms            | 0 ms              | 1.4 MB           | 0 ms             | 4254 ms  | 532.2 MB     | 5843 ms          | 169/169         | 0    |
| 1   | captured | 2        | 109.4 ms        | 1.1 ms            | 0 ms              | 0 MB             | 0 ms             | 4238 ms  | 526.8 MB     | 5954 ms          | 168/168         | 0    |
| 2   | captured | 2        | 110.7 ms        | 1.5 ms            | 0 ms              | 0 MB             | 0 ms             | 4284 ms  | 530.5 MB     | 5969 ms          | 171/171         | 0    |
