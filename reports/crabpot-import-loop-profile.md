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
| p50WallMs                      | 1611     |
| p95WallMs                      | 1637     |
| p50PluginWallDeltaMs           | 20       |
| p95PluginWallDeltaMs           | 46       |
| maxPluginPeakRssDeltaMb        | 10.7 MB  |
| maxPluginCpuDeltaMsEstimate    | 102 ms   |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 97.2 ms  |
| p95OpenClawImportMs            | 99 ms    |
| p50OpenClawActivationMs        | 0.3 ms   |
| p95OpenClawActivationMs        | 0.3 ms   |
| maxPeakRssMb                   | 290.5 MB |
| maxCpuMsEstimate               | 2961 ms  |
| baselineReferenceWallMs        | 1591 ms  |
| baselineReferencePeakRssMb     | 279.8 MB |
| baselineReferenceCpuMsEstimate | 2859 ms  |
| statSampleCount                | 189      |
| rssSampleCount                 | 189      |
| cpuSampleCount                 | 189      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 1591 ms                                  |
| referencePeakRssMb     | 279.8 MB                                 |
| referenceCpuMsEstimate | 2859 ms                                  |
| maxWallMs              | 2169 ms                                  |
| maxPeakRssMb           | 288.2 MB                                 |
| maxCpuMsEstimate       | 3700 ms                                  |
| statSampleCount        | 209                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 99 ms           | 0.2 ms            | 46 ms             | 5.1 MB           | 102 ms           | 1637 ms  | 284.9 MB     | 2961 ms          | 65/65           | 0    |
| 1   | captured | 2        | 97.2 ms         | 0.3 ms            | 20 ms             | 10.7 MB          | 14 ms            | 1611 ms  | 290.5 MB     | 2873 ms          | 63/63           | 0    |
| 2   | captured | 2        | 95.5 ms         | 0.3 ms            | 0 ms              | 0 MB             | 0 ms             | 1536 ms  | 276.5 MB     | 2811 ms          | 61/61           | 0    |
