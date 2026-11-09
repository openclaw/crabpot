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
| p50WallMs                      | 5684     |
| p95WallMs                      | 5687     |
| p50PluginWallDeltaMs           | 14       |
| p95PluginWallDeltaMs           | 17       |
| maxPluginPeakRssDeltaMb        | 8.7 MB   |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 81.7 ms  |
| p95OpenClawImportMs            | 81.8 ms  |
| p50OpenClawActivationMs        | 1.2 ms   |
| p95OpenClawActivationMs        | 1.3 ms   |
| maxPeakRssMb                   | 814.9 MB |
| maxCpuMsEstimate               | 8170 ms  |
| baselineReferenceWallMs        | 5670 ms  |
| baselineReferencePeakRssMb     | 806.2 MB |
| baselineReferenceCpuMsEstimate | 8184 ms  |
| statSampleCount                | 676      |
| rssSampleCount                 | 676      |
| cpuSampleCount                 | 676      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 5670 ms                                  |
| referencePeakRssMb     | 806.2 MB                                 |
| referenceCpuMsEstimate | 8184 ms                                  |
| maxWallMs              | 12989 ms                                 |
| maxPeakRssMb           | 1029 MB                                  |
| maxCpuMsEstimate       | 11385 ms                                 |
| statSampleCount        | 965                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 81.6 ms         | 1.3 ms            | 0 ms              | 6.9 MB           | 0 ms             | 5661 ms  | 813.1 MB     | 8062 ms          | 225/225         | 0    |
| 1   | captured | 2        | 81.7 ms         | 1.2 ms            | 17 ms             | 0 MB             | 0 ms             | 5687 ms  | 802.6 MB     | 8083 ms          | 226/226         | 0    |
| 2   | captured | 2        | 81.8 ms         | 1.1 ms            | 14 ms             | 8.7 MB           | 0 ms             | 5684 ms  | 814.9 MB     | 8170 ms          | 225/225         | 0    |

## Capture cleanup

removed: `crabpot-lifecycle-capture-G17jfO` in the system temp directory.
