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
| p50WallMs                      | 78      |
| p95WallMs                      | 78      |
| p50PluginWallDeltaMs           | 0       |
| p95PluginWallDeltaMs           | 0       |
| maxPluginPeakRssDeltaMb        | 0.1 MB  |
| maxPluginCpuDeltaMsEstimate    | 8 ms    |
| maxPeakRssMb                   | 57.8 MB |
| maxCpuMsEstimate               | 57 ms   |
| baselineReferenceWallMs        | 79 ms   |
| baselineReferencePeakRssMb     | 57.7 MB |
| baselineReferenceCpuMsEstimate | 49 ms   |
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
| referenceWallMs        | 79 ms                                    |
| referencePeakRssMb     | 57.7 MB                                  |
| referenceCpuMsEstimate | 49 ms                                    |
| maxWallMs              | 93 ms                                    |
| maxPeakRssMb           | 57.7 MB                                  |
| maxCpuMsEstimate       | 68 ms                                    |
| statSampleCount        | 9                                        |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 1        | n/a             | n/a               | 0 ms              | 0.1 MB           | 3 ms             | 78 ms    | 57.8 MB      | 52 ms            | 3/3             | 0    |
| 1   | captured | 1        | n/a             | n/a               | 0 ms              | 0 MB             | 8 ms             | 78 ms    | 57.7 MB      | 57 ms            | 3/3             | 0    |
| 2   | captured | 1        | n/a             | n/a               | 0 ms              | 0 MB             | 0 ms             | 78 ms    | 57.7 MB      | 49 ms            | 3/3             | 0    |
