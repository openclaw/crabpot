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
| p50WallMs                      | 4434     |
| p95WallMs                      | 4507     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 27       |
| maxPluginPeakRssDeltaMb        | 1.5 MB   |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 117 ms   |
| p95OpenClawImportMs            | 117.5 ms |
| p50OpenClawActivationMs        | 1.3 ms   |
| p95OpenClawActivationMs        | 1.3 ms   |
| maxPeakRssMb                   | 530.7 MB |
| maxCpuMsEstimate               | 6220 ms  |
| baselineReferenceWallMs        | 4480 ms  |
| baselineReferencePeakRssMb     | 529.2 MB |
| baselineReferenceCpuMsEstimate | 6244 ms  |
| statSampleCount                | 530      |
| rssSampleCount                 | 530      |
| cpuSampleCount                 | 530      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 4480 ms                                  |
| referencePeakRssMb     | 529.2 MB                                 |
| referenceCpuMsEstimate | 6244 ms                                  |
| maxWallMs              | 10499 ms                                 |
| maxPeakRssMb           | 735.4 MB                                 |
| maxCpuMsEstimate       | 9790 ms                                  |
| statSampleCount        | 771                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 115.6 ms        | 1.3 ms            | 0 ms              | 0 MB             | 0 ms             | 4400 ms  | 525.8 MB     | 6184 ms          | 175/175         | 0    |
| 1   | captured | 2        | 117.5 ms        | 1.3 ms            | 0 ms              | 0 MB             | 0 ms             | 4434 ms  | 528.4 MB     | 6159 ms          | 176/176         | 0    |
| 2   | captured | 2        | 117 ms          | 1.3 ms            | 27 ms             | 1.5 MB           | 0 ms             | 4507 ms  | 530.7 MB     | 6220 ms          | 179/179         | 0    |
