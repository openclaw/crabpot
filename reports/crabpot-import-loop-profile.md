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
| p50WallMs                      | 2992     |
| p95WallMs                      | 2998     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 3.2 MB   |
| maxPluginCpuDeltaMsEstimate    | 11 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 60.3 ms  |
| p95OpenClawImportMs            | 60.4 ms  |
| p50OpenClawActivationMs        | 0.5 ms   |
| p95OpenClawActivationMs        | 0.7 ms   |
| maxPeakRssMb                   | 425.5 MB |
| maxCpuMsEstimate               | 4083 ms  |
| baselineReferenceWallMs        | 3010 ms  |
| baselineReferencePeakRssMb     | 422.3 MB |
| baselineReferenceCpuMsEstimate | 4072 ms  |
| statSampleCount                | 357      |
| rssSampleCount                 | 357      |
| cpuSampleCount                 | 357      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 3010 ms                                  |
| referencePeakRssMb     | 422.3 MB                                 |
| referenceCpuMsEstimate | 4072 ms                                  |
| maxWallMs              | 6872 ms                                  |
| maxPeakRssMb           | 574.5 MB                                 |
| maxCpuMsEstimate       | 6344 ms                                  |
| statSampleCount        | 510                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 60.3 ms         | 0.7 ms            | 0 ms              | 0.3 MB           | 0 ms             | 2983 ms  | 422.6 MB     | 4034 ms          | 119/119         | 0    |
| 1   | captured | 2        | 60.4 ms         | 0.5 ms            | 0 ms              | 2.2 MB           | 11 ms            | 2992 ms  | 424.5 MB     | 4083 ms          | 119/119         | 0    |
| 2   | captured | 2        | 58.9 ms         | 0.5 ms            | 0 ms              | 3.2 MB           | 0 ms             | 2998 ms  | 425.5 MB     | 4052 ms          | 119/119         | 0    |
