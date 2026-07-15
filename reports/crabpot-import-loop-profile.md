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
| p50WallMs                      | 2571     |
| p95WallMs                      | 2592     |
| p50PluginWallDeltaMs           | 22       |
| p95PluginWallDeltaMs           | 43       |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 79 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 124.6 ms |
| p95OpenClawImportMs            | 128.2 ms |
| p50OpenClawActivationMs        | 0.4 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 308.3 MB |
| maxCpuMsEstimate               | 5157 ms  |
| baselineReferenceWallMs        | 2549 ms  |
| baselineReferencePeakRssMb     | 313.7 MB |
| baselineReferenceCpuMsEstimate | 5078 ms  |
| statSampleCount                | 302      |
| rssSampleCount                 | 302      |
| cpuSampleCount                 | 302      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2549 ms                                  |
| referencePeakRssMb     | 313.7 MB                                 |
| referenceCpuMsEstimate | 5078 ms                                  |
| maxWallMs              | 3615 ms                                  |
| maxPeakRssMb           | 316.3 MB                                 |
| maxCpuMsEstimate       | 6446 ms                                  |
| statSampleCount        | 340                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 128.2 ms        | 0.4 ms            | 43 ms             | 0 MB             | 61 ms            | 2592 ms  | 307.7 MB     | 5139 ms          | 102/102         | 0    |
| 1   | captured | 2        | 124.6 ms        | 0.4 ms            | 22 ms             | 0 MB             | 79 ms            | 2571 ms  | 301.9 MB     | 5157 ms          | 101/101         | 0    |
| 2   | captured | 2        | 123.3 ms        | 0.4 ms            | 0 ms              | 0 MB             | 0 ms             | 2502 ms  | 308.3 MB     | 4950 ms          | 99/99           | 0    |
