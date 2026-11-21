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
| p50WallMs                      | 5036     |
| p95WallMs                      | 5229     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 55       |
| maxPluginPeakRssDeltaMb        | 29.4 MB  |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 76.9 ms  |
| p95OpenClawImportMs            | 84.1 ms  |
| p50OpenClawActivationMs        | 1 ms     |
| p95OpenClawActivationMs        | 1 ms     |
| maxPeakRssMb                   | 840.3 MB |
| maxCpuMsEstimate               | 7555 ms  |
| baselineReferenceWallMs        | 5174 ms  |
| baselineReferencePeakRssMb     | 810.9 MB |
| baselineReferenceCpuMsEstimate | 7565 ms  |
| statSampleCount                | 605      |
| rssSampleCount                 | 605      |
| cpuSampleCount                 | 605      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 5174 ms                                  |
| referencePeakRssMb     | 810.9 MB                                 |
| referenceCpuMsEstimate | 7565 ms                                  |
| maxWallMs              | 11582 ms                                 |
| maxPeakRssMb           | 979.6 MB                                 |
| maxCpuMsEstimate       | 10429 ms                                 |
| statSampleCount        | 865                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 71.9 ms         | 1 ms              | 0 ms              | 0 MB             | 0 ms             | 4969 ms  | 808.3 MB     | 7298 ms          | 197/197         | 0    |
| 1   | captured | 2        | 76.9 ms         | 1 ms              | 0 ms              | 0 MB             | 0 ms             | 5036 ms  | 808.1 MB     | 7345 ms          | 200/200         | 0    |
| 2   | captured | 2        | 84.1 ms         | 1 ms              | 55 ms             | 29.4 MB          | 0 ms             | 5229 ms  | 840.3 MB     | 7555 ms          | 208/208         | 0    |

## Capture cleanup

removed: `crabpot-lifecycle-capture-CFfvLR` in the system temp directory.
