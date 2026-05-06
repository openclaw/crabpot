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
| p50WallMs                      | 2378     |
| p95WallMs                      | 2434     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 50       |
| maxPluginPeakRssDeltaMb        | 24.2 MB  |
| maxPluginCpuDeltaMsEstimate    | 96 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 75.5 ms  |
| p95OpenClawImportMs            | 76 ms    |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.3 ms   |
| maxPeakRssMb                   | 348.9 MB |
| maxCpuMsEstimate               | 4674 ms  |
| baselineReferenceWallMs        | 2384 ms  |
| baselineReferencePeakRssMb     | 324.7 MB |
| baselineReferenceCpuMsEstimate | 4578 ms  |
| statSampleCount                | 279      |
| rssSampleCount                 | 279      |
| cpuSampleCount                 | 279      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2384 ms                                  |
| referencePeakRssMb     | 324.7 MB                                 |
| referenceCpuMsEstimate | 4578 ms                                  |
| maxWallMs              | 2856 ms                                  |
| maxPeakRssMb           | 340.1 MB                                 |
| maxCpuMsEstimate       | 5108 ms                                  |
| statSampleCount        | 296                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 76 ms           | 0.3 ms            | 50 ms             | 24.2 MB          | 63 ms            | 2434 ms  | 348.9 MB     | 4641 ms          | 95/95           | 0    |
| 1   | captured | 2        | 74.7 ms         | 0.3 ms            | 0 ms              | 7.5 MB           | 0 ms             | 2291 ms  | 332.2 MB     | 4437 ms          | 90/90           | 0    |
| 2   | captured | 2        | 75.5 ms         | 0.3 ms            | 0 ms              | 1.6 MB           | 96 ms            | 2378 ms  | 326.3 MB     | 4674 ms          | 94/94           | 0    |
