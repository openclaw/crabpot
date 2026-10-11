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
| p50WallMs                      | 4300     |
| p95WallMs                      | 4343     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 34       |
| maxPluginPeakRssDeltaMb        | 3.4 MB   |
| maxPluginCpuDeltaMsEstimate    | 92 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 109.4 ms |
| p95OpenClawImportMs            | 110.9 ms |
| p50OpenClawActivationMs        | 1.2 ms   |
| p95OpenClawActivationMs        | 1.2 ms   |
| maxPeakRssMb                   | 531.8 MB |
| maxCpuMsEstimate               | 6072 ms  |
| baselineReferenceWallMs        | 4309 ms  |
| baselineReferencePeakRssMb     | 528.4 MB |
| baselineReferenceCpuMsEstimate | 5980 ms  |
| statSampleCount                | 514      |
| rssSampleCount                 | 514      |
| cpuSampleCount                 | 514      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 4309 ms                                  |
| referencePeakRssMb     | 528.4 MB                                 |
| referenceCpuMsEstimate | 5980 ms                                  |
| maxWallMs              | 9557 ms                                  |
| maxPeakRssMb           | 689.7 MB                                 |
| maxCpuMsEstimate       | 8995 ms                                  |
| statSampleCount        | 723                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 107.9 ms        | 1.2 ms            | 34 ms             | 0.8 MB           | 92 ms            | 4343 ms  | 529.2 MB     | 6072 ms          | 172/172         | 0    |
| 1   | captured | 2        | 109.4 ms        | 1.2 ms            | 0 ms              | 3.4 MB           | 0 ms             | 4300 ms  | 531.8 MB     | 5978 ms          | 171/171         | 0    |
| 2   | captured | 2        | 110.9 ms        | 1.2 ms            | 0 ms              | 0 MB             | 0 ms             | 4299 ms  | 528.2 MB     | 5954 ms          | 171/171         | 0    |
