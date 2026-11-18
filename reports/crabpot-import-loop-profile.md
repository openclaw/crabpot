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
| p50WallMs                      | 6557     |
| p95WallMs                      | 6631     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 50       |
| maxPluginPeakRssDeltaMb        | 18.8 MB  |
| maxPluginCpuDeltaMsEstimate    | 19 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 89 ms    |
| p95OpenClawImportMs            | 94 ms    |
| p50OpenClawActivationMs        | 1.3 ms   |
| p95OpenClawActivationMs        | 1.3 ms   |
| maxPeakRssMb                   | 829.5 MB |
| maxCpuMsEstimate               | 9335 ms  |
| baselineReferenceWallMs        | 6581 ms  |
| baselineReferencePeakRssMb     | 810.7 MB |
| baselineReferenceCpuMsEstimate | 9316 ms  |
| statSampleCount                | 778      |
| rssSampleCount                 | 778      |
| cpuSampleCount                 | 778      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 6581 ms                                  |
| referencePeakRssMb     | 810.7 MB                                 |
| referenceCpuMsEstimate | 9316 ms                                  |
| maxWallMs              | 14320 ms                                 |
| maxPeakRssMb           | 1008.8 MB                                |
| maxCpuMsEstimate       | 12759 ms                                 |
| statSampleCount        | 1087                                     |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 94 ms           | 1.2 ms            | 50 ms             | 18.8 MB          | 19 ms            | 6631 ms  | 829.5 MB     | 9335 ms          | 262/262         | 0    |
| 1   | captured | 2        | 89 ms           | 1.3 ms            | 0 ms              | 0 MB             | 0 ms             | 6509 ms  | 808.3 MB     | 9123 ms          | 257/257         | 0    |
| 2   | captured | 2        | 86.9 ms         | 1.3 ms            | 0 ms              | 0 MB             | 0 ms             | 6557 ms  | 804.1 MB     | 9264 ms          | 259/259         | 0    |

## Capture cleanup

removed: `crabpot-lifecycle-capture-vR4Uwl` in the system temp directory.
