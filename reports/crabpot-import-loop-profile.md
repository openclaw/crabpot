# Crabpot Import Loop Profile

Generated: deterministic
Mode: baseline-adjusted-cold-capture-loop
Entrypoint: test/fixtures/lazy-import-plugin.mjs

## Summary

| Metric                         | Value    |
| ------------------------------ | -------- |
| runs                           | 3        |
| baselineRuns                   | 3        |
| baselineFailCount              | 0        |
| p50WallMs                      | 409      |
| p95WallMs                      | 422      |
| p50PluginWallDeltaMs           | 0        |
| p95PluginWallDeltaMs           | 6        |
| maxPluginPeakRssDeltaMb        | 1.3 MB   |
| maxPluginCpuDeltaMsEstimate    | 13 ms    |
| maxPeakRssMb                   | 128.9 MB |
| maxCpuMsEstimate               | 391 ms   |
| baselineReferenceWallMs        | 416 ms   |
| baselineReferencePeakRssMb     | 127.6 MB |
| baselineReferenceCpuMsEstimate | 378 ms   |
| statSampleCount                | 49       |
| rssSampleCount                 | 49       |
| cpuSampleCount                 | 49       |
| capturedCount                  | 3        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 416 ms                                   |
| referencePeakRssMb     | 127.6 MB                                 |
| referenceCpuMsEstimate | 378 ms                                   |
| maxWallMs              | 428 ms                                   |
| maxPeakRssMb           | 129.8 MB                                 |
| maxCpuMsEstimate       | 420 ms                                   |
| statSampleCount        | 51                                       |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 1        | n/a             | n/a               | 0 ms              | 1.3 MB           | 13 ms            | 408 ms   | 128.9 MB     | 391 ms           | 16/16           | 0    |
| 1   | captured | 1        | n/a             | n/a               | 6 ms              | 0 MB             | 2 ms             | 422 ms   | 126.4 MB     | 380 ms           | 17/17           | 0    |
| 2   | captured | 1        | n/a             | n/a               | 0 ms              | 1.1 MB           | 8 ms             | 409 ms   | 128.7 MB     | 386 ms           | 16/16           | 0    |
