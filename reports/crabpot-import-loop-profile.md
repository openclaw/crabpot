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
| p50WallMs                      | 2393     |
| p95WallMs                      | 2396     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 6.3 MB   |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 81 ms    |
| p95OpenClawImportMs            | 91 ms    |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 337.8 MB |
| maxCpuMsEstimate               | 4681 ms  |
| baselineReferenceWallMs        | 2398 ms  |
| baselineReferencePeakRssMb     | 331.5 MB |
| baselineReferenceCpuMsEstimate | 4743 ms  |
| statSampleCount                | 283      |
| rssSampleCount                 | 283      |
| cpuSampleCount                 | 283      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2398 ms                                  |
| referencePeakRssMb     | 331.5 MB                                 |
| referenceCpuMsEstimate | 4743 ms                                  |
| maxWallMs              | 2940 ms                                  |
| maxPeakRssMb           | 333.8 MB                                 |
| maxCpuMsEstimate       | 5307 ms                                  |
| statSampleCount        | 303                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 91 ms           | 0.4 ms            | 0 ms              | 6.3 MB           | 0 ms             | 2345 ms  | 337.8 MB     | 4615 ms          | 93/93           | 0    |
| 1   | captured | 2        | 75.6 ms         | 0.3 ms            | 0 ms              | 0.3 MB           | 0 ms             | 2396 ms  | 331.8 MB     | 4671 ms          | 95/95           | 0    |
| 2   | captured | 2        | 81 ms           | 0.3 ms            | 0 ms              | 0.7 MB           | 0 ms             | 2393 ms  | 332.2 MB     | 4681 ms          | 95/95           | 0    |
