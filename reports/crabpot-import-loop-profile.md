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
| p95WallMs                      | 73      |
| p50PluginWallDeltaMs           | 1       |
| p95PluginWallDeltaMs           | 1       |
| maxPluginPeakRssDeltaMb        | 4.1 MB  |
| maxPluginCpuDeltaMsEstimate    | 9 ms    |
| maxPeakRssMb                   | 58.4 MB |
| maxCpuMsEstimate               | 53 ms   |
| baselineReferenceWallMs        | 72 ms   |
| baselineReferencePeakRssMb     | 54.3 MB |
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
| referenceWallMs        | 72 ms                                    |
| referencePeakRssMb     | 54.3 MB                                  |
| referenceCpuMsEstimate | 44 ms                                    |
| maxWallMs              | 73 ms                                    |
| maxPeakRssMb           | 58.1 MB                                  |
| maxCpuMsEstimate       | 54 ms                                    |
| statSampleCount        | 9                                        |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 1        | n/a             | n/a               | 1 ms              | 3.7 MB           | 1 ms             | 73 ms    | 58 MB        | 45 ms            | 3/3             | 0    |
| 1   | captured | 1        | n/a             | n/a               | 1 ms              | 4.1 MB           | 0 ms             | 73 ms    | 58.4 MB      | 41 ms            | 3/3             | 0    |
| 2   | captured | 1        | n/a             | n/a               | 0 ms              | 3.9 MB           | 9 ms             | 72 ms    | 58.2 MB      | 53 ms            | 3/3             | 0    |
