# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2249 ms            |
| Command P95 wall time  | 2303 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1927               |
| CPU samples            | 1927               |
| Max peak RSS           | 465.7 MB           |
| Max RSS delta          | 437.2 MB           |
| Max CPU estimate       | 2538 ms            |
| Max harness heap delta | 7.7 MB             |

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
| sourceFiles           | 1774  |
| observedHooks         | 106   |
| observedRegistrations | 198   |
| observedSdkImports    | 1196  |
| contractProbes        | 278   |
| issueFindings         | 283   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 33 ms       | 36 ms    | 31.5 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2175 ms     | 2182 ms  | 445.5 MB     | 415.9 MB      | 2374 ms      | 7.7 MB     | 256/256         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2249 ms     | 2311 ms  | 447.2 MB     | 418.6 MB      | 2524 ms      | 7.1 MB     | 268/268         | 0          |
| contract-capture       | Contract capture inventory                      | 2262 ms     | 2309 ms  | 447.5 MB     | 417.4 MB      | 2538 ms      | 7.3 MB     | 271/271         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2255 ms     | 2287 ms  | 447.5 MB     | 419 MB        | 2495 ms      | 0.4 MB     | 266/266         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2247 ms     | 2273 ms  | 450.7 MB     | 421.9 MB      | 2489 ms      | 1.1 MB     | 268/268         | 0          |
| workspace-plan         | Workspace execution plan                        | 2302 ms     | 2317 ms  | 465.7 MB     | 437.2 MB      | 2532 ms      | 1.4 MB     | 275/275         | 0          |
| platform-probes        | Platform and loader probes                      | 2303 ms     | 2314 ms  | 454.3 MB     | 425.8 MB      | 2499 ms      | 1.4 MB     | 275/275         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 371 ms      | 372 ms   | 60.5 MB      | 31.9 MB       | 180 ms       | 1.3 MB     | 45/45           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 33 ms    | 36 ms    | 31.5 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2175 ms  | 2182 ms  | 445.5 MB     | 2374 ms      | 256/256         | fixture-inspection     |
| target-registry  | 1        | 2249 ms  | 2311 ms  | 447.2 MB     | 2524 ms      | 268/268         | compat-report-registry |
| contract-capture | 1        | 2262 ms  | 2309 ms  | 447.5 MB     | 2538 ms      | 271/271         | contract-capture       |
| synthetic-probes | 1        | 2255 ms  | 2287 ms  | 447.5 MB     | 2495 ms      | 266/266         | synthetic-probe-plan   |
| cold-import      | 1        | 2247 ms  | 2273 ms  | 450.7 MB     | 2489 ms      | 268/268         | cold-import-readiness  |
| workspace-plan   | 1        | 2302 ms  | 2317 ms  | 465.7 MB     | 2532 ms      | 275/275         | workspace-plan         |
| platform-probes  | 1        | 2303 ms  | 2314 ms  | 454.3 MB     | 2499 ms      | 275/275         | platform-probes        |
| import-loop      | 1        | 371 ms   | 372 ms   | 60.5 MB      | 180 ms       | 45/45           | import-loop-profile    |
