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
| p50WallMs                      | 2466     |
| p95WallMs                      | 2507     |
| p50PluginWallDeltaMs           | 76       |
| p95PluginWallDeltaMs           | 117      |
| maxPluginPeakRssDeltaMb        | 8.1 MB   |
| maxPluginCpuDeltaMsEstimate    | 234 ms   |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 115.9 ms |
| p95OpenClawImportMs            | 117 ms   |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 317 MB   |
| maxCpuMsEstimate               | 4933 ms  |
| baselineReferenceWallMs        | 2390 ms  |
| baselineReferencePeakRssMb     | 308.9 MB |
| baselineReferenceCpuMsEstimate | 4699 ms  |
| statSampleCount                | 292      |
| rssSampleCount                 | 292      |
| cpuSampleCount                 | 292      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2390 ms                                  |
| referencePeakRssMb     | 308.9 MB                                 |
| referenceCpuMsEstimate | 4699 ms                                  |
| maxWallMs              | 3312 ms                                  |
| maxPeakRssMb           | 332.8 MB                                 |
| maxCpuMsEstimate       | 5853 ms                                  |
| statSampleCount        | 318                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 115.9 ms        | 0.3 ms            | 26 ms             | 0 MB             | 79 ms            | 2416 ms  | 294.2 MB     | 4778 ms          | 96/96           | 0    |
| 1   | captured | 2        | 117 ms          | 0.3 ms            | 117 ms            | 8.1 MB           | 231 ms           | 2507 ms  | 317 MB       | 4930 ms          | 99/99           | 0    |
| 2   | captured | 2        | 113.6 ms        | 0.4 ms            | 76 ms             | 0 MB             | 234 ms           | 2466 ms  | 307.2 MB     | 4933 ms          | 97/97           | 0    |
