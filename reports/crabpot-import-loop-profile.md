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
| p50WallMs                      | 1987     |
| p95WallMs                      | 1989     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 27 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 91 ms    |
| p95OpenClawImportMs            | 91.1 ms  |
| p50OpenClawActivationMs        | 0.2 ms   |
| p95OpenClawActivationMs        | 0.3 ms   |
| maxPeakRssMb                   | 318.6 MB |
| maxCpuMsEstimate               | 4036 ms  |
| baselineReferenceWallMs        | 1993 ms  |
| baselineReferencePeakRssMb     | 319.4 MB |
| baselineReferenceCpuMsEstimate | 4009 ms  |
| statSampleCount                | 236      |
| rssSampleCount                 | 236      |
| cpuSampleCount                 | 236      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 1993 ms                                  |
| referencePeakRssMb     | 319.4 MB                                 |
| referenceCpuMsEstimate | 4009 ms                                  |
| maxWallMs              | 2877 ms                                  |
| maxPeakRssMb           | 322.8 MB                                 |
| maxCpuMsEstimate       | 5198 ms                                  |
| statSampleCount        | 271                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 91.1 ms         | 0.2 ms            | 0 ms              | 0 MB             | 0 ms             | 1987 ms  | 306.8 MB     | 3988 ms          | 79/79           | 0    |
| 1   | captured | 2        | 88.4 ms         | 0.2 ms            | 0 ms              | 0 MB             | 0 ms             | 1966 ms  | 310.2 MB     | 3936 ms          | 78/78           | 0    |
| 2   | captured | 2        | 91 ms           | 0.3 ms            | 0 ms              | 0 MB             | 27 ms            | 1989 ms  | 318.6 MB     | 4036 ms          | 79/79           | 0    |
