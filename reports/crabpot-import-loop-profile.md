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
| p50WallMs                      | 2221     |
| p95WallMs                      | 2284     |
| p50PluginWallDeltaMs           | 24       |
| p95PluginWallDeltaMs           | 87       |
| maxPluginPeakRssDeltaMb        | 18.2 MB  |
| maxPluginCpuDeltaMsEstimate    | 168 ms   |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 112 ms   |
| p95OpenClawImportMs            | 113.4 ms |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 305.9 MB |
| maxCpuMsEstimate               | 4549 ms  |
| baselineReferenceWallMs        | 2197 ms  |
| baselineReferencePeakRssMb     | 287.7 MB |
| baselineReferenceCpuMsEstimate | 4381 ms  |
| statSampleCount                | 264      |
| rssSampleCount                 | 264      |
| cpuSampleCount                 | 264      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2197 ms                                  |
| referencePeakRssMb     | 287.7 MB                                 |
| referenceCpuMsEstimate | 4381 ms                                  |
| maxWallMs              | 3056 ms                                  |
| maxPeakRssMb           | 316 MB                                   |
| maxCpuMsEstimate       | 5550 ms                                  |
| statSampleCount        | 290                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 113.4 ms        | 0.4 ms            | 87 ms             | 0 MB             | 168 ms           | 2284 ms  | 285.3 MB     | 4549 ms          | 90/90           | 0    |
| 1   | captured | 2        | 112 ms          | 0.3 ms            | 24 ms             | 18.2 MB          | 0 ms             | 2221 ms  | 305.9 MB     | 4376 ms          | 87/87           | 0    |
| 2   | captured | 2        | 110.4 ms        | 0.3 ms            | 5 ms              | 8.1 MB           | 48 ms            | 2202 ms  | 295.8 MB     | 4429 ms          | 87/87           | 0    |
