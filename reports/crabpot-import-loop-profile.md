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
| p50WallMs                      | 2345     |
| p95WallMs                      | 2351     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 9.9 MB   |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 75.8 ms  |
| p95OpenClawImportMs            | 78.6 ms  |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 339.9 MB |
| maxCpuMsEstimate               | 4605 ms  |
| baselineReferenceWallMs        | 2378 ms  |
| baselineReferencePeakRssMb     | 330 MB   |
| baselineReferenceCpuMsEstimate | 4633 ms  |
| statSampleCount                | 278      |
| rssSampleCount                 | 278      |
| cpuSampleCount                 | 278      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2378 ms                                  |
| referencePeakRssMb     | 330 MB                                   |
| referenceCpuMsEstimate | 4633 ms                                  |
| maxWallMs              | 2951 ms                                  |
| maxPeakRssMb           | 338.2 MB                                 |
| maxCpuMsEstimate       | 5183 ms                                  |
| statSampleCount        | 301                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 75.8 ms         | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 2345 ms  | 327.5 MB     | 4605 ms          | 93/93           | 0    |
| 1   | captured | 2        | 78.6 ms         | 0.3 ms            | 0 ms              | 3.2 MB           | 0 ms             | 2329 ms  | 333.2 MB     | 4486 ms          | 92/92           | 0    |
| 2   | captured | 2        | 72.3 ms         | 0.4 ms            | 0 ms              | 9.9 MB           | 0 ms             | 2351 ms  | 339.9 MB     | 4527 ms          | 93/93           | 0    |
