# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2188 ms            |
| Command P95 wall time  | 2266 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1872               |
| CPU samples            | 1872               |
| Max peak RSS           | 461 MB             |
| Max RSS delta          | 432.4 MB           |
| Max CPU estimate       | 2453 ms            |
| Max harness heap delta | 7.5 MB             |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 60         |
| hookNames              | 36         |
| apiRegistrars          | 53         |
| capturedRegistrars     | 28         |
| sdkExports             | 307        |
| manifestFields         | 41         |
| manifestContractFields | 17         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 60    |
| sourceFiles           | 1783  |
| observedHooks         | 106   |
| observedRegistrations | 196   |
| observedSdkImports    | 1193  |
| contractProbes        | 278   |
| issueFindings         | 283   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 30 ms       | 31 ms    | 28.6 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2128 ms     | 2133 ms  | 461 MB       | 432.4 MB      | 2291 ms      | 7.5 MB     | 251/251         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2156 ms     | 2181 ms  | 447.6 MB     | 419 MB        | 2382 ms      | 7.1 MB     | 258/258         | 0          |
| contract-capture       | Contract capture inventory                      | 2203 ms     | 2255 ms  | 447.6 MB     | 419 MB        | 2397 ms      | 7.3 MB     | 264/264         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2229 ms     | 2259 ms  | 447.7 MB     | 419.1 MB      | 2446 ms      | 0.3 MB     | 263/263         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2188 ms     | 2202 ms  | 451.6 MB     | 423 MB        | 2369 ms      | 1.2 MB     | 261/261         | 0          |
| workspace-plan         | Workspace execution plan                        | 2219 ms     | 2230 ms  | 453.9 MB     | 425.3 MB      | 2453 ms      | 2.8 MB     | 264/264         | 0          |
| platform-probes        | Platform and loader probes                      | 2266 ms     | 2268 ms  | 454 MB       | 425.4 MB      | 2449 ms      | 1.4 MB     | 269/269         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 339 ms      | 341 ms   | 60.4 MB      | 31.8 MB       | 156 ms       | 1.3 MB     | 39/39           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 30 ms    | 31 ms    | 28.6 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2128 ms  | 2133 ms  | 461 MB       | 2291 ms      | 251/251         | fixture-inspection     |
| target-registry  | 1        | 2156 ms  | 2181 ms  | 447.6 MB     | 2382 ms      | 258/258         | compat-report-registry |
| contract-capture | 1        | 2203 ms  | 2255 ms  | 447.6 MB     | 2397 ms      | 264/264         | contract-capture       |
| synthetic-probes | 1        | 2229 ms  | 2259 ms  | 447.7 MB     | 2446 ms      | 263/263         | synthetic-probe-plan   |
| cold-import      | 1        | 2188 ms  | 2202 ms  | 451.6 MB     | 2369 ms      | 261/261         | cold-import-readiness  |
| workspace-plan   | 1        | 2219 ms  | 2230 ms  | 453.9 MB     | 2453 ms      | 264/264         | workspace-plan         |
| platform-probes  | 1        | 2266 ms  | 2268 ms  | 454 MB       | 2449 ms      | 269/269         | platform-probes        |
| import-loop      | 1        | 339 ms   | 341 ms   | 60.4 MB      | 156 ms       | 39/39           | import-loop-profile    |
