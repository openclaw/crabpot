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
| p50WallMs                      | 2019     |
| p95WallMs                      | 2052     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 4        |
| maxPluginPeakRssDeltaMb        | 7.4 MB   |
| maxPluginCpuDeltaMsEstimate    | 47 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 88.7 ms  |
| p95OpenClawImportMs            | 97.4 ms  |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.5 ms   |
| maxPeakRssMb                   | 339.3 MB |
| maxCpuMsEstimate               | 4060 ms  |
| baselineReferenceWallMs        | 2048 ms  |
| baselineReferencePeakRssMb     | 331.9 MB |
| baselineReferenceCpuMsEstimate | 4013 ms  |
| statSampleCount                | 238      |
| rssSampleCount                 | 238      |
| cpuSampleCount                 | 238      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2048 ms                                  |
| referencePeakRssMb     | 331.9 MB                                 |
| referenceCpuMsEstimate | 4013 ms                                  |
| maxWallMs              | 2606 ms                                  |
| maxPeakRssMb           | 338.1 MB                                 |
| maxCpuMsEstimate       | 4722 ms                                  |
| statSampleCount        | 262                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 97.4 ms         | 0.3 ms            | 4 ms              | 7.4 MB           | 47 ms            | 2052 ms  | 339.3 MB     | 4060 ms          | 81/81           | 0    |
| 1   | captured | 2        | 88.7 ms         | 0.3 ms            | 0 ms              | 1.8 MB           | 0 ms             | 1981 ms  | 333.7 MB     | 3932 ms          | 77/77           | 0    |
| 2   | captured | 2        | 83.5 ms         | 0.5 ms            | 0 ms              | 3.4 MB           | 0 ms             | 2019 ms  | 335.3 MB     | 3944 ms          | 80/80           | 0    |
