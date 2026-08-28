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
| p50WallMs                      | 96      |
| p95WallMs                      | 100     |
| p50PluginWallDeltaMs           | 24      |
| p95PluginWallDeltaMs           | 28      |
| maxPluginPeakRssDeltaMb        | 2.6 MB  |
| maxPluginCpuDeltaMsEstimate    | 6 ms    |
| maxPeakRssMb                   | 59.9 MB |
| maxCpuMsEstimate               | 6 ms    |
| baselineReferenceWallMs        | 72 ms   |
| baselineReferencePeakRssMb     | 57.3 MB |
| baselineReferenceCpuMsEstimate | 0 ms    |
| statSampleCount                | 10      |
| rssSampleCount                 | 10      |
| cpuSampleCount                 | 10      |
| capturedCount                  | 3       |
| failCount                      | 0       |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 72 ms                                    |
| referencePeakRssMb     | 57.3 MB                                  |
| referenceCpuMsEstimate | 0 ms                                     |
| maxWallMs              | 76 ms                                    |
| maxPeakRssMb           | 57.6 MB                                  |
| maxCpuMsEstimate       | 3 ms                                     |
| statSampleCount        | 9                                        |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 1        | n/a             | n/a               | 6 ms              | 0 MB             | 0 ms             | 78 ms    | 56.3 MB      | 0 ms             | 3/3             | 0    |
| 1   | captured | 1        | n/a             | n/a               | 24 ms             | 0 MB             | 4 ms             | 96 ms    | 52.2 MB      | 4 ms             | 3/3             | 0    |
| 2   | captured | 1        | n/a             | n/a               | 28 ms             | 2.6 MB           | 6 ms             | 100 ms   | 59.9 MB      | 6 ms             | 4/4             | 0    |
