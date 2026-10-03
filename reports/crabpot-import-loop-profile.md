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
| p50WallMs                      | 4407     |
| p95WallMs                      | 4418     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 1.7 MB   |
| maxPluginCpuDeltaMsEstimate    | 45 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 115.8 ms |
| p95OpenClawImportMs            | 117.4 ms |
| p50OpenClawActivationMs        | 1.3 ms   |
| p95OpenClawActivationMs        | 1.4 ms   |
| maxPeakRssMb                   | 530.6 MB |
| maxCpuMsEstimate               | 6180 ms  |
| baselineReferenceWallMs        | 4424 ms  |
| baselineReferencePeakRssMb     | 528.9 MB |
| baselineReferenceCpuMsEstimate | 6135 ms  |
| statSampleCount                | 524      |
| rssSampleCount                 | 524      |
| cpuSampleCount                 | 524      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 4424 ms                                  |
| referencePeakRssMb     | 528.9 MB                                 |
| referenceCpuMsEstimate | 6135 ms                                  |
| maxWallMs              | 10051 ms                                 |
| maxPeakRssMb           | 709.8 MB                                 |
| maxCpuMsEstimate       | 9327 ms                                  |
| statSampleCount        | 749                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 112.5 ms        | 1.3 ms            | 0 ms              | 1.7 MB           | 0 ms             | 4407 ms  | 530.6 MB     | 6129 ms          | 174/174         | 0    |
| 1   | captured | 2        | 117.4 ms        | 1.4 ms            | 0 ms              | 0 MB             | 45 ms            | 4418 ms  | 528.8 MB     | 6180 ms          | 176/176         | 0    |
| 2   | captured | 2        | 115.8 ms        | 1.3 ms            | 0 ms              | 0 MB             | 28 ms            | 4377 ms  | 528.4 MB     | 6163 ms          | 174/174         | 0    |
