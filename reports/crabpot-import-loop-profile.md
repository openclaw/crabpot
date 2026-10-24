# Crabpot Import Loop Profile

Generated: deterministic
Mode: baseline-adjusted-cold-capture-loop
Entrypoint: test/fixtures/lazy-import-plugin.mjs

## Summary

| Metric                         | Value    |
| ------------------------------ | -------- |
| runs                           | 3        |
| baselineRuns                   | 3        |
| baselineFailCount              | 0        |
| p50WallMs                      | 400      |
| p95WallMs                      | 402      |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 0        |
| maxPluginPeakRssDeltaMb        | 4.4 MB   |
| maxPluginCpuDeltaMsEstimate    | 0 ms     |
| maxPeakRssMb                   | 131.4 MB |
| maxCpuMsEstimate               | 377 ms   |
| baselineReferenceWallMs        | 408 ms   |
| baselineReferencePeakRssMb     | 127 MB   |
| baselineReferenceCpuMsEstimate | 391 ms   |
| statSampleCount                | 48       |
| rssSampleCount                 | 48       |
| cpuSampleCount                 | 48       |
| capturedCount                  | 3        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 408 ms                                   |
| referencePeakRssMb     | 127 MB                                   |
| referenceCpuMsEstimate | 391 ms                                   |
| maxWallMs              | 408 ms                                   |
| maxPeakRssMb           | 130.5 MB                                 |
| maxCpuMsEstimate       | 398 ms                                   |
| statSampleCount        | 48                                       |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 1        | n/a             | n/a               | 0 ms              | 4.1 MB           | 0 ms             | 400 ms   | 131.1 MB     | 377 ms           | 16/16           | 0    |
| 1   | captured | 1        | n/a             | n/a               | 0 ms              | 4.4 MB           | 0 ms             | 399 ms   | 131.4 MB     | 374 ms           | 16/16           | 0    |
| 2   | captured | 1        | n/a             | n/a               | 0 ms              | 4 MB             | 0 ms             | 402 ms   | 131 MB       | 360 ms           | 16/16           | 0    |
