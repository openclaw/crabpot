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
| p50WallMs                      | 3146     |
| p95WallMs                      | 4082     |
| p50PluginWallDeltaMs           | 51       |
| p95PluginWallDeltaMs           | 987      |
| maxPluginPeakRssDeltaMb        | 0 MB     |
| maxPluginCpuDeltaMsEstimate    | 1453 ms  |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 67.5 ms  |
| p95OpenClawImportMs            | 70 ms    |
| p50OpenClawActivationMs        | 0.6 ms   |
| p95OpenClawActivationMs        | 0.6 ms   |
| maxPeakRssMb                   | 421.8 MB |
| maxCpuMsEstimate               | 5631 ms  |
| baselineReferenceWallMs        | 3095 ms  |
| baselineReferencePeakRssMb     | 421.8 MB |
| baselineReferenceCpuMsEstimate | 4178 ms  |
| statSampleCount                | 368      |
| rssSampleCount                 | 368      |
| cpuSampleCount                 | 368      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 3095 ms                                  |
| referencePeakRssMb     | 421.8 MB                                 |
| referenceCpuMsEstimate | 4178 ms                                  |
| maxWallMs              | 7036 ms                                  |
| maxPeakRssMb           | 575.8 MB                                 |
| maxCpuMsEstimate       | 6588 ms                                  |
| statSampleCount        | 524                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 70 ms           | 0.5 ms            | 987 ms            | 0 MB             | 1453 ms          | 4082 ms  | 418.9 MB     | 5631 ms          | 122/122         | 0    |
| 1   | captured | 2        | 61.9 ms         | 0.6 ms            | 51 ms             | 0 MB             | 77 ms            | 3146 ms  | 421.8 MB     | 4255 ms          | 125/125         | 0    |
| 2   | captured | 2        | 67.5 ms         | 0.6 ms            | 0 ms              | 0 MB             | 22 ms            | 3053 ms  | 421.6 MB     | 4200 ms          | 121/121         | 0    |
