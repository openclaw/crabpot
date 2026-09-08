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
| p50WallMs                      | 106     |
| p95WallMs                      | 107     |
| p50PluginWallDeltaMs           | 0       |
| p95PluginWallDeltaMs           | 0       |
| maxPluginPeakRssDeltaMb        | 0.9 MB  |
| maxPluginCpuDeltaMsEstimate    | 0 ms    |
| maxPeakRssMb                   | 62.6 MB |
| maxCpuMsEstimate               | 88 ms   |
| baselineReferenceWallMs        | 112 ms  |
| baselineReferencePeakRssMb     | 61.7 MB |
| baselineReferenceCpuMsEstimate | 89 ms   |
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
| referenceWallMs        | 112 ms                                   |
| referencePeakRssMb     | 61.7 MB                                  |
| referenceCpuMsEstimate | 89 ms                                    |
| maxWallMs              | 118 ms                                   |
| maxPeakRssMb           | 62 MB                                    |
| maxCpuMsEstimate       | 93 ms                                    |
| statSampleCount        | 12                                       |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 1        | n/a             | n/a               | 0 ms              | 0.9 MB           | 0 ms             | 106 ms   | 62.6 MB      | 88 ms            | 4/4             | 0    |
| 1   | captured | 1        | n/a             | n/a               | 0 ms              | 0 MB             | 0 ms             | 107 ms   | 61.5 MB      | 70 ms            | 4/4             | 0    |
| 2   | captured | 1        | n/a             | n/a               | 0 ms              | 0.3 MB           | 0 ms             | 105 ms   | 62 MB        | 74 ms            | 4/4             | 0    |
