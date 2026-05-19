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
| p50WallMs                      | 1522     |
| p95WallMs                      | 1545     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 23       |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 13 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 85.4 ms  |
| p95OpenClawImportMs            | 93.7 ms  |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.5 ms   |
| maxPeakRssMb                   | 256.6 MB |
| maxCpuMsEstimate               | 2779 ms  |
| baselineReferenceWallMs        | 1522 ms  |
| baselineReferencePeakRssMb     | 264.4 MB |
| baselineReferenceCpuMsEstimate | 2766 ms  |
| statSampleCount                | 179      |
| rssSampleCount                 | 179      |
| cpuSampleCount                 | 179      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 1522 ms                                  |
| referencePeakRssMb     | 264.4 MB                                 |
| referenceCpuMsEstimate | 2766 ms                                  |
| maxWallMs              | 2026 ms                                  |
| maxPeakRssMb           | 273.8 MB                                 |
| maxCpuMsEstimate       | 3569 ms                                  |
| statSampleCount        | 199                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 81.4 ms         | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 1522 ms  | 256.2 MB     | 2764 ms          | 60/60           | 0    |
| 1   | captured | 2        | 93.7 ms         | 0.5 ms            | 0 ms              | 0 MB             | 0 ms             | 1484 ms  | 256.6 MB     | 2688 ms          | 59/59           | 0    |
| 2   | captured | 2        | 85.4 ms         | 0.3 ms            | 23 ms             | 0 MB             | 13 ms            | 1545 ms  | 249.8 MB     | 2779 ms          | 60/60           | 0    |
