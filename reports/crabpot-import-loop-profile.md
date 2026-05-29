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
| p50WallMs                      | 2052     |
| p95WallMs                      | 2062     |
| p50PluginWallDeltaMs           | 4        |
| p95PluginWallDeltaMs           | 14       |
| maxPluginPeakRssDeltaMb        | 11.3 MB  |
| maxPluginCpuDeltaMsEstimate    | 15 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 106.4 ms |
| p95OpenClawImportMs            | 117.9 ms |
| p50OpenClawActivationMs        | 0.4 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 298 MB   |
| maxCpuMsEstimate               | 4010 ms  |
| baselineReferenceWallMs        | 2048 ms  |
| baselineReferencePeakRssMb     | 286.7 MB |
| baselineReferenceCpuMsEstimate | 3995 ms  |
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
| referenceWallMs        | 2048 ms                                  |
| referencePeakRssMb     | 286.7 MB                                 |
| referenceCpuMsEstimate | 3995 ms                                  |
| maxWallMs              | 2738 ms                                  |
| maxPeakRssMb           | 291 MB                                   |
| maxCpuMsEstimate       | 4878 ms                                  |
| statSampleCount        | 268                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 117.9 ms        | 0.4 ms            | 0 ms              | 11.3 MB          | 0 ms             | 2020 ms  | 298 MB       | 3907 ms          | 80/80           | 0    |
| 1   | captured | 2        | 106.4 ms        | 0.4 ms            | 14 ms             | 1.7 MB           | 0 ms             | 2062 ms  | 288.4 MB     | 3930 ms          | 81/81           | 0    |
| 2   | captured | 2        | 104.8 ms        | 0.4 ms            | 4 ms              | 5.7 MB           | 15 ms            | 2052 ms  | 292.4 MB     | 4010 ms          | 81/81           | 0    |
