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
| p50WallMs                      | 4450     |
| p95WallMs                      | 4471     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 13       |
| maxPluginPeakRssDeltaMb        | 1.4 MB   |
| maxPluginCpuDeltaMsEstimate    | 95 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 117.6 ms |
| p95OpenClawImportMs            | 120.8 ms |
| p50OpenClawActivationMs        | 1.4 ms   |
| p95OpenClawActivationMs        | 1.5 ms   |
| maxPeakRssMb                   | 529.2 MB |
| maxCpuMsEstimate               | 6238 ms  |
| baselineReferenceWallMs        | 4458 ms  |
| baselineReferencePeakRssMb     | 527.8 MB |
| baselineReferenceCpuMsEstimate | 6143 ms  |
| statSampleCount                | 530      |
| rssSampleCount                 | 530      |
| cpuSampleCount                 | 530      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 4458 ms                                  |
| referencePeakRssMb     | 527.8 MB                                 |
| referenceCpuMsEstimate | 6143 ms                                  |
| maxWallMs              | 10325 ms                                 |
| maxPeakRssMb           | 728.3 MB                                 |
| maxCpuMsEstimate       | 9575 ms                                  |
| statSampleCount        | 765                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 120.8 ms        | 1.3 ms            | 0 ms              | 0 MB             | 0 ms             | 4450 ms  | 526.4 MB     | 6140 ms          | 176/176         | 0    |
| 1   | captured | 2        | 112.3 ms        | 1.5 ms            | 0 ms              | 0 MB             | 95 ms            | 4446 ms  | 525.2 MB     | 6238 ms          | 176/176         | 0    |
| 2   | captured | 2        | 117.6 ms        | 1.4 ms            | 13 ms             | 1.4 MB           | 35 ms            | 4471 ms  | 529.2 MB     | 6178 ms          | 178/178         | 0    |
