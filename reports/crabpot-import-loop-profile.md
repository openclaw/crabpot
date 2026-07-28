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
| p50WallMs                      | 2206     |
| p95WallMs                      | 2237     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 5        |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 92 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 95.5 ms  |
| p95OpenClawImportMs            | 97.3 ms  |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.3 ms   |
| maxPeakRssMb                   | 345.6 MB |
| maxCpuMsEstimate               | 4484 ms  |
| baselineReferenceWallMs        | 2232 ms  |
| baselineReferencePeakRssMb     | 345.6 MB |
| baselineReferenceCpuMsEstimate | 4392 ms  |
| statSampleCount                | 263      |
| rssSampleCount                 | 263      |
| cpuSampleCount                 | 263      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2232 ms                                  |
| referencePeakRssMb     | 345.6 MB                                 |
| referenceCpuMsEstimate | 4392 ms                                  |
| maxWallMs              | 3097 ms                                  |
| maxPeakRssMb           | 367.8 MB                                 |
| maxCpuMsEstimate       | 5631 ms                                  |
| statSampleCount        | 295                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 92.9 ms         | 0.3 ms            | 0 ms              | 0 MB             | 7 ms             | 2206 ms  | 345.6 MB     | 4399 ms          | 87/87           | 0    |
| 1   | captured | 2        | 95.5 ms         | 0.2 ms            | 0 ms              | 0 MB             | 26 ms            | 2202 ms  | 341.9 MB     | 4418 ms          | 87/87           | 0    |
| 2   | captured | 2        | 97.3 ms         | 0.3 ms            | 5 ms              | 0 MB             | 92 ms            | 2237 ms  | 332.9 MB     | 4484 ms          | 89/89           | 0    |
