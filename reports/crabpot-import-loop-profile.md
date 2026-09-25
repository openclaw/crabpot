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
| p50WallMs                      | 4361     |
| p95WallMs                      | 4382     |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 0.3 MB   |
| maxPluginCpuDeltaMsEstimate    | 57 ms    |
| openClawLifecycleCount         | 3        |
| p50OpenClawImportMs            | 114.3 ms |
| p95OpenClawImportMs            | 115.6 ms |
| p50OpenClawActivationMs        | 1.3 ms   |
| p95OpenClawActivationMs        | 1.3 ms   |
| maxPeakRssMb                   | 529.2 MB |
| maxCpuMsEstimate               | 6146 ms  |
| baselineReferenceWallMs        | 4401 ms  |
| baselineReferencePeakRssMb     | 528.9 MB |
| baselineReferenceCpuMsEstimate | 6089 ms  |
| statSampleCount                | 519      |
| rssSampleCount                 | 519      |
| cpuSampleCount                 | 519      |
| capturedCount                  | 6        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 4401 ms                                  |
| referencePeakRssMb     | 528.9 MB                                 |
| referenceCpuMsEstimate | 6089 ms                                  |
| maxWallMs              | 9877 ms                                  |
| maxPeakRssMb           | 740.7 MB                                 |
| maxCpuMsEstimate       | 9208 ms                                  |
| statSampleCount        | 738                                      |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 2        | 114.3 ms        | 1.3 ms            | 0 ms              | 0 MB             | 57 ms            | 4382 ms  | 525.9 MB     | 6146 ms          | 174/174         | 0    |
| 1   | captured | 2        | 115.6 ms        | 1.3 ms            | 0 ms              | 0 MB             | 0 ms             | 4361 ms  | 528.5 MB     | 6041 ms          | 173/173         | 0    |
| 2   | captured | 2        | 106.5 ms        | 1.3 ms            | 0 ms              | 0.3 MB           | 0 ms             | 4338 ms  | 529.2 MB     | 5997 ms          | 172/172         | 0    |
