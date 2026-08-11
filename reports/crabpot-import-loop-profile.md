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
| p50WallMs                      | 110     |
| p95WallMs                      | 121     |
| p50PluginWallDeltaMs           | 0       |
| p95PluginWallDeltaMs           | 10      |
| maxPluginPeakRssDeltaMb        | 0 MB    |
| maxPluginCpuDeltaMsEstimate    | 17 ms   |
| maxPeakRssMb                   | 61.8 MB |
| maxCpuMsEstimate               | 99 ms   |
| baselineReferenceWallMs        | 111 ms  |
| baselineReferencePeakRssMb     | 61.9 MB |
| baselineReferenceCpuMsEstimate | 82 ms   |
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
| referenceWallMs        | 111 ms                                   |
| referencePeakRssMb     | 61.9 MB                                  |
| referenceCpuMsEstimate | 82 ms                                    |
| maxWallMs              | 126 ms                                   |
| maxPeakRssMb           | 62.8 MB                                  |
| maxCpuMsEstimate       | 87 ms                                    |
| statSampleCount        | 12                                       |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 1        | n/a             | n/a               | 10 ms             | 0 MB             | 17 ms            | 121 ms   | 61 MB        | 99 ms            | 4/4             | 0    |
| 1   | captured | 1        | n/a             | n/a               | 0 ms              | 0 MB             | 1 ms             | 110 ms   | 61.8 MB      | 83 ms            | 4/4             | 0    |
| 2   | captured | 1        | n/a             | n/a               | 0 ms              | 0 MB             | 0 ms             | 109 ms   | 61.6 MB      | 77 ms            | 4/4             | 0    |
