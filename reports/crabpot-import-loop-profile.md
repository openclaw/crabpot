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
| p50WallMs                      | 72      |
| p95WallMs                      | 73      |
| p50PluginWallDeltaMs           | 0       |
| p95PluginWallDeltaMs           | 1       |
| maxPluginPeakRssDeltaMb        | 2.4 MB  |
| maxPluginCpuDeltaMsEstimate    | 0 ms    |
| maxPeakRssMb                   | 58.1 MB |
| maxCpuMsEstimate               | 45 ms   |
| baselineReferenceWallMs        | 72 ms   |
| baselineReferencePeakRssMb     | 55.7 MB |
| baselineReferenceCpuMsEstimate | 45 ms   |
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
| referencePeakRssMb     | 55.7 MB                                  |
| referenceCpuMsEstimate | 45 ms                                    |
| maxWallMs              | 73 ms                                    |
| maxPeakRssMb           | 56.9 MB                                  |
| maxCpuMsEstimate       | 48 ms                                    |
| statSampleCount        | 9                                        |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 1        | n/a             | n/a               | 0 ms              | 0 MB             | 0 ms             | 72 ms    | 54.2 MB      | 45 ms            | 3/3             | 0    |
| 1   | captured | 1        | n/a             | n/a               | 0 ms              | 2.4 MB           | 0 ms             | 71 ms    | 58.1 MB      | 39 ms            | 3/3             | 0    |
| 2   | captured | 1        | n/a             | n/a               | 1 ms              | 2.3 MB           | 0 ms             | 73 ms    | 58 MB        | 45 ms            | 3/3             | 0    |
