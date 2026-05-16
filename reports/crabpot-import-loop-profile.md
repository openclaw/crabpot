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
| p50WallMs                      | 1132     |
| p95WallMs                      | 1185     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 18       |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 69 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 78.4 ms  |
| p95OpenClawImportMs            | 79.4 ms  |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 263.2 MB |
| maxCpuMsEstimate               | 2193 ms  |
| baselineReferenceWallMs        | 1167 ms  |
| baselineReferencePeakRssMb     | 273.4 MB |
| baselineReferenceCpuMsEstimate | 2124 ms  |
| statSampleCount                | 137      |
| rssSampleCount                 | 137      |
| cpuSampleCount                 | 137      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 1167 ms                                  |
| referencePeakRssMb     | 273.4 MB                                 |
| referenceCpuMsEstimate | 2124 ms                                  |
| maxWallMs              | 1544 ms                                  |
| maxPeakRssMb           | 275.9 MB                                 |
| maxCpuMsEstimate       | 2761 ms                                  |
| statSampleCount        | 153                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 79.4 ms         | 0.2 ms            | 18 ms             | 0 MB             | 69 ms            | 1185 ms  | 261.8 MB     | 2193 ms          | 47/47           | 0    |
| 1   | captured | 2        | 78.4 ms         | 0.4 ms            | 0 ms              | 0 MB             | 0 ms             | 1132 ms  | 260 MB       | 2033 ms          | 45/45           | 0    |
| 2   | captured | 2        | 65.7 ms         | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 1132 ms  | 263.2 MB     | 2096 ms          | 45/45           | 0    |
