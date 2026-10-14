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
| p50WallMs                      | 2905     |
| p95WallMs                      | 2939     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 20.9 MB  |
| maxPluginCpuDeltaMsEstimate    | 37 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 75.9 ms  |
| p95OpenClawImportMs            | 80.8 ms  |
| p50OpenClawActivationMs        | 0.8 ms   |
| p95OpenClawActivationMs        | 0.8 ms   |
| maxPeakRssMb                   | 529.3 MB |
| maxCpuMsEstimate               | 4304 ms  |
| baselineReferenceWallMs        | 3020 ms  |
| baselineReferencePeakRssMb     | 508.4 MB |
| baselineReferenceCpuMsEstimate | 4267 ms  |
| statSampleCount                | 345      |
| rssSampleCount                 | 345      |
| cpuSampleCount                 | 345      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 3020 ms                                  |
| referencePeakRssMb     | 508.4 MB                                 |
| referenceCpuMsEstimate | 4267 ms                                  |
| maxWallMs              | 6965 ms                                  |
| maxPeakRssMb           | 712.3 MB                                 |
| maxCpuMsEstimate       | 6547 ms                                  |
| statSampleCount        | 512                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 80.8 ms         | 0.8 ms            | 0 ms              | 0 MB             | 0 ms             | 2847 ms  | 506.5 MB     | 4037 ms          | 113/113         | 0    |
| 1   | captured | 2        | 73.4 ms         | 0.8 ms            | 0 ms              | 0 MB             | 0 ms             | 2905 ms  | 506.9 MB     | 4109 ms          | 116/116         | 0    |
| 2   | captured | 2        | 75.9 ms         | 0.8 ms            | 0 ms              | 20.9 MB          | 37 ms            | 2939 ms  | 529.3 MB     | 4304 ms          | 116/116         | 0    |
