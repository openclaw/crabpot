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
| p50WallMs                      | 435      |
| p95WallMs                      | 440      |
| p50PluginWallDeltaMs           | 7        |
| p95PluginWallDeltaMs           | 12       |
| maxPluginPeakRssDeltaMb        | 2.3 MB   |
| maxPluginCpuDeltaMsEstimate    | 24 ms    |
| maxPeakRssMb                   | 126.6 MB |
| maxCpuMsEstimate               | 436 ms   |
| baselineReferenceWallMs        | 428 ms   |
| baselineReferencePeakRssMb     | 124.3 MB |
| baselineReferenceCpuMsEstimate | 412 ms   |
| statSampleCount                | 51       |
| rssSampleCount                 | 51       |
| cpuSampleCount                 | 51       |
| capturedCount                  | 3        |
| failCount                      | 0        |

## Harness Baseline

| Metric                 | Value                                    |
| ---------------------- | ---------------------------------------- |
| mode                   | minimal-plugin-capture                   |
| runs                   | 3                                        |
| entrypoint             | .crabpot/import-loop/baseline-plugin.mjs |
| referenceWallMs        | 428 ms                                   |
| referencePeakRssMb     | 124.3 MB                                 |
| referenceCpuMsEstimate | 412 ms                                   |
| maxWallMs              | 438 ms                                   |
| maxPeakRssMb           | 125 MB                                   |
| maxCpuMsEstimate       | 432 ms                                   |
| statSampleCount        | 51                                       |
| failCount              | 0                                        |

## Samples

| Run | Status   | Captured | OpenClaw Import | OpenClaw Activate | Plugin Wall Delta | Plugin RSS Delta | Plugin CPU Delta | Raw Wall | Raw Peak RSS | Raw CPU Estimate | RSS/CPU samples | Exit |
| --- | -------- | -------- | --------------- | ----------------- | ----------------- | ---------------- | ---------------- | -------- | ------------ | ---------------- | --------------- | ---- |
| 0   | captured | 1        | n/a             | n/a               | 1 ms              | 2.3 MB           | 0 ms             | 429 ms   | 126.6 MB     | 402 ms           | 17/17           | 0    |
| 1   | captured | 1        | n/a             | n/a               | 7 ms              | 2.3 MB           | 0 ms             | 435 ms   | 126.6 MB     | 411 ms           | 17/17           | 0    |
| 2   | captured | 1        | n/a             | n/a               | 12 ms             | 1.1 MB           | 24 ms            | 440 ms   | 125.4 MB     | 436 ms           | 17/17           | 0    |
