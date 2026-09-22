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
| p50WallMs                      | 2254     |
| p95WallMs                      | 2264     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 8        |
| maxPluginPeakRssDeltaMb        | 28.4 MB  |
| maxPluginCpuDeltaMsEstimate    | 31 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 44.7 ms  |
| p95OpenClawImportMs            | 46.6 ms  |
| p50OpenClawActivationMs        | 0.4 ms   |
| p95OpenClawActivationMs        | 0.5 ms   |
| maxPeakRssMb                   | 448.5 MB |
| maxCpuMsEstimate               | 3137 ms  |
| baselineReferenceWallMs        | 2256 ms  |
| baselineReferencePeakRssMb     | 420.1 MB |
| baselineReferenceCpuMsEstimate | 3106 ms  |
| statSampleCount                | 269      |
| rssSampleCount                 | 269      |
| cpuSampleCount                 | 269      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2256 ms                                  |
| referencePeakRssMb     | 420.1 MB                                 |
| referenceCpuMsEstimate | 3106 ms                                  |
| maxWallMs              | 4928 ms                                  |
| maxPeakRssMb           | 574.1 MB                                 |
| maxCpuMsEstimate       | 4758 ms                                  |
| statSampleCount        | 375                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 46.6 ms         | 0.5 ms            | 0 ms              | 1 MB             | 0 ms             | 2254 ms  | 421.1 MB     | 3083 ms          | 90/90           | 0    |
| 1   | captured | 2        | 44.7 ms         | 0.4 ms            | 0 ms              | 1.2 MB           | 0 ms             | 2250 ms  | 421.3 MB     | 3011 ms          | 89/89           | 0    |
| 2   | captured | 2        | 44.6 ms         | 0.3 ms            | 8 ms              | 28.4 MB          | 31 ms            | 2264 ms  | 448.5 MB     | 3137 ms          | 90/90           | 0    |
