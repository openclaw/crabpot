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
| p50WallMs                      | 2495     |
| p95WallMs                      | 2522     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 3.6 MB   |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 55.3 ms  |
| p95OpenClawImportMs            | 57.2 ms  |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.3 ms   |
| maxPeakRssMb                   | 344.4 MB |
| maxCpuMsEstimate               | 4945 ms  |
| baselineReferenceWallMs        | 2555 ms  |
| baselineReferencePeakRssMb     | 340.8 MB |
| baselineReferenceCpuMsEstimate | 4963 ms  |
| statSampleCount                | 293      |
| rssSampleCount                 | 293      |
| cpuSampleCount                 | 293      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2555 ms                                  |
| referencePeakRssMb     | 340.8 MB                                 |
| referenceCpuMsEstimate | 4963 ms                                  |
| maxWallMs              | 2922 ms                                  |
| maxPeakRssMb           | 346.4 MB                                 |
| maxCpuMsEstimate       | 5353 ms                                  |
| statSampleCount        | 308                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 57.2 ms         | 0.3 ms            | 0 ms              | 3.6 MB           | 0 ms             | 2522 ms  | 344.4 MB     | 4945 ms          | 99/99           | 0    |
| 1   | captured | 2        | 55.3 ms         | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 2495 ms  | 335.8 MB     | 4850 ms          | 97/97           | 0    |
| 2   | captured | 2        | 52.2 ms         | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 2485 ms  | 340.7 MB     | 4904 ms          | 97/97           | 0    |
