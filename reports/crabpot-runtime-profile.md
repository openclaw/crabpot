# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 7128 ms            |
| Command P95 wall time  | 7213 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 6003               |
| CPU samples            | 6003               |
| Max peak RSS           | 596.5 MB           |
| Max RSS delta          | 568.3 MB           |
| Max CPU estimate       | 8612 ms            |
| Max harness heap delta | 10.7 MB            |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 0          |
| hookNames              | 42         |
| apiRegistrars          | 59         |
| capturedRegistrars     | 32         |
| sdkExports             | 331        |
| manifestFields         | 45         |
| manifestContractFields | 23         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 60    |
| sourceFiles           | 2085  |
| observedHooks         | 111   |
| observedRegistrations | 212   |
| observedSdkImports    | 1035  |
| contractProbes        | 245   |
| issueFindings         | 358   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 38 ms       | 42 ms    | 30.5 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 7015 ms     | 7038 ms  | 571.4 MB     | 541.3 MB      | 8403 ms      | 0 MB       | 834/834         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 7213 ms     | 7216 ms  | 569.7 MB     | 540.2 MB      | 8565 ms      | -0.5 MB    | 853/853         | 0          |
| contract-capture       | Contract capture inventory                      | 7129 ms     | 7172 ms  | 489.5 MB     | 459.4 MB      | 8477 ms      | 10.7 MB    | 844/844         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 7128 ms     | 7274 ms  | 571.3 MB     | 540.8 MB      | 8612 ms      | -0.4 MB    | 849/849         | 0          |
| cold-import-readiness  | Cold import readiness                           | 7191 ms     | 7230 ms  | 583.1 MB     | 553.2 MB      | 8550 ms      | -0.8 MB    | 849/849         | 0          |
| workspace-plan         | Workspace execution plan                        | 7098 ms     | 7146 ms  | 486.6 MB     | 458.4 MB      | 8511 ms      | 1.9 MB     | 846/846         | 0          |
| platform-probes        | Platform and loader probes                      | 7171 ms     | 7182 ms  | 596.5 MB     | 568.3 MB      | 8497 ms      | 5.1 MB     | 853/853         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 603 ms      | 613 ms   | 63.7 MB      | 35.2 MB       | 334 ms       | 2.1 MB     | 72/72           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 38 ms    | 42 ms    | 30.5 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 7015 ms  | 7038 ms  | 571.4 MB     | 8403 ms      | 834/834         | fixture-inspection     |
| target-registry  | 1        | 7213 ms  | 7216 ms  | 569.7 MB     | 8565 ms      | 853/853         | compat-report-registry |
| contract-capture | 1        | 7129 ms  | 7172 ms  | 489.5 MB     | 8477 ms      | 844/844         | contract-capture       |
| synthetic-probes | 1        | 7128 ms  | 7274 ms  | 571.3 MB     | 8612 ms      | 849/849         | synthetic-probe-plan   |
| cold-import      | 1        | 7191 ms  | 7230 ms  | 583.1 MB     | 8550 ms      | 849/849         | cold-import-readiness  |
| workspace-plan   | 1        | 7098 ms  | 7146 ms  | 486.6 MB     | 8511 ms      | 846/846         | workspace-plan         |
| platform-probes  | 1        | 7171 ms  | 7182 ms  | 596.5 MB     | 8497 ms      | 853/853         | platform-probes        |
| import-loop      | 1        | 603 ms   | 613 ms   | 63.7 MB      | 334 ms       | 72/72           | import-loop-profile    |
