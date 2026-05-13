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
| p50WallMs                      | 2480     |
| p95WallMs                      | 2511     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 4 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 77.4 ms  |
| p95OpenClawImportMs            | 79.4 ms  |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.3 ms   |
| maxPeakRssMb                   | 333.5 MB |
| maxCpuMsEstimate               | 4905 ms  |
| baselineReferenceWallMs        | 2522 ms  |
| baselineReferencePeakRssMb     | 339.1 MB |
| baselineReferenceCpuMsEstimate | 4901 ms  |
| statSampleCount                | 290      |
| rssSampleCount                 | 290      |
| cpuSampleCount                 | 290      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2522 ms                                  |
| referencePeakRssMb     | 339.1 MB                                 |
| referenceCpuMsEstimate | 4901 ms                                  |
| maxWallMs              | 3056 ms                                  |
| maxPeakRssMb           | 345.3 MB                                 |
| maxCpuMsEstimate       | 5483 ms                                  |
| statSampleCount        | 313                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 79.4 ms         | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 2376 ms  | 330.1 MB     | 4686 ms          | 93/93           | 0    |
| 1   | captured | 2        | 77.4 ms         | 0.3 ms            | 0 ms              | 0 MB             | 4 ms             | 2511 ms  | 330.2 MB     | 4905 ms          | 99/99           | 0    |
| 2   | captured | 2        | 76.2 ms         | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 2480 ms  | 333.5 MB     | 4855 ms          | 98/98           | 0    |
