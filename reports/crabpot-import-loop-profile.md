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
| p50WallMs                      | 4346     |
| p95WallMs                      | 4371     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 2.8 MB   |
| maxPluginCpuDeltaMsEstimate    | 16 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 107.5 ms |
| p95OpenClawImportMs            | 108.1 ms |
| p50OpenClawActivationMs        | 1.3 ms   |
| p95OpenClawActivationMs        | 1.5 ms   |
| maxPeakRssMb                   | 530.6 MB |
| maxCpuMsEstimate               | 6056 ms  |
| baselineReferenceWallMs        | 4372 ms  |
| baselineReferencePeakRssMb     | 527.8 MB |
| baselineReferenceCpuMsEstimate | 6040 ms  |
| statSampleCount                | 519      |
| rssSampleCount                 | 519      |
| cpuSampleCount                 | 519      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 4372 ms                                  |
| referencePeakRssMb     | 527.8 MB                                 |
| referenceCpuMsEstimate | 6040 ms                                  |
| maxWallMs              | 9786 ms                                  |
| maxPeakRssMb           | 723.2 MB                                 |
| maxCpuMsEstimate       | 9211 ms                                  |
| statSampleCount        | 731                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 107.5 ms        | 1.3 ms            | 0 ms              | 0 MB             | 16 ms            | 4371 ms  | 527.7 MB     | 6056 ms          | 174/174         | 0    |
| 1   | captured | 2        | 104.3 ms        | 1.3 ms            | 0 ms              | 2.8 MB           | 0 ms             | 4331 ms  | 530.6 MB     | 5942 ms          | 172/172         | 0    |
| 2   | captured | 2        | 108.1 ms        | 1.5 ms            | 0 ms              | 1.6 MB           | 0 ms             | 4346 ms  | 529.4 MB     | 6038 ms          | 173/173         | 0    |
