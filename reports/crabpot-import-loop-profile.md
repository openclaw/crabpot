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
| p50WallMs                      | 1550     |
| p95WallMs                      | 1578     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 9        |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 46 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 113.4 ms |
| p95OpenClawImportMs            | 119.1 ms |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 262.1 MB |
| maxCpuMsEstimate               | 2896 ms  |
| baselineReferenceWallMs        | 1569 ms  |
| baselineReferencePeakRssMb     | 264.6 MB |
| baselineReferenceCpuMsEstimate | 2850 ms  |
| statSampleCount                | 184      |
| rssSampleCount                 | 184      |
| cpuSampleCount                 | 184      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 1569 ms                                  |
| referencePeakRssMb     | 264.6 MB                                 |
| referenceCpuMsEstimate | 2850 ms                                  |
| maxWallMs              | 2087 ms                                  |
| maxPeakRssMb           | 267.6 MB                                 |
| maxCpuMsEstimate       | 3632 ms                                  |
| statSampleCount        | 205                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 106 ms          | 0.3 ms            | 0 ms              | 0 MB             | 10 ms            | 1538 ms  | 262.1 MB     | 2860 ms          | 60/60           | 0    |
| 1   | captured | 2        | 119.1 ms        | 0.3 ms            | 0 ms              | 0 MB             | 37 ms            | 1550 ms  | 256.5 MB     | 2887 ms          | 62/62           | 0    |
| 2   | captured | 2        | 113.4 ms        | 0.4 ms            | 9 ms              | 0 MB             | 46 ms            | 1578 ms  | 253.3 MB     | 2896 ms          | 62/62           | 0    |
