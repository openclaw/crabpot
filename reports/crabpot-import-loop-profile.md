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
| p50WallMs                      | 2414     |
| p95WallMs                      | 2457     |
| p50PluginWallDeltaMs           | 18       |
| p95PluginWallDeltaMs           | 61       |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 129 ms   |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 116.8 ms |
| p95OpenClawImportMs            | 145.2 ms |
| p50OpenClawActivationMs        | 0.4 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 307.6 MB |
| maxCpuMsEstimate               | 4892 ms  |
| baselineReferenceWallMs        | 2396 ms  |
| baselineReferencePeakRssMb     | 307.7 MB |
| baselineReferenceCpuMsEstimate | 4763 ms  |
| statSampleCount                | 284      |
| rssSampleCount                 | 284      |
| cpuSampleCount                 | 284      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2396 ms                                  |
| referencePeakRssMb     | 307.7 MB                                 |
| referenceCpuMsEstimate | 4763 ms                                  |
| maxWallMs              | 3185 ms                                  |
| maxPeakRssMb           | 322.2 MB                                 |
| maxCpuMsEstimate       | 5704 ms                                  |
| statSampleCount        | 312                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 145.2 ms        | 0.4 ms            | 18 ms             | 0 MB             | 118 ms           | 2414 ms  | 290.1 MB     | 4881 ms          | 94/94           | 0    |
| 1   | captured | 2        | 116.8 ms        | 0.4 ms            | 61 ms             | 0 MB             | 129 ms           | 2457 ms  | 307.6 MB     | 4892 ms          | 97/97           | 0    |
| 2   | captured | 2        | 113.8 ms        | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 2337 ms  | 303 MB       | 4616 ms          | 93/93           | 0    |
