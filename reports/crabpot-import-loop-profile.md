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
| p50WallMs                      | 1475     |
| p95WallMs                      | 1512     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 9.2 MB   |
| maxPluginCpuDeltaMsEstimate    | 32 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 82.7 ms  |
| p95OpenClawImportMs            | 86.8 ms  |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.3 ms   |
| maxPeakRssMb                   | 267.9 MB |
| maxCpuMsEstimate               | 2788 ms  |
| baselineReferenceWallMs        | 1517 ms  |
| baselineReferencePeakRssMb     | 258.7 MB |
| baselineReferenceCpuMsEstimate | 2756 ms  |
| statSampleCount                | 174      |
| rssSampleCount                 | 174      |
| cpuSampleCount                 | 174      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 1517 ms                                  |
| referencePeakRssMb     | 258.7 MB                                 |
| referenceCpuMsEstimate | 2756 ms                                  |
| maxWallMs              | 2003 ms                                  |
| maxPeakRssMb           | 270.6 MB                                 |
| maxCpuMsEstimate       | 3538 ms                                  |
| statSampleCount        | 195                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 86.8 ms         | 0.3 ms            | 0 ms              | 5.4 MB           | 0 ms             | 1475 ms  | 264.1 MB     | 2706 ms          | 58/58           | 0    |
| 1   | captured | 2        | 80.3 ms         | 0.3 ms            | 0 ms              | 9.2 MB           | 0 ms             | 1451 ms  | 267.9 MB     | 2635 ms          | 57/57           | 0    |
| 2   | captured | 2        | 82.7 ms         | 0.3 ms            | 0 ms              | 0 MB             | 32 ms            | 1512 ms  | 257.6 MB     | 2788 ms          | 59/59           | 0    |
