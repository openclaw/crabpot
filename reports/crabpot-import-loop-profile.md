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
| p50WallMs                      | 4431     |
| p95WallMs                      | 4456     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 2.9 MB   |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 114.8 ms |
| p95OpenClawImportMs            | 115.1 ms |
| p50OpenClawActivationMs        | 1.3 ms   |
| p95OpenClawActivationMs        | 1.5 ms   |
| maxPeakRssMb                   | 530.5 MB |
| maxCpuMsEstimate               | 6177 ms  |
| baselineReferenceWallMs        | 4516 ms  |
| baselineReferencePeakRssMb     | 527.6 MB |
| baselineReferenceCpuMsEstimate | 6265 ms  |
| statSampleCount                | 528      |
| rssSampleCount                 | 528      |
| cpuSampleCount                 | 528      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 4516 ms                                  |
| referencePeakRssMb     | 527.6 MB                                 |
| referenceCpuMsEstimate | 6265 ms                                  |
| maxWallMs              | 9895 ms                                  |
| maxPeakRssMb           | 748.8 MB                                 |
| maxCpuMsEstimate       | 9232 ms                                  |
| statSampleCount        | 746                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 114.6 ms        | 1.5 ms            | 0 ms              | 0.3 MB           | 0 ms             | 4404 ms  | 527.9 MB     | 6177 ms          | 175/175         | 0    |
| 1   | captured | 2        | 114.8 ms        | 1.3 ms            | 0 ms              | 2.6 MB           | 0 ms             | 4456 ms  | 530.2 MB     | 6161 ms          | 177/177         | 0    |
| 2   | captured | 2        | 115.1 ms        | 1.3 ms            | 0 ms              | 2.9 MB           | 0 ms             | 4431 ms  | 530.5 MB     | 6139 ms          | 176/176         | 0    |
