# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2281 ms            |
| Command P95 wall time  | 2385 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1958               |
| CPU samples            | 1958               |
| Max peak RSS           | 465.9 MB           |
| Max RSS delta          | 434.8 MB           |
| Max CPU estimate       | 2589 ms            |
| Max harness heap delta | 7.9 MB             |

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
| sourceFiles           | 1739  |
| observedHooks         | 103   |
| observedRegistrations | 193   |
| observedSdkImports    | 1158  |
| contractProbes        | 266   |
| issueFindings         | 270   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 36 ms       | 39 ms    | 31.5 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2169 ms     | 2188 ms  | 442 MB       | 412.1 MB      | 2425 ms      | 7.9 MB     | 257/257         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2310 ms     | 2312 ms  | 443.6 MB     | 414.2 MB      | 2553 ms      | 7.4 MB     | 270/270         | 0          |
| contract-capture       | Contract capture inventory                      | 2311 ms     | 2369 ms  | 465.9 MB     | 434.8 MB      | 2577 ms      | 7.8 MB     | 276/276         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2281 ms     | 2310 ms  | 444.8 MB     | 415.8 MB      | 2497 ms      | 0.6 MB     | 268/268         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2281 ms     | 2314 ms  | 443.9 MB     | 414.1 MB      | 2582 ms      | 0.1 MB     | 273/273         | 0          |
| workspace-plan         | Workspace execution plan                        | 2356 ms     | 2378 ms  | 449.8 MB     | 421.2 MB      | 2589 ms      | 1.8 MB     | 281/281         | 0          |
| platform-probes        | Platform and loader probes                      | 2385 ms     | 2386 ms  | 445.4 MB     | 416.7 MB      | 2585 ms      | 1.8 MB     | 284/284         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 389 ms      | 394 ms   | 60.9 MB      | 31.8 MB       | 201 ms       | 1.4 MB     | 46/46           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 36 ms    | 39 ms    | 31.5 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2169 ms  | 2188 ms  | 442 MB       | 2425 ms      | 257/257         | fixture-inspection     |
| target-registry  | 1        | 2310 ms  | 2312 ms  | 443.6 MB     | 2553 ms      | 270/270         | compat-report-registry |
| contract-capture | 1        | 2311 ms  | 2369 ms  | 465.9 MB     | 2577 ms      | 276/276         | contract-capture       |
| synthetic-probes | 1        | 2281 ms  | 2310 ms  | 444.8 MB     | 2497 ms      | 268/268         | synthetic-probe-plan   |
| cold-import      | 1        | 2281 ms  | 2314 ms  | 443.9 MB     | 2582 ms      | 273/273         | cold-import-readiness  |
| workspace-plan   | 1        | 2356 ms  | 2378 ms  | 449.8 MB     | 2589 ms      | 281/281         | workspace-plan         |
| platform-probes  | 1        | 2385 ms  | 2386 ms  | 445.4 MB     | 2585 ms      | 284/284         | platform-probes        |
| import-loop      | 1        | 389 ms   | 394 ms   | 60.9 MB      | 201 ms       | 46/46           | import-loop-profile    |
