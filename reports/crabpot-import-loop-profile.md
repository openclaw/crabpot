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
| p50WallMs                      | 4273     |
| p95WallMs                      | 4301     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 1.3 MB   |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 115 ms   |
| p95OpenClawImportMs            | 115.6 ms |
| p50OpenClawActivationMs        | 1.4 ms   |
| p95OpenClawActivationMs        | 1.4 ms   |
| maxPeakRssMb                   | 529.2 MB |
| maxCpuMsEstimate               | 6039 ms  |
| baselineReferenceWallMs        | 4387 ms  |
| baselineReferencePeakRssMb     | 527.9 MB |
| baselineReferenceCpuMsEstimate | 6094 ms  |
| statSampleCount                | 508      |
| rssSampleCount                 | 508      |
| cpuSampleCount                 | 508      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 4387 ms                                  |
| referencePeakRssMb     | 527.9 MB                                 |
| referenceCpuMsEstimate | 6094 ms                                  |
| maxWallMs              | 9846 ms                                  |
| maxPeakRssMb           | 724.9 MB                                 |
| maxCpuMsEstimate       | 9038 ms                                  |
| statSampleCount        | 732                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 113.1 ms        | 1.4 ms            | 0 ms              | 1.3 MB           | 0 ms             | 4301 ms  | 529.2 MB     | 6039 ms          | 171/171         | 0    |
| 1   | captured | 2        | 115.6 ms        | 1.4 ms            | 0 ms              | 0.4 MB           | 0 ms             | 4273 ms  | 528.3 MB     | 5933 ms          | 169/169         | 0    |
| 2   | captured | 2        | 115 ms          | 1.3 ms            | 0 ms              | 0 MB             | 0 ms             | 4241 ms  | 518.9 MB     | 5889 ms          | 168/168         | 0    |
