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
| p50WallMs                      | 139     |
| p95WallMs                      | 139     |
| p50PluginWallDeltaMs           | 0       |
| p95PluginWallDeltaMs           | 0       |
| maxPluginPeakRssDeltaMb        | 0 MB    |
| maxPluginCpuDeltaMsEstimate    | 28 ms   |
| maxPeakRssMb                   | 73.1 MB |
| maxCpuMsEstimate               | 139 ms  |
| baselineReferenceWallMs        | 142 ms  |
| baselineReferencePeakRssMb     | 73.1 MB |
| baselineReferenceCpuMsEstimate | 111 ms  |
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
| referenceWallMs        | 142 ms                                   |
| referencePeakRssMb     | 73.1 MB                                  |
| referenceCpuMsEstimate | 111 ms                                   |
| maxWallMs              | 142 ms                                   |
| maxPeakRssMb           | 73.3 MB                                  |
| maxCpuMsEstimate       | 123 ms                                   |
| statSampleCount        | 15                                       |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 1        | n/a             | n/a               | 0 ms              | 0 MB             | 28 ms            | 139 ms   | 72.8 MB      | 139 ms           | 5/5             | 0    |
| 1   | captured | 1        | n/a             | n/a               | 0 ms              | 0 MB             | 0 ms             | 139 ms   | 73.1 MB      | 111 ms           | 5/5             | 0    |
| 2   | captured | 1        | n/a             | n/a               | 0 ms              | 0 MB             | 0 ms             | 138 ms   | 72.8 MB      | 110 ms           | 5/5             | 0    |
