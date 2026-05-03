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
| p50WallMs                      | 2349     |
| p95WallMs                      | 2373     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 18       |
| maxPluginPeakRssDeltaMb        | 10.5 MB  |
| maxPluginCpuDeltaMsEstimate    | 5 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 52 ms    |
| p95OpenClawImportMs            | 53.5 ms  |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.3 ms   |
| maxPeakRssMb                   | 350.7 MB |
| maxCpuMsEstimate               | 4673 ms  |
| baselineReferenceWallMs        | 2355 ms  |
| baselineReferencePeakRssMb     | 340.2 MB |
| baselineReferenceCpuMsEstimate | 4668 ms  |
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
| referenceWallMs        | 2355 ms                                  |
| referencePeakRssMb     | 340.2 MB                                 |
| referenceCpuMsEstimate | 4668 ms                                  |
| maxWallMs              | 2909 ms                                  |
| maxPeakRssMb           | 342.9 MB                                 |
| maxCpuMsEstimate       | 5275 ms                                  |
| statSampleCount        | 299                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 53.5 ms         | 0.3 ms            | 18 ms             | 10.5 MB          | 5 ms             | 2373 ms  | 350.7 MB     | 4673 ms          | 92/92           | 0    |
| 1   | captured | 2        | 52 ms           | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 2342 ms  | 330.1 MB     | 4651 ms          | 93/93           | 0    |
| 2   | captured | 2        | 51.8 ms         | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 2349 ms  | 331.3 MB     | 4622 ms          | 93/93           | 0    |
