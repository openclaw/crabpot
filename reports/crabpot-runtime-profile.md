# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 7118 ms            |
| Command P95 wall time  | 7199 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 6000               |
| CPU samples            | 6000               |
| Max peak RSS           | 569.1 MB           |
| Max RSS delta          | 540.8 MB           |
| Max CPU estimate       | 8478 ms            |
| Max harness heap delta | 11.9 MB            |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 0          |
| hookNames              | 44         |
| apiRegistrars          | 56         |
| capturedRegistrars     | 32         |
| sdkExports             | 301        |
| manifestFields         | 45         |
| manifestContractFields | 23         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 60    |
| sourceFiles           | 2119  |
| observedHooks         | 111   |
| observedRegistrations | 210   |
| observedSdkImports    | 999   |
| contractProbes        | 268   |
| issueFindings         | 388   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 32 ms       | 34 ms    | 29.6 MB      | 0 MB          | 0 ms         | 0.5 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 6975 ms     | 7031 ms  | 494.4 MB     | 466.1 MB      | 8254 ms      | 11.2 MB    | 834/834         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 7118 ms     | 7150 ms  | 569.1 MB     | 540.8 MB      | 8444 ms      | 0 MB       | 850/850         | 0          |
| contract-capture       | Contract capture inventory                      | 7027 ms     | 7045 ms  | 472.2 MB     | 443.9 MB      | 8257 ms      | -0.5 MB    | 839/839         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 7167 ms     | 7196 ms  | 567.6 MB     | 539.3 MB      | 8455 ms      | 0 MB       | 853/853         | 0          |
| cold-import-readiness  | Cold import readiness                           | 7199 ms     | 7205 ms  | 556.3 MB     | 528.1 MB      | 8466 ms      | 11.9 MB    | 857/857         | 0          |
| workspace-plan         | Workspace execution plan                        | 7164 ms     | 7203 ms  | 556.4 MB     | 528.1 MB      | 8478 ms      | 2.2 MB     | 853/853         | 0          |
| platform-probes        | Platform and loader probes                      | 7152 ms     | 7156 ms  | 505.2 MB     | 476.9 MB      | 8473 ms      | -0.5 MB    | 854/854         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 490 ms      | 491 ms   | 64.1 MB      | 35.9 MB       | 255 ms       | 1.8 MB     | 57/57           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 32 ms    | 34 ms    | 29.6 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 6975 ms  | 7031 ms  | 494.4 MB     | 8254 ms      | 834/834         | fixture-inspection     |
| target-registry  | 1        | 7118 ms  | 7150 ms  | 569.1 MB     | 8444 ms      | 850/850         | compat-report-registry |
| contract-capture | 1        | 7027 ms  | 7045 ms  | 472.2 MB     | 8257 ms      | 839/839         | contract-capture       |
| synthetic-probes | 1        | 7167 ms  | 7196 ms  | 567.6 MB     | 8455 ms      | 853/853         | synthetic-probe-plan   |
| cold-import      | 1        | 7199 ms  | 7205 ms  | 556.3 MB     | 8466 ms      | 857/857         | cold-import-readiness  |
| workspace-plan   | 1        | 7164 ms  | 7203 ms  | 556.4 MB     | 8478 ms      | 853/853         | workspace-plan         |
| platform-probes  | 1        | 7152 ms  | 7156 ms  | 505.2 MB     | 8473 ms      | 854/854         | platform-probes        |
| import-loop      | 1        | 490 ms   | 491 ms   | 64.1 MB      | 255 ms       | 57/57           | import-loop-profile    |
