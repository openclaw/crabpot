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
| p50WallMs                      | 2351     |
| p95WallMs                      | 2389     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 28       |
| maxPluginPeakRssDeltaMb        | 14.6 MB  |
| maxPluginCpuDeltaMsEstimate    | 74 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 86.3 ms  |
| p95OpenClawImportMs            | 92.6 ms  |
| p50OpenClawActivationMs        | 0.4 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 346.9 MB |
| maxCpuMsEstimate               | 4597 ms  |
| baselineReferenceWallMs        | 2361 ms  |
| baselineReferencePeakRssMb     | 332.3 MB |
| baselineReferenceCpuMsEstimate | 4523 ms  |
| statSampleCount                | 277      |
| rssSampleCount                 | 277      |
| cpuSampleCount                 | 277      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2361 ms                                  |
| referencePeakRssMb     | 332.3 MB                                 |
| referenceCpuMsEstimate | 4523 ms                                  |
| maxWallMs              | 2868 ms                                  |
| maxPeakRssMb           | 346.8 MB                                 |
| maxCpuMsEstimate       | 5124 ms                                  |
| statSampleCount        | 291                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 86.3 ms         | 0.4 ms            | 0 ms              | 5.8 MB           | 0 ms             | 2283 ms  | 338.1 MB     | 4458 ms          | 89/89           | 0    |
| 1   | captured | 2        | 92.6 ms         | 0.3 ms            | 28 ms             | 4.1 MB           | 74 ms            | 2389 ms  | 336.4 MB     | 4597 ms          | 95/95           | 0    |
| 2   | captured | 2        | 84.7 ms         | 0.4 ms            | 0 ms              | 14.6 MB          | 15 ms            | 2351 ms  | 346.9 MB     | 4538 ms          | 93/93           | 0    |
