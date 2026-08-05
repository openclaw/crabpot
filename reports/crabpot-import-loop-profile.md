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
| p50WallMs                      | 118     |
| p95WallMs                      | 118     |
| p50PluginWallDeltaMs           | 0       |
| p95PluginWallDeltaMs           | 0       |
| maxPluginPeakRssDeltaMb        | 0.1 MB  |
| maxPluginCpuDeltaMsEstimate    | 9 ms    |
| maxPeakRssMb                   | 61.8 MB |
| maxCpuMsEstimate               | 94 ms   |
| baselineReferenceWallMs        | 118 ms  |
| baselineReferencePeakRssMb     | 61.7 MB |
| baselineReferenceCpuMsEstimate | 85 ms   |
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
| referenceWallMs        | 118 ms                                   |
| referencePeakRssMb     | 61.7 MB                                  |
| referenceCpuMsEstimate | 85 ms                                    |
| maxWallMs              | 119 ms                                   |
| maxPeakRssMb           | 61.9 MB                                  |
| maxCpuMsEstimate       | 95 ms                                    |
| statSampleCount        | 12                                       |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 1        | n/a             | n/a               | 0 ms              | 0 MB             | 9 ms             | 118 ms   | 61.3 MB      | 94 ms            | 4/4             | 0    |
| 1   | captured | 1        | n/a             | n/a               | 0 ms              | 0 MB             | 3 ms             | 118 ms   | 61.4 MB      | 88 ms            | 4/4             | 0    |
| 2   | captured | 1        | n/a             | n/a               | 0 ms              | 0.1 MB           | 0 ms             | 107 ms   | 61.8 MB      | 75 ms            | 4/4             | 0    |
