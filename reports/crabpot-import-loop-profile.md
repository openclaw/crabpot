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
| p50WallMs                      | 3069     |
| p95WallMs                      | 3073     |
| p50PluginWallDeltaMs           | 34       |
| p95PluginWallDeltaMs           | 38       |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 103 ms   |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 61.6 ms  |
| p95OpenClawImportMs            | 62 ms    |
| p50OpenClawActivationMs        | 0.5 ms   |
| p95OpenClawActivationMs        | 0.6 ms   |
| maxPeakRssMb                   | 420.8 MB |
| maxCpuMsEstimate               | 4201 ms  |
| baselineReferenceWallMs        | 3035 ms  |
| baselineReferencePeakRssMb     | 422.1 MB |
| baselineReferenceCpuMsEstimate | 4098 ms  |
| statSampleCount                | 365      |
| rssSampleCount                 | 365      |
| cpuSampleCount                 | 365      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 3035 ms                                  |
| referencePeakRssMb     | 422.1 MB                                 |
| referenceCpuMsEstimate | 4098 ms                                  |
| maxWallMs              | 6716 ms                                  |
| maxPeakRssMb           | 572.3 MB                                 |
| maxCpuMsEstimate       | 6315 ms                                  |
| statSampleCount        | 508                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 61.6 ms         | 0.6 ms            | 34 ms             | 0 MB             | 22 ms            | 3069 ms  | 416.9 MB     | 4120 ms          | 122/122         | 0    |
| 1   | captured | 2        | 62 ms           | 0.5 ms            | 38 ms             | 0 MB             | 103 ms           | 3073 ms  | 420.8 MB     | 4201 ms          | 122/122         | 0    |
| 2   | captured | 2        | 59.8 ms         | 0.5 ms            | 0 ms              | 0 MB             | 0 ms             | 3033 ms  | 420.6 MB     | 4078 ms          | 121/121         | 0    |
