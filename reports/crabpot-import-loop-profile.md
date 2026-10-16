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
| p50WallMs                      | 149     |
| p95WallMs                      | 153     |
| p50PluginWallDeltaMs           | 0       |
| p95PluginWallDeltaMs           | 2       |
| maxPluginPeakRssDeltaMb        | 0.5 MB  |
| maxPluginCpuDeltaMsEstimate    | 0 ms    |
| maxPeakRssMb                   | 76.3 MB |
| maxCpuMsEstimate               | 116 ms  |
| baselineReferenceWallMs        | 151 ms  |
| baselineReferencePeakRssMb     | 75.8 MB |
| baselineReferenceCpuMsEstimate | 124 ms  |
| statSampleCount                | 18      |
| rssSampleCount                 | 18      |
| cpuSampleCount                 | 18      |
| capturedCount                  | 3       |
| failCount                      | 0       |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 151 ms                                   |
| referencePeakRssMb     | 75.8 MB                                  |
| referenceCpuMsEstimate | 124 ms                                   |
| maxWallMs              | 159 ms                                   |
| maxPeakRssMb           | 76.2 MB                                  |
| maxCpuMsEstimate       | 127 ms                                   |
| statSampleCount        | 19                                       |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 1        | n/a             | n/a               | 0 ms              | 0.5 MB           | 0 ms             | 143 ms   | 76.3 MB      | 110 ms           | 6/6             | 0    |
| 1   | captured | 1        | n/a             | n/a               | 0 ms              | 0 MB             | 0 ms             | 149 ms   | 75.7 MB      | 105 ms           | 6/6             | 0    |
| 2   | captured | 1        | n/a             | n/a               | 2 ms              | 0.1 MB           | 0 ms             | 153 ms   | 75.9 MB      | 116 ms           | 6/6             | 0    |
