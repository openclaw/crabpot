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
| p50WallMs                      | 76      |
| p95WallMs                      | 77      |
| p50PluginWallDeltaMs           | 0       |
| p95PluginWallDeltaMs           | 0       |
| maxPluginPeakRssDeltaMb        | 0.8 MB  |
| maxPluginCpuDeltaMsEstimate    | 7 ms    |
| maxPeakRssMb                   | 60.1 MB |
| maxCpuMsEstimate               | 51 ms   |
| baselineReferenceWallMs        | 77 ms   |
| baselineReferencePeakRssMb     | 59.3 MB |
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
| referenceWallMs        | 77 ms                                    |
| referencePeakRssMb     | 59.3 MB                                  |
| referenceCpuMsEstimate | 44 ms                                    |
| maxWallMs              | 79 ms                                    |
| maxPeakRssMb           | 59.7 MB                                  |
| maxCpuMsEstimate       | 51 ms                                    |
| statSampleCount        | 9                                        |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 1        | n/a             | n/a               | 0 ms              | 0.3 MB           | 0 ms             | 77 ms    | 59.6 MB      | 43 ms            | 3/3             | 0    |
| 1   | captured | 1        | n/a             | n/a               | 0 ms              | 0.7 MB           | 7 ms             | 76 ms    | 60 MB        | 51 ms            | 3/3             | 0    |
| 2   | captured | 1        | n/a             | n/a               | 0 ms              | 0.8 MB           | 0 ms             | 75 ms    | 60.1 MB      | 37 ms            | 3/3             | 0    |
