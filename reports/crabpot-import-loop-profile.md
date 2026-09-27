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
| p50WallMs                      | 4338     |
| p95WallMs                      | 4340     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 2.4 MB   |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 109.4 ms |
| p95OpenClawImportMs            | 110.3 ms |
| p50OpenClawActivationMs        | 1.3 ms   |
| p95OpenClawActivationMs        | 1.3 ms   |
| maxPeakRssMb                   | 531.1 MB |
| maxCpuMsEstimate               | 6079 ms  |
| baselineReferenceWallMs        | 4392 ms  |
| baselineReferencePeakRssMb     | 528.7 MB |
| baselineReferenceCpuMsEstimate | 6163 ms  |
| statSampleCount                | 515      |
| rssSampleCount                 | 515      |
| cpuSampleCount                 | 515      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 4392 ms                                  |
| referencePeakRssMb     | 528.7 MB                                 |
| referenceCpuMsEstimate | 6163 ms                                  |
| maxWallMs              | 9826 ms                                  |
| maxPeakRssMb           | 713.6 MB                                 |
| maxCpuMsEstimate       | 9245 ms                                  |
| statSampleCount        | 738                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 109.4 ms        | 1.2 ms            | 0 ms              | 0 MB             | 0 ms             | 4340 ms  | 527.8 MB     | 6079 ms          | 172/172         | 0    |
| 1   | captured | 2        | 107.9 ms        | 1.3 ms            | 0 ms              | 0 MB             | 0 ms             | 4338 ms  | 528.5 MB     | 6019 ms          | 172/172         | 0    |
| 2   | captured | 2        | 110.3 ms        | 1.3 ms            | 0 ms              | 2.4 MB           | 0 ms             | 4312 ms  | 531.1 MB     | 6067 ms          | 171/171         | 0    |
