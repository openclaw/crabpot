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
| p50WallMs                      | 2378     |
| p95WallMs                      | 2389     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 117.3 ms |
| p95OpenClawImportMs            | 118.1 ms |
| p50OpenClawActivationMs        | 0.4 ms   |
| p95OpenClawActivationMs        | 0.5 ms   |
| maxPeakRssMb                   | 300.2 MB |
| maxCpuMsEstimate               | 4761 ms  |
| baselineReferenceWallMs        | 2427 ms  |
| baselineReferencePeakRssMb     | 308.6 MB |
| baselineReferenceCpuMsEstimate | 4811 ms  |
| statSampleCount                | 280      |
| rssSampleCount                 | 280      |
| cpuSampleCount                 | 280      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2427 ms                                  |
| referencePeakRssMb     | 308.6 MB                                 |
| referenceCpuMsEstimate | 4811 ms                                  |
| maxWallMs              | 3242 ms                                  |
| maxPeakRssMb           | 324.2 MB                                 |
| maxCpuMsEstimate       | 5839 ms                                  |
| statSampleCount        | 313                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 117.3 ms        | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 2378 ms  | 300.2 MB     | 4761 ms          | 94/94           | 0    |
| 1   | captured | 2        | 118.1 ms        | 0.4 ms            | 0 ms              | 0 MB             | 0 ms             | 2389 ms  | 293.3 MB     | 4708 ms          | 94/94           | 0    |
| 2   | captured | 2        | 109.9 ms        | 0.5 ms            | 0 ms              | 0 MB             | 0 ms             | 2345 ms  | 294.4 MB     | 4634 ms          | 92/92           | 0    |
