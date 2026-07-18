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
| p50WallMs                      | 65      |
| p95WallMs                      | 65      |
| p50PluginWallDeltaMs           | 0       |
| p95PluginWallDeltaMs           | 0       |
| maxPluginPeakRssDeltaMb        | 0.6 MB  |
| maxPluginCpuDeltaMsEstimate    | 11 ms   |
| maxPeakRssMb                   | 55.6 MB |
| maxCpuMsEstimate               | 33 ms   |
| baselineReferenceWallMs        | 65 ms   |
| baselineReferencePeakRssMb     | 55 MB   |
| baselineReferenceCpuMsEstimate | 22 ms   |
| statSampleCount                | 6       |
| rssSampleCount                 | 6       |
| cpuSampleCount                 | 6       |
| capturedCount                  | 3       |
| failCount                      | 0       |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 65 ms                                    |
| referencePeakRssMb     | 55 MB                                    |
| referenceCpuMsEstimate | 22 ms                                    |
| maxWallMs              | 67 ms                                    |
| maxPeakRssMb           | 55.5 MB                                  |
| maxCpuMsEstimate       | 22 ms                                    |
| statSampleCount        | 6                                        |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 1        | n/a             | n/a               | 0 ms              | 0.6 MB           | 11 ms            | 65 ms    | 55.6 MB      | 33 ms            | 2/2             | 0    |
| 1   | captured | 1        | n/a             | n/a               | 0 ms              | 0 MB             | 11 ms            | 65 ms    | 54.9 MB      | 33 ms            | 2/2             | 0    |
| 2   | captured | 1        | n/a             | n/a               | 0 ms              | 0.6 MB           | 0 ms             | 65 ms    | 55.6 MB      | 22 ms            | 2/2             | 0    |
