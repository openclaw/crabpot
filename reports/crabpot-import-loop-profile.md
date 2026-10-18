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
| p50WallMs                      | 4039     |
| p95WallMs                      | 4063     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 1.2 MB   |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 105.5 ms |
| p95OpenClawImportMs            | 108.8 ms |
| p50OpenClawActivationMs        | 1.1 ms   |
| p95OpenClawActivationMs        | 1.3 ms   |
| maxPeakRssMb                   | 530.3 MB |
| maxCpuMsEstimate               | 5703 ms  |
| baselineReferenceWallMs        | 4094 ms  |
| baselineReferencePeakRssMb     | 529.1 MB |
| baselineReferenceCpuMsEstimate | 5796 ms  |
| statSampleCount                | 480      |
| rssSampleCount                 | 480      |
| cpuSampleCount                 | 480      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 4094 ms                                  |
| referencePeakRssMb     | 529.1 MB                                 |
| referenceCpuMsEstimate | 5796 ms                                  |
| maxWallMs              | 9861 ms                                  |
| maxPeakRssMb           | 727.4 MB                                 |
| maxCpuMsEstimate       | 9082 ms                                  |
| statSampleCount        | 716                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 108.8 ms        | 1.1 ms            | 0 ms              | 0 MB             | 0 ms             | 4039 ms  | 528.3 MB     | 5621 ms          | 160/160         | 0    |
| 1   | captured | 2        | 104.5 ms        | 1.1 ms            | 0 ms              | 0 MB             | 0 ms             | 4013 ms  | 529.1 MB     | 5602 ms          | 159/159         | 0    |
| 2   | captured | 2        | 105.5 ms        | 1.3 ms            | 0 ms              | 1.2 MB           | 0 ms             | 4063 ms  | 530.3 MB     | 5703 ms          | 161/161         | 0    |
