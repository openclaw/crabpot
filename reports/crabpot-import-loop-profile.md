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
| p50WallMs                      | 2391     |
| p95WallMs                      | 2417     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 2 MB     |
| maxPluginCpuDeltaMsEstimate    | 68 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 85.1 ms  |
| p95OpenClawImportMs            | 95.5 ms  |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.3 ms   |
| maxPeakRssMb                   | 338.8 MB |
| maxCpuMsEstimate               | 4761 ms  |
| baselineReferenceWallMs        | 2454 ms  |
| baselineReferencePeakRssMb     | 336.8 MB |
| baselineReferenceCpuMsEstimate | 4693 ms  |
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
| referenceWallMs        | 2454 ms                                  |
| referencePeakRssMb     | 336.8 MB                                 |
| referenceCpuMsEstimate | 4693 ms                                  |
| maxWallMs              | 4356 ms                                  |
| maxPeakRssMb           | 341.3 MB                                 |
| maxCpuMsEstimate       | 5060 ms                                  |
| statSampleCount        | 362                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 85.1 ms         | 0.3 ms            | 0 ms              | 2 MB             | 68 ms            | 2417 ms  | 338.8 MB     | 4761 ms          | 95/95           | 0    |
| 1   | captured | 2        | 95.5 ms         | 0.3 ms            | 0 ms              | 0 MB             | 1 ms             | 2391 ms  | 333.8 MB     | 4694 ms          | 93/93           | 0    |
| 2   | captured | 2        | 76 ms           | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 2362 ms  | 325.8 MB     | 4630 ms          | 93/93           | 0    |
