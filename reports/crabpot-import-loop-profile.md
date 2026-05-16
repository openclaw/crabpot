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
| p50WallMs                      | 1331     |
| p95WallMs                      | 1369     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 34       |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 22 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 81.8 ms  |
| p95OpenClawImportMs            | 92.5 ms  |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.5 ms   |
| maxPeakRssMb                   | 263 MB   |
| maxCpuMsEstimate               | 2454 ms  |
| baselineReferenceWallMs        | 1335 ms  |
| baselineReferencePeakRssMb     | 270.4 MB |
| baselineReferenceCpuMsEstimate | 2432 ms  |
| statSampleCount                | 159      |
| rssSampleCount                 | 159      |
| cpuSampleCount                 | 159      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 1335 ms                                  |
| referencePeakRssMb     | 270.4 MB                                 |
| referenceCpuMsEstimate | 2432 ms                                  |
| maxWallMs              | 2033 ms                                  |
| maxPeakRssMb           | 271.4 MB                                 |
| maxCpuMsEstimate       | 3423 ms                                  |
| statSampleCount        | 184                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 73.7 ms         | 0.3 ms            | 0 ms              | 0 MB             | 22 ms            | 1331 ms  | 263 MB       | 2454 ms          | 53/53           | 0    |
| 1   | captured | 2        | 81.8 ms         | 0.5 ms            | 34 ms             | 0 MB             | 12 ms            | 1369 ms  | 262.2 MB     | 2444 ms          | 54/54           | 0    |
| 2   | captured | 2        | 92.5 ms         | 0.3 ms            | 0 ms              | 0 MB             | 8 ms             | 1310 ms  | 262.1 MB     | 2440 ms          | 52/52           | 0    |
