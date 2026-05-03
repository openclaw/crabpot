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
| p50WallMs                      | 88      |
| p95WallMs                      | 96      |
| p50PluginWallDeltaMs           | 0       |
| p95PluginWallDeltaMs           | 0       |
| maxPluginPeakRssDeltaMb        | 1.4 MB  |
| maxPluginCpuDeltaMsEstimate    | 0 ms    |
| maxPeakRssMb                   | 52.8 MB |
| maxCpuMsEstimate               | 6 ms    |
| baselineReferenceWallMs        | 115 ms  |
| baselineReferencePeakRssMb     | 51.4 MB |
| baselineReferenceCpuMsEstimate | 6 ms    |
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
| referenceWallMs        | 115 ms                                   |
| referencePeakRssMb     | 51.4 MB                                  |
| referenceCpuMsEstimate | 6 ms                                     |
| maxWallMs              | 160 ms                                   |
| maxPeakRssMb           | 52.4 MB                                  |
| maxCpuMsEstimate       | 14 ms                                    |
| statSampleCount        | 14                                       |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 1        | n/a             | n/a               | 0 ms              | 0 MB             | 0 ms             | 77 ms    | 48.2 MB      | 0 ms             | 3/3             | 0    |
| 1   | captured | 1        | n/a             | n/a               | 0 ms              | 0 MB             | 0 ms             | 88 ms    | 48.1 MB      | 0 ms             | 3/3             | 0    |
| 2   | captured | 1        | n/a             | n/a               | 0 ms              | 1.4 MB           | 0 ms             | 96 ms    | 52.8 MB      | 6 ms             | 4/4             | 0    |
