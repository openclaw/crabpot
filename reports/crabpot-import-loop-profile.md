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
| p50WallMs                      | 2816     |
| p95WallMs                      | 2833     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 4.7 MB   |
| maxPluginCpuDeltaMsEstimate    | 76 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 76.3 ms  |
| p95OpenClawImportMs            | 105.1 ms |
| p50OpenClawActivationMs        | 0.9 ms   |
| p95OpenClawActivationMs        | 0.9 ms   |
| maxPeakRssMb                   | 503.8 MB |
| maxCpuMsEstimate               | 4040 ms  |
| baselineReferenceWallMs        | 2843 ms  |
| baselineReferencePeakRssMb     | 499.1 MB |
| baselineReferenceCpuMsEstimate | 3964 ms  |
| statSampleCount                | 336      |
| rssSampleCount                 | 336      |
| cpuSampleCount                 | 336      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2843 ms                                  |
| referencePeakRssMb     | 499.1 MB                                 |
| referenceCpuMsEstimate | 3964 ms                                  |
| maxWallMs              | 6222 ms                                  |
| maxPeakRssMb           | 610.3 MB                                 |
| maxCpuMsEstimate       | 6131 ms                                  |
| statSampleCount        | 471                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 75.6 ms         | 0.9 ms            | 0 ms              | 0.7 MB           | 76 ms            | 2816 ms  | 499.8 MB     | 4040 ms          | 112/112         | 0    |
| 1   | captured | 2        | 105.1 ms        | 0.8 ms            | 0 ms              | 4.7 MB           | 0 ms             | 2833 ms  | 503.8 MB     | 3931 ms          | 112/112         | 0    |
| 2   | captured | 2        | 76.3 ms         | 0.9 ms            | 0 ms              | 0.2 MB           | 17 ms            | 2805 ms  | 499.3 MB     | 3981 ms          | 112/112         | 0    |
