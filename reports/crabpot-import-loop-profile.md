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
| p50WallMs                      | 1184     |
| p95WallMs                      | 1188     |
| p50PluginWallDeltaMs           | 18       |
| p95PluginWallDeltaMs           | 22       |
| maxPluginPeakRssDeltaMb        | 1.1 MB   |
| maxPluginCpuDeltaMsEstimate    | 28 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 51.4 ms  |
| p95OpenClawImportMs            | 54.4 ms  |
| p50OpenClawActivationMs        | 0.2 ms   |
| p95OpenClawActivationMs        | 0.2 ms   |
| maxPeakRssMb                   | 275.6 MB |
| maxCpuMsEstimate               | 1584 ms  |
| baselineReferenceWallMs        | 1166 ms  |
| baselineReferencePeakRssMb     | 274.5 MB |
| baselineReferenceCpuMsEstimate | 1556 ms  |
| statSampleCount                | 120      |
| rssSampleCount                 | 120      |
| cpuSampleCount                 | 120      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 1166 ms                                  |
| referencePeakRssMb     | 274.5 MB                                 |
| referenceCpuMsEstimate | 1556 ms                                  |
| maxWallMs              | 4531 ms                                  |
| maxPeakRssMb           | 346.8 MB                                 |
| maxCpuMsEstimate       | 2464 ms                                  |
| statSampleCount        | 237                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 54.4 ms         | 0.2 ms            | 8 ms              | 1.1 MB           | 0 ms             | 1174 ms  | 275.6 MB     | 1520 ms          | 40/40           | 0    |
| 1   | captured | 2        | 50.5 ms         | 0.2 ms            | 22 ms             | 0 MB             | 0 ms             | 1188 ms  | 272.4 MB     | 1539 ms          | 40/40           | 0    |
| 2   | captured | 2        | 51.4 ms         | 0.2 ms            | 18 ms             | 0 MB             | 28 ms            | 1184 ms  | 270.9 MB     | 1584 ms          | 40/40           | 0    |
