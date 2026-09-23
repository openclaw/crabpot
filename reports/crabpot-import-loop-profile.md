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
| p50WallMs                      | 3048     |
| p95WallMs                      | 3053     |
| p50PluginWallDeltaMs           | 90       |
| p95PluginWallDeltaMs           | 95       |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 109 ms   |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 63 ms    |
| p95OpenClawImportMs            | 63.8 ms  |
| p50OpenClawActivationMs        | 0.5 ms   |
| p95OpenClawActivationMs        | 0.6 ms   |
| maxPeakRssMb                   | 419.4 MB |
| maxCpuMsEstimate               | 4088 ms  |
| baselineReferenceWallMs        | 2958 ms  |
| baselineReferencePeakRssMb     | 420.5 MB |
| baselineReferenceCpuMsEstimate | 3979 ms  |
| statSampleCount                | 361      |
| rssSampleCount                 | 361      |
| cpuSampleCount                 | 361      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2958 ms                                  |
| referencePeakRssMb     | 420.5 MB                                 |
| referenceCpuMsEstimate | 3979 ms                                  |
| maxWallMs              | 6547 ms                                  |
| maxPeakRssMb           | 595.1 MB                                 |
| maxCpuMsEstimate       | 6197 ms                                  |
| statSampleCount        | 495                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 63.8 ms         | 0.5 ms            | 5 ms              | 0 MB             | 25 ms            | 2963 ms  | 416.5 MB     | 4004 ms          | 118/118         | 0    |
| 1   | captured | 2        | 63 ms           | 0.5 ms            | 90 ms             | 0 MB             | 109 ms           | 3048 ms  | 419.4 MB     | 4088 ms          | 121/121         | 0    |
| 2   | captured | 2        | 60.2 ms         | 0.6 ms            | 95 ms             | 0 MB             | 104 ms           | 3053 ms  | 416.9 MB     | 4083 ms          | 122/122         | 0    |
