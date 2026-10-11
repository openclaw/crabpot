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
| p50WallMs                      | 4322     |
| p95WallMs                      | 4336     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 110.6 ms |
| p95OpenClawImportMs            | 113.1 ms |
| p50OpenClawActivationMs        | 1.3 ms   |
| p95OpenClawActivationMs        | 1.3 ms   |
| maxPeakRssMb                   | 529.3 MB |
| maxCpuMsEstimate               | 5995 ms  |
| baselineReferenceWallMs        | 4387 ms  |
| baselineReferencePeakRssMb     | 530 MB   |
| baselineReferenceCpuMsEstimate | 6065 ms  |
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
| referenceWallMs        | 4387 ms                                  |
| referencePeakRssMb     | 530 MB                                   |
| referenceCpuMsEstimate | 6065 ms                                  |
| maxWallMs              | 9646 ms                                  |
| maxPeakRssMb           | 736.1 MB                                 |
| maxCpuMsEstimate       | 8980 ms                                  |
| statSampleCount        | 728                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 108.1 ms        | 1.3 ms            | 0 ms              | 0 MB             | 0 ms             | 4284 ms  | 504 MB       | 5995 ms          | 171/171         | 0    |
| 1   | captured | 2        | 110.6 ms        | 1.3 ms            | 0 ms              | 0 MB             | 0 ms             | 4336 ms  | 529.3 MB     | 5933 ms          | 172/172         | 0    |
| 2   | captured | 2        | 113.1 ms        | 1.3 ms            | 0 ms              | 0 MB             | 0 ms             | 4322 ms  | 527.7 MB     | 5985 ms          | 172/172         | 0    |
