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
| p50WallMs                      | 4302     |
| p95WallMs                      | 4317     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 109.7 ms |
| p95OpenClawImportMs            | 111.2 ms |
| p50OpenClawActivationMs        | 1.2 ms   |
| p95OpenClawActivationMs        | 1.2 ms   |
| maxPeakRssMb                   | 530.1 MB |
| maxCpuMsEstimate               | 6052 ms  |
| baselineReferenceWallMs        | 4324 ms  |
| baselineReferencePeakRssMb     | 531 MB   |
| baselineReferenceCpuMsEstimate | 6080 ms  |
| statSampleCount                | 509      |
| rssSampleCount                 | 509      |
| cpuSampleCount                 | 509      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 4324 ms                                  |
| referencePeakRssMb     | 531 MB                                   |
| referenceCpuMsEstimate | 6080 ms                                  |
| maxWallMs              | 9701 ms                                  |
| maxPeakRssMb           | 722.7 MB                                 |
| maxCpuMsEstimate       | 9039 ms                                  |
| statSampleCount        | 728                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 111.2 ms        | 1.2 ms            | 0 ms              | 0 MB             | 0 ms             | 4317 ms  | 525.8 MB     | 6037 ms          | 171/171         | 0    |
| 1   | captured | 2        | 109.7 ms        | 1.2 ms            | 0 ms              | 0 MB             | 0 ms             | 4244 ms  | 507.1 MB     | 5828 ms          | 168/168         | 0    |
| 2   | captured | 2        | 107.5 ms        | 1.2 ms            | 0 ms              | 0 MB             | 0 ms             | 4302 ms  | 530.1 MB     | 6052 ms          | 170/170         | 0    |
