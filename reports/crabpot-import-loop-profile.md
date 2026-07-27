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
| p50WallMs                      | 1247     |
| p95WallMs                      | 1264     |
| p50PluginWallDeltaMs           | 26       |
| p95PluginWallDeltaMs           | 43       |
| maxPluginPeakRssDeltaMb        | 0.8 MB   |
| maxPluginCpuDeltaMsEstimate    | 35 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 61.9 ms  |
| p95OpenClawImportMs            | 64.3 ms  |
| p50OpenClawActivationMs        | 0.1 ms   |
| p95OpenClawActivationMs        | 0.1 ms   |
| maxPeakRssMb                   | 373.1 MB |
| maxCpuMsEstimate               | 1196 ms  |
| baselineReferenceWallMs        | 1221 ms  |
| baselineReferencePeakRssMb     | 372.3 MB |
| baselineReferenceCpuMsEstimate | 1161 ms  |
| statSampleCount                | 141      |
| rssSampleCount                 | 141      |
| cpuSampleCount                 | 141      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 1221 ms                                  |
| referencePeakRssMb     | 372.3 MB                                 |
| referenceCpuMsEstimate | 1161 ms                                  |
| maxWallMs              | 2033 ms                                  |
| maxPeakRssMb           | 373.5 MB                                 |
| maxCpuMsEstimate       | 1431 ms                                  |
| statSampleCount        | 169                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 64.3 ms         | 0.1 ms            | 12 ms             | 0.6 MB           | 8 ms             | 1233 ms  | 372.9 MB     | 1169 ms          | 46/46           | 0    |
| 1   | captured | 2        | 61.6 ms         | 0.1 ms            | 43 ms             | 0 MB             | 3 ms             | 1264 ms  | 369.7 MB     | 1164 ms          | 48/48           | 0    |
| 2   | captured | 2        | 61.9 ms         | 0.1 ms            | 26 ms             | 0.8 MB           | 35 ms            | 1247 ms  | 373.1 MB     | 1196 ms          | 47/47           | 0    |
