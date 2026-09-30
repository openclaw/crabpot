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
| p50WallMs                      | 2564     |
| p95WallMs                      | 2655     |
| p50PluginWallDeltaMs           | 19       |
| p95PluginWallDeltaMs           | 110      |
| maxPluginPeakRssDeltaMb        | 23.7 MB  |
| maxPluginCpuDeltaMsEstimate    | 195 ms   |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 77 ms    |
| p95OpenClawImportMs            | 82 ms    |
| p50OpenClawActivationMs        | 0.7 ms   |
| p95OpenClawActivationMs        | 0.7 ms   |
| maxPeakRssMb                   | 534.3 MB |
| maxCpuMsEstimate               | 3920 ms  |
| baselineReferenceWallMs        | 2545 ms  |
| baselineReferencePeakRssMb     | 510.6 MB |
| baselineReferenceCpuMsEstimate | 3725 ms  |
| statSampleCount                | 308      |
| rssSampleCount                 | 308      |
| cpuSampleCount                 | 308      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2545 ms                                  |
| referencePeakRssMb     | 510.6 MB                                 |
| referenceCpuMsEstimate | 3725 ms                                  |
| maxWallMs              | 6446 ms                                  |
| maxPeakRssMb           | 731.5 MB                                 |
| maxCpuMsEstimate       | 6240 ms                                  |
| statSampleCount        | 456                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 77 ms           | 0.7 ms            | 19 ms             | 14.5 MB          | 39 ms            | 2564 ms  | 525.1 MB     | 3764 ms          | 102/102         | 0    |
| 1   | captured | 2        | 70.9 ms         | 0.7 ms            | 0 ms              | 0 MB             | 61 ms            | 2537 ms  | 507.4 MB     | 3786 ms          | 100/100         | 0    |
| 2   | captured | 2        | 82 ms           | 0.7 ms            | 110 ms            | 23.7 MB          | 195 ms           | 2655 ms  | 534.3 MB     | 3920 ms          | 106/106         | 0    |
