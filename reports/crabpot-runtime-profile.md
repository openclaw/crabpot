# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2280 ms            |
| Command P95 wall time  | 2351 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1959               |
| CPU samples            | 1959               |
| Max peak RSS           | 460.6 MB           |
| Max RSS delta          | 430.3 MB           |
| Max CPU estimate       | 2628 ms            |
| Max harness heap delta | 7.6 MB             |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 60         |
| hookNames              | 35         |
| apiRegistrars          | 49         |
| capturedRegistrars     | 26         |
| sdkExports             | 296        |
| manifestFields         | 40         |
| manifestContractFields | 17         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 57    |
| sourceFiles           | 1834  |
| observedHooks         | 97    |
| observedRegistrations | 194   |
| observedSdkImports    | 1162  |
| contractProbes        | 277   |
| issueFindings         | 281   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 34 ms       | 35 ms    | 32.3 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2212 ms     | 2225 ms  | 445.6 MB     | 415.3 MB      | 2435 ms      | 7.6 MB     | 259/259         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2296 ms     | 2387 ms  | 446.1 MB     | 415.2 MB      | 2628 ms      | 7.4 MB     | 275/275         | 0          |
| contract-capture       | Contract capture inventory                      | 2326 ms     | 2419 ms  | 460.6 MB     | 430.3 MB      | 2608 ms      | 7.4 MB     | 275/275         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2280 ms     | 2305 ms  | 448.5 MB     | 419.3 MB      | 2515 ms      | 0.5 MB     | 272/272         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2278 ms     | 2293 ms  | 449.4 MB     | 420.6 MB      | 2519 ms      | 1.3 MB     | 272/272         | 0          |
| workspace-plan         | Workspace execution plan                        | 2320 ms     | 2379 ms  | 455.6 MB     | 426.9 MB      | 2600 ms      | 1.7 MB     | 278/278         | 0          |
| platform-probes        | Platform and loader probes                      | 2351 ms     | 2351 ms  | 452.6 MB     | 423.9 MB      | 2541 ms      | 1.6 MB     | 279/279         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 374 ms      | 395 ms   | 60.5 MB      | 31.8 MB       | 183 ms       | 1.3 MB     | 46/46           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 34 ms    | 35 ms    | 32.3 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2212 ms  | 2225 ms  | 445.6 MB     | 2435 ms      | 259/259         | fixture-inspection     |
| target-registry  | 1        | 2296 ms  | 2387 ms  | 446.1 MB     | 2628 ms      | 275/275         | compat-report-registry |
| contract-capture | 1        | 2326 ms  | 2419 ms  | 460.6 MB     | 2608 ms      | 275/275         | contract-capture       |
| synthetic-probes | 1        | 2280 ms  | 2305 ms  | 448.5 MB     | 2515 ms      | 272/272         | synthetic-probe-plan   |
| cold-import      | 1        | 2278 ms  | 2293 ms  | 449.4 MB     | 2519 ms      | 272/272         | cold-import-readiness  |
| workspace-plan   | 1        | 2320 ms  | 2379 ms  | 455.6 MB     | 2600 ms      | 278/278         | workspace-plan         |
| platform-probes  | 1        | 2351 ms  | 2351 ms  | 452.6 MB     | 2541 ms      | 279/279         | platform-probes        |
| import-loop      | 1        | 374 ms   | 395 ms   | 60.5 MB      | 183 ms       | 46/46           | import-loop-profile    |
