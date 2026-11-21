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
| p50WallMs                      | 6649     |
| p95WallMs                      | 6686     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 5.2 MB   |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 87.4 ms  |
| p95OpenClawImportMs            | 88.5 ms  |
| p50OpenClawActivationMs        | 1.3 ms   |
| p95OpenClawActivationMs        | 1.3 ms   |
| maxPeakRssMb                   | 812.3 MB |
| maxCpuMsEstimate               | 9360 ms  |
| baselineReferenceWallMs        | 6766 ms  |
| baselineReferencePeakRssMb     | 807.1 MB |
| baselineReferenceCpuMsEstimate | 9475 ms  |
| statSampleCount                | 792      |
| rssSampleCount                 | 792      |
| cpuSampleCount                 | 792      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 6766 ms                                  |
| referencePeakRssMb     | 807.1 MB                                 |
| referenceCpuMsEstimate | 9475 ms                                  |
| maxWallMs              | 14692 ms                                 |
| maxPeakRssMb           | 1019.7 MB                                |
| maxCpuMsEstimate       | 12997 ms                                 |
| statSampleCount        | 1116                                     |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 87.4 ms         | 1.3 ms            | 0 ms              | 0 MB             | 0 ms             | 6686 ms  | 803.1 MB     | 9360 ms          | 266/266         | 0    |
| 1   | captured | 2        | 88.5 ms         | 1.3 ms            | 0 ms              | 0 MB             | 0 ms             | 6649 ms  | 803.4 MB     | 9326 ms          | 264/264         | 0    |
| 2   | captured | 2        | 85.5 ms         | 1.3 ms            | 0 ms              | 5.2 MB           | 0 ms             | 6635 ms  | 812.3 MB     | 9305 ms          | 262/262         | 0    |

## Capture cleanup

removed: `crabpot-lifecycle-capture-E0BWuC` in the system temp directory.
