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
| p50WallMs                      | 2016     |
| p95WallMs                      | 2078     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 25       |
| maxPluginPeakRssDeltaMb        | 0.8 MB   |
| maxPluginCpuDeltaMsEstimate    | 79 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 103.1 ms |
| p95OpenClawImportMs            | 103.5 ms |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.3 ms   |
| maxPeakRssMb                   | 308.9 MB |
| maxCpuMsEstimate               | 4172 ms  |
| baselineReferenceWallMs        | 2053 ms  |
| baselineReferencePeakRssMb     | 308.1 MB |
| baselineReferenceCpuMsEstimate | 4093 ms  |
| statSampleCount                | 242      |
| rssSampleCount                 | 242      |
| cpuSampleCount                 | 242      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2053 ms                                  |
| referencePeakRssMb     | 308.1 MB                                 |
| referenceCpuMsEstimate | 4093 ms                                  |
| maxWallMs              | 2844 ms                                  |
| maxPeakRssMb           | 314.8 MB                                 |
| maxCpuMsEstimate       | 5113 ms                                  |
| statSampleCount        | 270                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 103.1 ms        | 0.3 ms            | 0 ms              | 0.1 MB           | 0 ms             | 2016 ms  | 308.2 MB     | 4043 ms          | 80/80           | 0    |
| 1   | captured | 2        | 100.3 ms        | 0.3 ms            | 25 ms             | 0.3 MB           | 79 ms            | 2078 ms  | 308.4 MB     | 4172 ms          | 83/83           | 0    |
| 2   | captured | 2        | 103.5 ms        | 0.3 ms            | 0 ms              | 0.8 MB           | 0 ms             | 1985 ms  | 308.9 MB     | 4047 ms          | 79/79           | 0    |
