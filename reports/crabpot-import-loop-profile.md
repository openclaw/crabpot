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
| p50WallMs                      | 80      |
| p95WallMs                      | 80      |
| p50PluginWallDeltaMs           | 0       |
| p95PluginWallDeltaMs           | 0       |
| maxPluginPeakRssDeltaMb        | 0 MB    |
| maxPluginCpuDeltaMsEstimate    | 15 ms   |
| maxPeakRssMb                   | 57.7 MB |
| maxCpuMsEstimate               | 59 ms   |
| baselineReferenceWallMs        | 81 ms   |
| baselineReferencePeakRssMb     | 57.7 MB |
| baselineReferenceCpuMsEstimate | 44 ms   |
| statSampleCount                | 9       |
| rssSampleCount                 | 9       |
| cpuSampleCount                 | 9       |
| capturedCount                  | 3       |
| failCount                      | 0       |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 81 ms                                    |
| referencePeakRssMb     | 57.7 MB                                  |
| referenceCpuMsEstimate | 44 ms                                    |
| maxWallMs              | 82 ms                                    |
| maxPeakRssMb           | 57.7 MB                                  |
| maxCpuMsEstimate       | 55 ms                                    |
| statSampleCount        | 9                                        |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 1        | n/a             | n/a               | 0 ms              | 0 MB             | 6 ms             | 80 ms    | 57.5 MB      | 50 ms            | 3/3             | 0    |
| 1   | captured | 1        | n/a             | n/a               | 0 ms              | 0 MB             | 6 ms             | 80 ms    | 57.7 MB      | 50 ms            | 3/3             | 0    |
| 2   | captured | 1        | n/a             | n/a               | 0 ms              | 0 MB             | 15 ms            | 80 ms    | 57.6 MB      | 59 ms            | 3/3             | 0    |
