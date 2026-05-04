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
| p50WallMs                      | 2230     |
| p95WallMs                      | 2259     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 14.4 MB  |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 54 ms    |
| p95OpenClawImportMs            | 55.9 ms  |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.3 ms   |
| maxPeakRssMb                   | 354.1 MB |
| maxCpuMsEstimate               | 4434 ms  |
| baselineReferenceWallMs        | 2259 ms  |
| baselineReferencePeakRssMb     | 339.7 MB |
| baselineReferenceCpuMsEstimate | 4440 ms  |
| statSampleCount                | 262      |
| rssSampleCount                 | 262      |
| cpuSampleCount                 | 262      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2259 ms                                  |
| referencePeakRssMb     | 339.7 MB                                 |
| referenceCpuMsEstimate | 4440 ms                                  |
| maxWallMs              | 2749 ms                                  |
| maxPeakRssMb           | 341.1 MB                                 |
| maxCpuMsEstimate       | 4984 ms                                  |
| statSampleCount        | 283                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 55.9 ms         | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 2230 ms  | 339.6 MB     | 4324 ms          | 86/86           | 0    |
| 1   | captured | 2        | 53 ms           | 0.3 ms            | 0 ms              | 3.7 MB           | 0 ms             | 2259 ms  | 343.4 MB     | 4434 ms          | 88/88           | 0    |
| 2   | captured | 2        | 54 ms           | 0.3 ms            | 0 ms              | 14.4 MB          | 0 ms             | 2228 ms  | 354.1 MB     | 4354 ms          | 88/88           | 0    |
