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
| p50WallMs                      | 4409     |
| p95WallMs                      | 4412     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 1 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 117.7 ms |
| p95OpenClawImportMs            | 119 ms   |
| p50OpenClawActivationMs        | 1.2 ms   |
| p95OpenClawActivationMs        | 1.6 ms   |
| maxPeakRssMb                   | 527.6 MB |
| maxCpuMsEstimate               | 6238 ms  |
| baselineReferenceWallMs        | 4434 ms  |
| baselineReferencePeakRssMb     | 530.8 MB |
| baselineReferenceCpuMsEstimate | 6237 ms  |
| statSampleCount                | 525      |
| rssSampleCount                 | 525      |
| cpuSampleCount                 | 525      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 4434 ms                                  |
| referencePeakRssMb     | 530.8 MB                                 |
| referenceCpuMsEstimate | 6237 ms                                  |
| maxWallMs              | 10339 ms                                 |
| maxPeakRssMb           | 690.4 MB                                 |
| maxCpuMsEstimate       | 9667 ms                                  |
| statSampleCount        | 759                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 119 ms          | 1.2 ms            | 0 ms              | 0 MB             | 0 ms             | 4409 ms  | 505.2 MB     | 6147 ms          | 175/175         | 0    |
| 1   | captured | 2        | 106.6 ms        | 1.6 ms            | 0 ms              | 0 MB             | 1 ms             | 4406 ms  | 505.1 MB     | 6238 ms          | 175/175         | 0    |
| 2   | captured | 2        | 117.7 ms        | 1.2 ms            | 0 ms              | 0 MB             | 0 ms             | 4412 ms  | 527.6 MB     | 6193 ms          | 175/175         | 0    |
