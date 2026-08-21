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
| p50WallMs                      | 95      |
| p95WallMs                      | 103     |
| p50PluginWallDeltaMs           | 0       |
| p95PluginWallDeltaMs           | 8       |
| maxPluginPeakRssDeltaMb        | 0 MB    |
| maxPluginCpuDeltaMsEstimate    | 8 ms    |
| maxPeakRssMb                   | 62.9 MB |
| maxCpuMsEstimate               | 71 ms   |
| baselineReferenceWallMs        | 95 ms   |
| baselineReferencePeakRssMb     | 62.9 MB |
| baselineReferenceCpuMsEstimate | 63 ms   |
| statSampleCount                | 12      |
| rssSampleCount                 | 12      |
| cpuSampleCount                 | 12      |
| capturedCount                  | 3       |
| failCount                      | 0       |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 95 ms                                    |
| referencePeakRssMb     | 62.9 MB                                  |
| referenceCpuMsEstimate | 63 ms                                    |
| maxWallMs              | 96 ms                                    |
| maxPeakRssMb           | 62.9 MB                                  |
| maxCpuMsEstimate       | 66 ms                                    |
| statSampleCount        | 12                                       |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 1        | n/a             | n/a               | 8 ms              | 0 MB             | 6 ms             | 103 ms   | 60.8 MB      | 69 ms            | 4/4             | 0    |
| 1   | captured | 1        | n/a             | n/a               | 0 ms              | 0 MB             | 0 ms             | 95 ms    | 62.7 MB      | 62 ms            | 4/4             | 0    |
| 2   | captured | 1        | n/a             | n/a               | 0 ms              | 0 MB             | 8 ms             | 95 ms    | 62.9 MB      | 71 ms            | 4/4             | 0    |
