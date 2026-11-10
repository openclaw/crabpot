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
| p50WallMs                      | 6639     |
| p95WallMs                      | 6749     |
| p50PluginWallDeltaMs           | 67       |
| p95PluginWallDeltaMs           | 177      |
| maxPluginPeakRssDeltaMb        | 3.8 MB   |
| maxPluginCpuDeltaMsEstimate    | 148 ms   |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 86.5 ms  |
| p95OpenClawImportMs            | 91.2 ms  |
| p50OpenClawActivationMs        | 1.4 ms   |
| p95OpenClawActivationMs        | 1.4 ms   |
| maxPeakRssMb                   | 810.8 MB |
| maxCpuMsEstimate               | 9403 ms  |
| baselineReferenceWallMs        | 6572 ms  |
| baselineReferencePeakRssMb     | 807 MB   |
| baselineReferenceCpuMsEstimate | 9255 ms  |
| statSampleCount                | 790      |
| rssSampleCount                 | 790      |
| cpuSampleCount                 | 790      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 6572 ms                                  |
| referencePeakRssMb     | 807 MB                                   |
| referenceCpuMsEstimate | 9255 ms                                  |
| maxWallMs              | 13918 ms                                 |
| maxPeakRssMb           | 1033.9 MB                                |
| maxCpuMsEstimate       | 12325 ms                                 |
| statSampleCount        | 1073                                     |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 86.2 ms         | 1.4 ms            | 177 ms            | 3.8 MB           | 148 ms           | 6749 ms  | 810.8 MB     | 9403 ms          | 268/268         | 0    |
| 1   | captured | 2        | 86.5 ms         | 1.4 ms            | 0 ms              | 1.7 MB           | 0 ms             | 6556 ms  | 808.7 MB     | 9214 ms          | 259/259         | 0    |
| 2   | captured | 2        | 91.2 ms         | 1.3 ms            | 67 ms             | 1.4 MB           | 83 ms            | 6639 ms  | 808.4 MB     | 9338 ms          | 263/263         | 0    |

## Capture cleanup

removed: `crabpot-lifecycle-capture-ImLDBR` in the system temp directory.
