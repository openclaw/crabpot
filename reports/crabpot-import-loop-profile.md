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
| p95WallMs                      | 72      |
| p50PluginWallDeltaMs           | 0       |
| p95PluginWallDeltaMs           | 0       |
| maxPluginPeakRssDeltaMb        | 0.3 MB  |
| maxPluginCpuDeltaMsEstimate    | 14 ms   |
| maxPeakRssMb                   | 58.1 MB |
| maxCpuMsEstimate               | 65 ms   |
| baselineReferenceWallMs        | 73 ms   |
| baselineReferencePeakRssMb     | 57.8 MB |
| baselineReferenceCpuMsEstimate | 51 ms   |
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
| referenceWallMs        | 73 ms                                    |
| referencePeakRssMb     | 57.8 MB                                  |
| referenceCpuMsEstimate | 51 ms                                    |
| maxWallMs              | 76 ms                                    |
| maxPeakRssMb           | 58 MB                                    |
| maxCpuMsEstimate       | 66 ms                                    |
| statSampleCount        | 9                                        |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 1        | n/a             | n/a               | 0 ms              | 0.3 MB           | 0 ms             | 71 ms    | 58.1 MB      | 47 ms            | 3/3             | 0    |
| 1   | captured | 1        | n/a             | n/a               | 0 ms              | 0 MB             | 0 ms             | 72 ms    | 57.2 MB      | 45 ms            | 3/3             | 0    |
| 2   | captured | 1        | n/a             | n/a               | 0 ms              | 0.3 MB           | 14 ms            | 72 ms    | 58.1 MB      | 65 ms            | 3/3             | 0    |
