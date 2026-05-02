# Crabpot Import Loop Profile

Generated: deterministic
Mode: baseline-adjusted-cold-capture-loop
Entrypoint: test/fixtures/lazy-import-plugin.mjs

## Summary

| Metric                         | Value   |
| ------------------------------ | ------- |
| runs                           | 3       |
| baselineRuns                   | 3       |
| baselineFailCount              | 0       |
| p50WallMs                      | 271     |
| p95WallMs                      | 357     |
| p50PluginWallDeltaMs           | 0       |
| p95PluginWallDeltaMs           | 64      |
| maxPluginPeakRssDeltaMb        | 1.5 MB  |
| maxPluginCpuDeltaMsEstimate    | 38 ms   |
| maxPeakRssMb                   | 52.8 MB |
| maxCpuMsEstimate               | 76 ms   |
| baselineReferenceWallMs        | 293 ms  |
| baselineReferencePeakRssMb     | 51.3 MB |
| baselineReferenceCpuMsEstimate | 38 ms   |
| statSampleCount                | 28      |
| rssSampleCount                 | 28      |
| cpuSampleCount                 | 28      |
| capturedCount                  | 3       |
| failCount                      | 0       |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 293 ms                                   |
| referencePeakRssMb     | 51.3 MB                                  |
| referenceCpuMsEstimate | 38 ms                                    |
| maxWallMs              | 553 ms                                   |
| maxPeakRssMb           | 52.4 MB                                  |
| maxCpuMsEstimate       | 100 ms                                   |
| statSampleCount        | 24                                       |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 1        | n/a             | n/a               | 64 ms             | 1.5 MB           | 38 ms            | 357 ms   | 52.8 MB      | 76 ms            | 13/13           | 0    |
| 1   | captured | 1        | n/a             | n/a               | 0 ms              | 0.1 MB           | 0 ms             | 202 ms   | 51.4 MB      | 23 ms            | 6/6             | 0    |
| 2   | captured | 1        | n/a             | n/a               | 0 ms              | 0 MB             | 0 ms             | 271 ms   | 51.2 MB      | 35 ms            | 9/9             | 0    |
