# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2314 ms            |
| Command P95 wall time  | 2356 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1963               |
| CPU samples            | 1963               |
| Max peak RSS           | 460.9 MB           |
| Max RSS delta          | 430.8 MB           |
| Max CPU estimate       | 2600 ms            |
| Max harness heap delta | 7.6 MB             |

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
| fixtures              | 59    |
| sourceFiles           | 1780  |
| observedHooks         | 105   |
| observedRegistrations | 195   |
| observedSdkImports    | 1193  |
| contractProbes        | 272   |
| issueFindings         | 276   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 36 ms       | 37 ms    | 31.5 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2215 ms     | 2265 ms  | 446.1 MB     | 415.4 MB      | 2492 ms      | 7.6 MB     | 262/262         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2314 ms     | 2356 ms  | 447.2 MB     | 417.1 MB      | 2592 ms      | 7.4 MB     | 274/274         | 0          |
| contract-capture       | Contract capture inventory                      | 2315 ms     | 2343 ms  | 460.9 MB     | 430.8 MB      | 2553 ms      | 7.6 MB     | 270/270         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2290 ms     | 2315 ms  | 447.2 MB     | 418.5 MB      | 2526 ms      | 0.5 MB     | 273/273         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2330 ms     | 2334 ms  | 451.3 MB     | 422.8 MB      | 2600 ms      | 0.2 MB     | 277/277         | 0          |
| workspace-plan         | Workspace execution plan                        | 2338 ms     | 2340 ms  | 454.6 MB     | 424.7 MB      | 2588 ms      | 1.8 MB     | 278/278         | 0          |
| platform-probes        | Platform and loader probes                      | 2356 ms     | 2361 ms  | 455.6 MB     | 427.1 MB      | 2583 ms      | 1.7 MB     | 281/281         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 396 ms      | 396 ms   | 60.4 MB      | 31.5 MB       | 195 ms       | 1.4 MB     | 45/45           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 36 ms    | 37 ms    | 31.5 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2215 ms  | 2265 ms  | 446.1 MB     | 2492 ms      | 262/262         | fixture-inspection     |
| target-registry  | 1        | 2314 ms  | 2356 ms  | 447.2 MB     | 2592 ms      | 274/274         | compat-report-registry |
| contract-capture | 1        | 2315 ms  | 2343 ms  | 460.9 MB     | 2553 ms      | 270/270         | contract-capture       |
| synthetic-probes | 1        | 2290 ms  | 2315 ms  | 447.2 MB     | 2526 ms      | 273/273         | synthetic-probe-plan   |
| cold-import      | 1        | 2330 ms  | 2334 ms  | 451.3 MB     | 2600 ms      | 277/277         | cold-import-readiness  |
| workspace-plan   | 1        | 2338 ms  | 2340 ms  | 454.6 MB     | 2588 ms      | 278/278         | workspace-plan         |
| platform-probes  | 1        | 2356 ms  | 2361 ms  | 455.6 MB     | 2583 ms      | 281/281         | platform-probes        |
| import-loop      | 1        | 396 ms   | 396 ms   | 60.4 MB      | 195 ms       | 45/45           | import-loop-profile    |
