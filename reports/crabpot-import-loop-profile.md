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
| p50WallMs                      | 129     |
| p95WallMs                      | 132     |
| p50PluginWallDeltaMs           | 0       |
| p95PluginWallDeltaMs           | 0       |
| maxPluginPeakRssDeltaMb        | 2.8 MB  |
| maxPluginCpuDeltaMsEstimate    | 0 ms    |
| maxPeakRssMb                   | 79.2 MB |
| maxCpuMsEstimate               | 93 ms   |
| baselineReferenceWallMs        | 139 ms  |
| baselineReferencePeakRssMb     | 76.4 MB |
| baselineReferenceCpuMsEstimate | 114 ms  |
| statSampleCount                | 15      |
| rssSampleCount                 | 15      |
| cpuSampleCount                 | 15      |
| capturedCount                  | 3       |
| failCount                      | 0       |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 139 ms                                   |
| referencePeakRssMb     | 76.4 MB                                  |
| referenceCpuMsEstimate | 114 ms                                   |
| maxWallMs              | 170 ms                                   |
| maxPeakRssMb           | 80.1 MB                                  |
| maxCpuMsEstimate       | 154 ms                                   |
| statSampleCount        | 18                                       |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 1        | n/a             | n/a               | 0 ms              | 0 MB             | 0 ms             | 129 ms   | 75.4 MB      | 91 ms            | 5/5             | 0    |
| 1   | captured | 1        | n/a             | n/a               | 0 ms              | 2.2 MB           | 0 ms             | 132 ms   | 78.6 MB      | 89 ms            | 5/5             | 0    |
| 2   | captured | 1        | n/a             | n/a               | 0 ms              | 2.8 MB           | 0 ms             | 125 ms   | 79.2 MB      | 93 ms            | 5/5             | 0    |
