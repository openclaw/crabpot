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
| p50WallMs                      | 2912     |
| p95WallMs                      | 2914     |
| p50PluginWallDeltaMs           | 7        |
| p95PluginWallDeltaMs           | 9        |
| maxPluginPeakRssDeltaMb        | 2 MB     |
| maxPluginCpuDeltaMsEstimate    | 92 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 59.5 ms  |
| p95OpenClawImportMs            | 60.2 ms  |
| p50OpenClawActivationMs        | 0.5 ms   |
| p95OpenClawActivationMs        | 0.5 ms   |
| maxPeakRssMb                   | 423.1 MB |
| maxCpuMsEstimate               | 4012 ms  |
| baselineReferenceWallMs        | 2905 ms  |
| baselineReferencePeakRssMb     | 421.1 MB |
| baselineReferenceCpuMsEstimate | 3920 ms  |
| statSampleCount                | 348      |
| rssSampleCount                 | 348      |
| cpuSampleCount                 | 348      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2905 ms                                  |
| referencePeakRssMb     | 421.1 MB                                 |
| referenceCpuMsEstimate | 3920 ms                                  |
| maxWallMs              | 6437 ms                                  |
| maxPeakRssMb           | 578.2 MB                                 |
| maxCpuMsEstimate       | 6131 ms                                  |
| statSampleCount        | 487                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 60.2 ms         | 0.5 ms            | 9 ms              | 0 MB             | 0 ms             | 2914 ms  | 418.8 MB     | 3914 ms          | 116/116         | 0    |
| 1   | captured | 2        | 57.8 ms         | 0.5 ms            | 0 ms              | 2 MB             | 28 ms            | 2905 ms  | 423.1 MB     | 3948 ms          | 116/116         | 0    |
| 2   | captured | 2        | 59.5 ms         | 0.4 ms            | 7 ms              | 0 MB             | 92 ms            | 2912 ms  | 416.2 MB     | 4012 ms          | 116/116         | 0    |
