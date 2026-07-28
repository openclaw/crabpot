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
| p50WallMs                      | 3196     |
| p95WallMs                      | 3209     |
| p50PluginWallDeltaMs           | 25       |
| p95PluginWallDeltaMs           | 38       |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 61 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 129.9 ms |
| p95OpenClawImportMs            | 141.8 ms |
| p50OpenClawActivationMs        | 0.4 ms   |
| p95OpenClawActivationMs        | 0.4 ms   |
| maxPeakRssMb                   | 346.7 MB |
| maxCpuMsEstimate               | 6342 ms  |
| baselineReferenceWallMs        | 3171 ms  |
| baselineReferencePeakRssMb     | 350.5 MB |
| baselineReferenceCpuMsEstimate | 6281 ms  |
| statSampleCount                | 375      |
| rssSampleCount                 | 375      |
| cpuSampleCount                 | 375      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 3171 ms                                  |
| referencePeakRssMb     | 350.5 MB                                 |
| referenceCpuMsEstimate | 6281 ms                                  |
| maxWallMs              | 4307 ms                                  |
| maxPeakRssMb           | 371.5 MB                                 |
| maxCpuMsEstimate       | 7631 ms                                  |
| statSampleCount        | 414                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 141.8 ms        | 0.4 ms            | 38 ms             | 0 MB             | 61 ms            | 3209 ms  | 346.7 MB     | 6342 ms          | 125/125         | 0    |
| 1   | captured | 2        | 129.9 ms        | 0.4 ms            | 25 ms             | 0 MB             | 12 ms            | 3196 ms  | 344.7 MB     | 6293 ms          | 127/127         | 0    |
| 2   | captured | 2        | 126.1 ms        | 0.4 ms            | 0 ms              | 0 MB             | 0 ms             | 3088 ms  | 335.2 MB     | 6127 ms          | 123/123         | 0    |
