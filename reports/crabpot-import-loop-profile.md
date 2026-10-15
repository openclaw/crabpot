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
| p50WallMs                      | 4309     |
| p95WallMs                      | 4318     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 2        |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 110.2 ms |
| p95OpenClawImportMs            | 112.1 ms |
| p50OpenClawActivationMs        | 1.3 ms   |
| p95OpenClawActivationMs        | 1.6 ms   |
| maxPeakRssMb                   | 529.4 MB |
| maxCpuMsEstimate               | 5940 ms  |
| baselineReferenceWallMs        | 4316 ms  |
| baselineReferencePeakRssMb     | 530.1 MB |
| baselineReferenceCpuMsEstimate | 5975 ms  |
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
| referenceWallMs        | 4316 ms                                  |
| referencePeakRssMb     | 530.1 MB                                 |
| referenceCpuMsEstimate | 5975 ms                                  |
| maxWallMs              | 9639 ms                                  |
| maxPeakRssMb           | 741.6 MB                                 |
| maxCpuMsEstimate       | 8950 ms                                  |
| statSampleCount        | 726                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 112.1 ms        | 1.6 ms            | 0 ms              | 0 MB             | 0 ms             | 4309 ms  | 528.8 MB     | 5929 ms          | 171/171         | 0    |
| 1   | captured | 2        | 110.2 ms        | 1.3 ms            | 0 ms              | 0 MB             | 0 ms             | 4309 ms  | 529.4 MB     | 5939 ms          | 171/171         | 0    |
| 2   | captured | 2        | 109.1 ms        | 1.3 ms            | 2 ms              | 0 MB             | 0 ms             | 4318 ms  | 529.3 MB     | 5940 ms          | 172/172         | 0    |
