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
| p50WallMs                      | 4317     |
| p95WallMs                      | 4338     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 2.9 MB   |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 106.6 ms |
| p95OpenClawImportMs            | 115.6 ms |
| p50OpenClawActivationMs        | 1.2 ms   |
| p95OpenClawActivationMs        | 1.4 ms   |
| maxPeakRssMb                   | 529.7 MB |
| maxCpuMsEstimate               | 6014 ms  |
| baselineReferenceWallMs        | 4428 ms  |
| baselineReferencePeakRssMb     | 526.8 MB |
| baselineReferenceCpuMsEstimate | 6088 ms  |
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
| referenceWallMs        | 4428 ms                                  |
| referencePeakRssMb     | 526.8 MB                                 |
| referenceCpuMsEstimate | 6088 ms                                  |
| maxWallMs              | 9851 ms                                  |
| maxPeakRssMb           | 733.5 MB                                 |
| maxCpuMsEstimate       | 9210 ms                                  |
| statSampleCount        | 738                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 105.7 ms        | 1.2 ms            | 0 ms              | 2.9 MB           | 0 ms             | 4316 ms  | 529.7 MB     | 6014 ms          | 171/171         | 0    |
| 1   | captured | 2        | 106.6 ms        | 1.2 ms            | 0 ms              | 0 MB             | 0 ms             | 4338 ms  | 526.7 MB     | 5927 ms          | 172/172         | 0    |
| 2   | captured | 2        | 115.6 ms        | 1.4 ms            | 0 ms              | 0.6 MB           | 0 ms             | 4317 ms  | 527.4 MB     | 6005 ms          | 172/172         | 0    |
