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
| p50WallMs                      | 2303     |
| p95WallMs                      | 2396     |
| p50PluginWallDeltaMs           | 19       |
| p95PluginWallDeltaMs           | 112      |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 232 ms   |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 52.9 ms  |
| p95OpenClawImportMs            | 53 ms    |
| p50OpenClawActivationMs        | 0.4 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 423.1 MB |
| maxCpuMsEstimate               | 3373 ms  |
| baselineReferenceWallMs        | 2284 ms  |
| baselineReferencePeakRssMb     | 424.4 MB |
| baselineReferenceCpuMsEstimate | 3141 ms  |
| statSampleCount                | 277      |
| rssSampleCount                 | 277      |
| cpuSampleCount                 | 277      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2284 ms                                  |
| referencePeakRssMb     | 424.4 MB                                 |
| referenceCpuMsEstimate | 3141 ms                                  |
| maxWallMs              | 5756 ms                                  |
| maxPeakRssMb           | 573.7 MB                                 |
| maxCpuMsEstimate       | 5168 ms                                  |
| statSampleCount        | 411                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 52.9 ms         | 0.3 ms            | 19 ms             | 0 MB             | 14 ms            | 2303 ms  | 422.8 MB     | 3155 ms          | 91/91           | 0    |
| 1   | captured | 2        | 53 ms           | 0.4 ms            | 112 ms            | 0 MB             | 232 ms           | 2396 ms  | 423.1 MB     | 3373 ms          | 95/95           | 0    |
| 2   | captured | 2        | 47.9 ms         | 0.4 ms            | 0 ms              | 0 MB             | 36 ms            | 2278 ms  | 419.5 MB     | 3177 ms          | 91/91           | 0    |
