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
| p50WallMs                      | 2181     |
| p95WallMs                      | 2202     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 1        |
| maxPluginPeakRssDeltaMb        | 1.8 MB   |
| maxPluginCpuDeltaMsEstimate    | 46 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 53.5 ms  |
| p95OpenClawImportMs            | 53.6 ms  |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.3 ms   |
| maxPeakRssMb                   | 339.7 MB |
| maxCpuMsEstimate               | 4418 ms  |
| baselineReferenceWallMs        | 2201 ms  |
| baselineReferencePeakRssMb     | 337.9 MB |
| baselineReferenceCpuMsEstimate | 4372 ms  |
| statSampleCount                | 257      |
| rssSampleCount                 | 257      |
| cpuSampleCount                 | 257      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 2201 ms                                  |
| referencePeakRssMb     | 337.9 MB                                 |
| referenceCpuMsEstimate | 4372 ms                                  |
| maxWallMs              | 2693 ms                                  |
| maxPeakRssMb           | 339.6 MB                                 |
| maxCpuMsEstimate       | 4907 ms                                  |
| statSampleCount        | 276                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 53.5 ms         | 0.3 ms            | 0 ms              | 0.7 MB           | 0 ms             | 2122 ms  | 338.6 MB     | 4240 ms          | 84/84           | 0    |
| 1   | captured | 2        | 52.2 ms         | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 2181 ms  | 332 MB       | 4371 ms          | 86/86           | 0    |
| 2   | captured | 2        | 53.6 ms         | 0.3 ms            | 1 ms              | 1.8 MB           | 46 ms            | 2202 ms  | 339.7 MB     | 4418 ms          | 87/87           | 0    |
