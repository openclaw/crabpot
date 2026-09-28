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
| p50WallMs                      | 4443     |
| p95WallMs                      | 4484     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 110.4 ms |
| p95OpenClawImportMs            | 122.2 ms |
| p50OpenClawActivationMs        | 1.3 ms   |
| p95OpenClawActivationMs        | 1.4 ms   |
| maxPeakRssMb                   | 531 MB   |
| maxCpuMsEstimate               | 6267 ms  |
| baselineReferenceWallMs        | 4557 ms  |
| baselineReferencePeakRssMb     | 531.8 MB |
| baselineReferenceCpuMsEstimate | 6373 ms  |
| statSampleCount                | 529      |
| rssSampleCount                 | 529      |
| cpuSampleCount                 | 529      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 4557 ms                                  |
| referencePeakRssMb     | 531.8 MB                                 |
| referenceCpuMsEstimate | 6373 ms                                  |
| maxWallMs              | 10281 ms                                 |
| maxPeakRssMb           | 729.5 MB                                 |
| maxCpuMsEstimate       | 9666 ms                                  |
| statSampleCount        | 765                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 110.4 ms        | 1.3 ms            | 0 ms              | 0 MB             | 0 ms             | 4443 ms  | 529.3 MB     | 6138 ms          | 176/176         | 0    |
| 1   | captured | 2        | 122.2 ms        | 1.4 ms            | 0 ms              | 0 MB             | 0 ms             | 4425 ms  | 507.7 MB     | 6267 ms          | 176/176         | 0    |
| 2   | captured | 2        | 109.2 ms        | 1.3 ms            | 0 ms              | 0 MB             | 0 ms             | 4484 ms  | 531 MB       | 6254 ms          | 177/177         | 0    |
