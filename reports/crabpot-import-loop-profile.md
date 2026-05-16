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
| p50WallMs                      | 1460     |
| p95WallMs                      | 1463     |
| p50PluginWallDeltaMs           | 23       |
| p95PluginWallDeltaMs           | 26       |
| maxPluginPeakRssDeltaMb        | 0.3 MB   |
| maxPluginCpuDeltaMsEstimate    | 22 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 93.4 ms  |
| p95OpenClawImportMs            | 97.6 ms  |
| p50OpenClawActivationMs        | 0.4 ms   |
| p95OpenClawActivationMs        | 0.5 ms   |
| maxPeakRssMb                   | 268.2 MB |
| maxCpuMsEstimate               | 2672 ms  |
| baselineReferenceWallMs        | 1437 ms  |
| baselineReferencePeakRssMb     | 267.9 MB |
| baselineReferenceCpuMsEstimate | 2650 ms  |
| statSampleCount                | 173      |
| rssSampleCount                 | 173      |
| cpuSampleCount                 | 173      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 1437 ms                                  |
| referencePeakRssMb     | 267.9 MB                                 |
| referenceCpuMsEstimate | 2650 ms                                  |
| maxWallMs              | 1938 ms                                  |
| maxPeakRssMb           | 270.7 MB                                 |
| maxCpuMsEstimate       | 3471 ms                                  |
| statSampleCount        | 187                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 97.6 ms         | 0.5 ms            | 26 ms             | 0.3 MB           | 22 ms            | 1463 ms  | 268.2 MB     | 2672 ms          | 58/58           | 0    |
| 1   | captured | 2        | 93.4 ms         | 0.4 ms            | 14 ms             | 0 MB             | 0 ms             | 1451 ms  | 258.8 MB     | 2622 ms          | 57/57           | 0    |
| 2   | captured | 2        | 92.9 ms         | 0.3 ms            | 23 ms             | 0 MB             | 0 ms             | 1460 ms  | 255.8 MB     | 2620 ms          | 58/58           | 0    |
