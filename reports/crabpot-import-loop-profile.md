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
| p50WallMs                      | 3032     |
| p95WallMs                      | 3044     |
| p50PluginWallDeltaMs           | 25       |
| p95PluginWallDeltaMs           | 37       |
| maxPluginPeakRssDeltaMb        | 3.1 MB   |
| maxPluginCpuDeltaMsEstimate    | 44 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 60.1 ms  |
| p95OpenClawImportMs            | 65.7 ms  |
| p50OpenClawActivationMs        | 0.5 ms   |
| p95OpenClawActivationMs        | 0.5 ms   |
| maxPeakRssMb                   | 421.9 MB |
| maxCpuMsEstimate               | 4156 ms  |
| baselineReferenceWallMs        | 3007 ms  |
| baselineReferencePeakRssMb     | 418.8 MB |
| baselineReferenceCpuMsEstimate | 4112 ms  |
| statSampleCount                | 362      |
| rssSampleCount                 | 362      |
| cpuSampleCount                 | 362      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 3007 ms                                  |
| referencePeakRssMb     | 418.8 MB                                 |
| referenceCpuMsEstimate | 4112 ms                                  |
| maxWallMs              | 6843 ms                                  |
| maxPeakRssMb           | 594.9 MB                                 |
| maxCpuMsEstimate       | 6371 ms                                  |
| statSampleCount        | 511                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 65.7 ms         | 0.5 ms            | 25 ms             | 2.5 MB           | 9 ms             | 3032 ms  | 421.3 MB     | 4121 ms          | 121/121         | 0    |
| 1   | captured | 2        | 58.7 ms         | 0.5 ms            | 37 ms             | 1.7 MB           | 44 ms            | 3044 ms  | 420.5 MB     | 4156 ms          | 121/121         | 0    |
| 2   | captured | 2        | 60.1 ms         | 0.5 ms            | 0 ms              | 3.1 MB           | 0 ms             | 3006 ms  | 421.9 MB     | 4086 ms          | 120/120         | 0    |
