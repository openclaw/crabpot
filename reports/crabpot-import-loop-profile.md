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
| p50WallMs                      | 73      |
| p95WallMs                      | 77      |
| p50PluginWallDeltaMs           | 0       |
| p95PluginWallDeltaMs           | 2       |
| maxPluginPeakRssDeltaMb        | 0.1 MB  |
| maxPluginCpuDeltaMsEstimate    | 4 ms    |
| maxPeakRssMb                   | 58.1 MB |
| maxCpuMsEstimate               | 51 ms   |
| baselineReferenceWallMs        | 75 ms   |
| baselineReferencePeakRssMb     | 58 MB   |
| baselineReferenceCpuMsEstimate | 47 ms   |
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
| referenceWallMs        | 75 ms                                    |
| referencePeakRssMb     | 58 MB                                    |
| referenceCpuMsEstimate | 47 ms                                    |
| maxWallMs              | 76 ms                                    |
| maxPeakRssMb           | 58.1 MB                                  |
| maxCpuMsEstimate       | 47 ms                                    |
| statSampleCount        | 9                                        |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 1        | n/a             | n/a               | 0 ms              | 0 MB             | 0 ms             | 73 ms    | 58 MB        | 36 ms            | 3/3             | 0    |
| 1   | captured | 1        | n/a             | n/a               | 0 ms              | 0 MB             | 0 ms             | 72 ms    | 56.9 MB      | 45 ms            | 3/3             | 0    |
| 2   | captured | 1        | n/a             | n/a               | 2 ms              | 0.1 MB           | 4 ms             | 77 ms    | 58.1 MB      | 51 ms            | 3/3             | 0    |
