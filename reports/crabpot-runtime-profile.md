# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 6242 ms            |
| Command P95 wall time  | 6314 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 5281               |
| CPU samples            | 5281               |
| Max peak RSS           | 443.5 MB           |
| Max RSS delta          | 415.3 MB           |
| Max CPU estimate       | 6896 ms            |
| Max harness heap delta | 8.2 MB             |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 68         |
| hookNames              | 40         |
| apiRegistrars          | 55         |
| capturedRegistrars     | 30         |
| sdkExports             | 324        |
| manifestFields         | 44         |
| manifestContractFields | 22         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 60    |
| sourceFiles           | 2025  |
| observedHooks         | 110   |
| observedRegistrations | 211   |
| observedSdkImports    | 1318  |
| contractProbes        | 275   |
| issueFindings         | 289   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 34 ms       | 34 ms    | 30.6 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 6141 ms     | 6158 ms  | 401.2 MB     | 371.6 MB      | 6688 ms      | 7.6 MB     | 733/733         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 6238 ms     | 6373 ms  | 443 MB       | 414.4 MB      | 6896 ms      | 8.2 MB     | 750/750         | 0          |
| contract-capture       | Contract capture inventory                      | 6270 ms     | 6275 ms  | 442.8 MB     | 414.6 MB      | 6753 ms      | 1.9 MB     | 746/746         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 6242 ms     | 6263 ms  | 397.7 MB     | 369.5 MB      | 6777 ms      | 1.9 MB     | 746/746         | 0          |
| cold-import-readiness  | Cold import readiness                           | 6258 ms     | 6268 ms  | 443.5 MB     | 415.3 MB      | 6809 ms      | 1.9 MB     | 748/748         | 0          |
| workspace-plan         | Workspace execution plan                        | 6292 ms     | 6312 ms  | 443.2 MB     | 415 MB        | 6842 ms      | 1.8 MB     | 752/752         | 0          |
| platform-probes        | Platform and loader probes                      | 6314 ms     | 6315 ms  | 400.9 MB     | 372.4 MB      | 6870 ms      | 7.9 MB     | 755/755         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 404 ms      | 405 ms   | 60.6 MB      | 32.4 MB       | 198 ms       | 1.4 MB     | 48/48           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 34 ms    | 34 ms    | 30.6 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 6141 ms  | 6158 ms  | 401.2 MB     | 6688 ms      | 733/733         | fixture-inspection     |
| target-registry  | 1        | 6238 ms  | 6373 ms  | 443 MB       | 6896 ms      | 750/750         | compat-report-registry |
| contract-capture | 1        | 6270 ms  | 6275 ms  | 442.8 MB     | 6753 ms      | 746/746         | contract-capture       |
| synthetic-probes | 1        | 6242 ms  | 6263 ms  | 397.7 MB     | 6777 ms      | 746/746         | synthetic-probe-plan   |
| cold-import      | 1        | 6258 ms  | 6268 ms  | 443.5 MB     | 6809 ms      | 748/748         | cold-import-readiness  |
| workspace-plan   | 1        | 6292 ms  | 6312 ms  | 443.2 MB     | 6842 ms      | 752/752         | workspace-plan         |
| platform-probes  | 1        | 6314 ms  | 6315 ms  | 400.9 MB     | 6870 ms      | 755/755         | platform-probes        |
| import-loop      | 1        | 404 ms   | 405 ms   | 60.6 MB      | 198 ms       | 48/48           | import-loop-profile    |
