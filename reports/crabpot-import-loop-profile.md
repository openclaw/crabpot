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
| p50WallMs                      | 2033     |
| p95WallMs                      | 2110     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 45       |
| maxPluginPeakRssDeltaMb        | 10.1 MB  |
| maxPluginCpuDeltaMsEstimate    | 59 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 85.9 ms  |
| p95OpenClawImportMs            | 93.5 ms  |
| p50OpenClawActivationMs        | 0.5 ms   |
| p95OpenClawActivationMs        | 0.5 ms   |
| maxPeakRssMb                   | 342.3 MB |
| maxCpuMsEstimate               | 4133 ms  |
| baselineReferenceWallMs        | 2065 ms  |
| baselineReferencePeakRssMb     | 332.2 MB |
| baselineReferenceCpuMsEstimate | 4074 ms  |
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
| referenceWallMs        | 2065 ms                                  |
| referencePeakRssMb     | 332.2 MB                                 |
| referenceCpuMsEstimate | 4074 ms                                  |
| maxWallMs              | 2580 ms                                  |
| maxPeakRssMb           | 334 MB                                   |
| maxCpuMsEstimate       | 4614 ms                                  |
| statSampleCount        | 263                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 93.5 ms         | 0.2 ms            | 0 ms              | 10.1 MB          | 0 ms             | 1985 ms  | 342.3 MB     | 3902 ms          | 79/79           | 0    |
| 1   | captured | 2        | 85.9 ms         | 0.5 ms            | 0 ms              | 5.1 MB           | 0 ms             | 2033 ms  | 337.3 MB     | 3956 ms          | 80/80           | 0    |
| 2   | captured | 2        | 83.9 ms         | 0.5 ms            | 45 ms             | 5.3 MB           | 59 ms            | 2110 ms  | 337.5 MB     | 4133 ms          | 83/83           | 0    |
