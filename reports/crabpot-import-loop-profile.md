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
| p50WallMs                      | 4334     |
| p95WallMs                      | 4345     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 112.4 ms |
| p95OpenClawImportMs            | 116.1 ms |
| p50OpenClawActivationMs        | 1.3 ms   |
| p95OpenClawActivationMs        | 1.4 ms   |
| maxPeakRssMb                   | 529.6 MB |
| maxCpuMsEstimate               | 6021 ms  |
| baselineReferenceWallMs        | 4383 ms  |
| baselineReferencePeakRssMb     | 530.9 MB |
| baselineReferenceCpuMsEstimate | 6047 ms  |
| statSampleCount                | 516      |
| rssSampleCount                 | 516      |
| cpuSampleCount                 | 516      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 4383 ms                                  |
| referencePeakRssMb     | 530.9 MB                                 |
| referenceCpuMsEstimate | 6047 ms                                  |
| maxWallMs              | 9693 ms                                  |
| maxPeakRssMb           | 729.4 MB                                 |
| maxCpuMsEstimate       | 9012 ms                                  |
| statSampleCount        | 732                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 102.8 ms        | 1.3 ms            | 0 ms              | 0 MB             | 0 ms             | 4334 ms  | 529.6 MB     | 5910 ms          | 172/172         | 0    |
| 1   | captured | 2        | 116.1 ms        | 1.2 ms            | 0 ms              | 0 MB             | 0 ms             | 4290 ms  | 508.1 MB     | 5954 ms          | 171/171         | 0    |
| 2   | captured | 2        | 112.4 ms        | 1.4 ms            | 0 ms              | 0 MB             | 0 ms             | 4345 ms  | 525.2 MB     | 6021 ms          | 173/173         | 0    |
