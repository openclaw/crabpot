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
| p50WallMs                      | 4316     |
| p95WallMs                      | 4318     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 111.1 ms |
| p95OpenClawImportMs            | 114.5 ms |
| p50OpenClawActivationMs        | 1.3 ms   |
| p95OpenClawActivationMs        | 1.3 ms   |
| maxPeakRssMb                   | 527.5 MB |
| maxCpuMsEstimate               | 6010 ms  |
| baselineReferenceWallMs        | 4370 ms  |
| baselineReferencePeakRssMb     | 528.5 MB |
| baselineReferenceCpuMsEstimate | 6050 ms  |
| statSampleCount                | 514      |
| rssSampleCount                 | 514      |
| cpuSampleCount                 | 514      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 4370 ms                                  |
| referencePeakRssMb     | 528.5 MB                                 |
| referenceCpuMsEstimate | 6050 ms                                  |
| maxWallMs              | 9715 ms                                  |
| maxPeakRssMb           | 723.2 MB                                 |
| maxCpuMsEstimate       | 9047 ms                                  |
| statSampleCount        | 733                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 107.3 ms        | 1.2 ms            | 0 ms              | 0 MB             | 0 ms             | 4316 ms  | 526.2 MB     | 5945 ms          | 172/172         | 0    |
| 1   | captured | 2        | 114.5 ms        | 1.3 ms            | 0 ms              | 0 MB             | 0 ms             | 4318 ms  | 527.5 MB     | 6010 ms          | 171/171         | 0    |
| 2   | captured | 2        | 111.1 ms        | 1.3 ms            | 0 ms              | 0 MB             | 0 ms             | 4286 ms  | 526.8 MB     | 5972 ms          | 171/171         | 0    |
