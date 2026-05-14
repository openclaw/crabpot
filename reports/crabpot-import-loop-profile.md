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
| p50WallMs                      | 2342     |
| p95WallMs                      | 2430     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 80.4 ms  |
| p95OpenClawImportMs            | 88 ms    |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.3 ms   |
| maxPeakRssMb                   | 327.3 MB |
| maxCpuMsEstimate               | 4676 ms  |
| baselineReferenceWallMs        | 2514 ms  |
| baselineReferencePeakRssMb     | 345.5 MB |
| baselineReferenceCpuMsEstimate | 4722 ms  |
| statSampleCount                | 281      |
| rssSampleCount                 | 281      |
| cpuSampleCount                 | 281      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2514 ms                                  |
| referencePeakRssMb     | 345.5 MB                                 |
| referenceCpuMsEstimate | 4722 ms                                  |
| maxWallMs              | 3423 ms                                  |
| maxPeakRssMb           | 346.3 MB                                 |
| maxCpuMsEstimate       | 5761 ms                                  |
| statSampleCount        | 324                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 88 ms           | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 2430 ms  | 321.3 MB     | 4676 ms          | 96/96           | 0    |
| 1   | captured | 2        | 80.4 ms         | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 2326 ms  | 327.3 MB     | 4594 ms          | 92/92           | 0    |
| 2   | captured | 2        | 74.9 ms         | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 2342 ms  | 324.7 MB     | 4536 ms          | 93/93           | 0    |
