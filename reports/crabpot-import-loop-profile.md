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
| p50WallMs                      | 1944     |
| p95WallMs                      | 1946     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 1        |
| maxPluginPeakRssDeltaMb        | 4.9 MB   |
| maxPluginCpuDeltaMsEstimate    | 33 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 119.8 ms |
| p95OpenClawImportMs            | 125 ms   |
| p50OpenClawActivationMs        | 0.4 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 288.2 MB |
| maxCpuMsEstimate               | 3777 ms  |
| baselineReferenceWallMs        | 1945 ms  |
| baselineReferencePeakRssMb     | 283.3 MB |
| baselineReferenceCpuMsEstimate | 3744 ms  |
| statSampleCount                | 229      |
| rssSampleCount                 | 229      |
| cpuSampleCount                 | 229      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 1945 ms                                  |
| referencePeakRssMb     | 283.3 MB                                 |
| referenceCpuMsEstimate | 3744 ms                                  |
| maxWallMs              | 2591 ms                                  |
| maxPeakRssMb           | 293.1 MB                                 |
| maxCpuMsEstimate       | 4615 ms                                  |
| statSampleCount        | 250                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 119.8 ms        | 0.4 ms            | 1 ms              | 0 MB             | 33 ms            | 1946 ms  | 283 MB       | 3777 ms          | 76/76           | 0    |
| 1   | captured | 2        | 125 ms          | 0.4 ms            | 0 ms              | 2.9 MB           | 0 ms             | 1944 ms  | 286.2 MB     | 3722 ms          | 77/77           | 0    |
| 2   | captured | 2        | 115.5 ms        | 0.4 ms            | 0 ms              | 4.9 MB           | 0 ms             | 1929 ms  | 288.2 MB     | 3708 ms          | 76/76           | 0    |
