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
| p50WallMs                      | 2892     |
| p95WallMs                      | 2925     |
| p50PluginWallDeltaMs           | 13       |
| p95PluginWallDeltaMs           | 46       |
| maxPluginPeakRssDeltaMb        | 4.8 MB   |
| maxPluginCpuDeltaMsEstimate    | 52 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 124.3 ms |
| p95OpenClawImportMs            | 135.1 ms |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.3 ms   |
| maxPeakRssMb                   | 349.4 MB |
| maxCpuMsEstimate               | 5776 ms  |
| baselineReferenceWallMs        | 2879 ms  |
| baselineReferencePeakRssMb     | 344.6 MB |
| baselineReferenceCpuMsEstimate | 5724 ms  |
| statSampleCount                | 344      |
| rssSampleCount                 | 344      |
| cpuSampleCount                 | 344      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2879 ms                                  |
| referencePeakRssMb     | 344.6 MB                                 |
| referenceCpuMsEstimate | 5724 ms                                  |
| maxWallMs              | 3999 ms                                  |
| maxPeakRssMb           | 368.6 MB                                 |
| maxCpuMsEstimate       | 7189 ms                                  |
| statSampleCount        | 382                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 124.3 ms        | 0.3 ms            | 0 ms              | 4.8 MB           | 0 ms             | 2869 ms  | 349.4 MB     | 5677 ms          | 113/113         | 0    |
| 1   | captured | 2        | 119.9 ms        | 0.3 ms            | 13 ms             | 0 MB             | 45 ms            | 2892 ms  | 342.8 MB     | 5769 ms          | 115/115         | 0    |
| 2   | captured | 2        | 135.1 ms        | 0.3 ms            | 46 ms             | 0 MB             | 52 ms            | 2925 ms  | 329 MB       | 5776 ms          | 116/116         | 0    |
