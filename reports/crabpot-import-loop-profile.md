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
| p50WallMs                      | 104     |
| p95WallMs                      | 105     |
| p50PluginWallDeltaMs           | 0       |
| p95PluginWallDeltaMs           | 0       |
| maxPluginPeakRssDeltaMb        | 0.5 MB  |
| maxPluginCpuDeltaMsEstimate    | 0 ms    |
| maxPeakRssMb                   | 63 MB   |
| maxCpuMsEstimate               | 80 ms   |
| baselineReferenceWallMs        | 109 ms  |
| baselineReferencePeakRssMb     | 62.5 MB |
| baselineReferenceCpuMsEstimate | 81 ms   |
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
| referenceWallMs        | 109 ms                                   |
| referencePeakRssMb     | 62.5 MB                                  |
| referenceCpuMsEstimate | 81 ms                                    |
| maxWallMs              | 121 ms                                   |
| maxPeakRssMb           | 63.2 MB                                  |
| maxCpuMsEstimate       | 87 ms                                    |
| statSampleCount        | 12                                       |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 1        | n/a             | n/a               | 0 ms              | 0.2 MB           | 0 ms             | 105 ms   | 62.7 MB      | 79 ms            | 4/4             | 0    |
| 1   | captured | 1        | n/a             | n/a               | 0 ms              | 0.4 MB           | 0 ms             | 104 ms   | 62.9 MB      | 78 ms            | 4/4             | 0    |
| 2   | captured | 1        | n/a             | n/a               | 0 ms              | 0.5 MB           | 0 ms             | 103 ms   | 63 MB        | 80 ms            | 4/4             | 0    |
