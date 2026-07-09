# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 6169 ms            |
| Command P95 wall time  | 6258 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 5219               |
| CPU samples            | 5219               |
| Max peak RSS           | 422.4 MB           |
| Max RSS delta          | 394.2 MB           |
| Max CPU estimate       | 6791 ms            |
| Max harness heap delta | 9 MB               |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 68         |
| hookNames              | 39         |
| apiRegistrars          | 55         |
| capturedRegistrars     | 30         |
| sdkExports             | 322        |
| manifestFields         | 43         |
| manifestContractFields | 21         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 60    |
| sourceFiles           | 2017  |
| observedHooks         | 108   |
| observedRegistrations | 208   |
| observedSdkImports    | 1279  |
| contractProbes        | 275   |
| issueFindings         | 291   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 32 ms       | 35 ms    | 28.3 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 6045 ms     | 6105 ms  | 422.4 MB     | 394.2 MB      | 6538 ms      | 9 MB       | 725/725         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 6235 ms     | 6259 ms  | 420.8 MB     | 392.5 MB      | 6791 ms      | 8 MB       | 743/743         | 0          |
| contract-capture       | Contract capture inventory                      | 6169 ms     | 6227 ms  | 420.4 MB     | 392.1 MB      | 6725 ms      | 7.7 MB     | 739/739         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 6147 ms     | 6170 ms  | 420.9 MB     | 392.6 MB      | 6633 ms      | 7.4 MB     | 732/732         | 0          |
| cold-import-readiness  | Cold import readiness                           | 6194 ms     | 6269 ms  | 420.1 MB     | 391.8 MB      | 6720 ms      | 7.6 MB     | 742/742         | 0          |
| workspace-plan         | Workspace execution plan                        | 6245 ms     | 6301 ms  | 420.5 MB     | 392.2 MB      | 6782 ms      | 7.7 MB     | 744/744         | 0          |
| platform-probes        | Platform and loader probes                      | 6258 ms     | 6281 ms  | 421.9 MB     | 393.6 MB      | 6758 ms      | 1.6 MB     | 746/746         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 369 ms      | 391 ms   | 60.6 MB      | 32.3 MB       | 180 ms       | 1.3 MB     | 45/45           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 32 ms    | 35 ms    | 28.3 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 6045 ms  | 6105 ms  | 422.4 MB     | 6538 ms      | 725/725         | fixture-inspection     |
| target-registry  | 1        | 6235 ms  | 6259 ms  | 420.8 MB     | 6791 ms      | 743/743         | compat-report-registry |
| contract-capture | 1        | 6169 ms  | 6227 ms  | 420.4 MB     | 6725 ms      | 739/739         | contract-capture       |
| synthetic-probes | 1        | 6147 ms  | 6170 ms  | 420.9 MB     | 6633 ms      | 732/732         | synthetic-probe-plan   |
| cold-import      | 1        | 6194 ms  | 6269 ms  | 420.1 MB     | 6720 ms      | 742/742         | cold-import-readiness  |
| workspace-plan   | 1        | 6245 ms  | 6301 ms  | 420.5 MB     | 6782 ms      | 744/744         | workspace-plan         |
| platform-probes  | 1        | 6258 ms  | 6281 ms  | 421.9 MB     | 6758 ms      | 746/746         | platform-probes        |
| import-loop      | 1        | 369 ms   | 391 ms   | 60.6 MB      | 180 ms       | 45/45           | import-loop-profile    |
