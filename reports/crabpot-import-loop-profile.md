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
| p50WallMs                      | 1613     |
| p95WallMs                      | 1618     |
| p50PluginWallDeltaMs           | 22       |
| p95PluginWallDeltaMs           | 27       |
| maxPluginPeakRssDeltaMb        | 2.9 MB   |
| maxPluginCpuDeltaMsEstimate    | 68 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 86.5 ms  |
| p95OpenClawImportMs            | 88 ms    |
| p50OpenClawActivationMs        | 0.4 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 253.5 MB |
| maxCpuMsEstimate               | 3005 ms  |
| baselineReferenceWallMs        | 1591 ms  |
| baselineReferencePeakRssMb     | 250.6 MB |
| baselineReferenceCpuMsEstimate | 2937 ms  |
| statSampleCount                | 191      |
| rssSampleCount                 | 191      |
| cpuSampleCount                 | 191      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 1591 ms                                  |
| referencePeakRssMb     | 250.6 MB                                 |
| referenceCpuMsEstimate | 2937 ms                                  |
| maxWallMs              | 2120 ms                                  |
| maxPeakRssMb           | 257.3 MB                                 |
| maxCpuMsEstimate       | 3792 ms                                  |
| statSampleCount        | 206                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 88 ms           | 0.4 ms            | 22 ms             | 2.9 MB           | 0 ms             | 1613 ms  | 253.5 MB     | 2918 ms          | 64/64           | 0    |
| 1   | captured | 2        | 86.5 ms         | 0.4 ms            | 27 ms             | 0.4 MB           | 68 ms            | 1618 ms  | 251 MB       | 3005 ms          | 64/64           | 0    |
| 2   | captured | 2        | 84.8 ms         | 0.4 ms            | 2 ms              | 0 MB             | 18 ms            | 1593 ms  | 247.8 MB     | 2955 ms          | 63/63           | 0    |
