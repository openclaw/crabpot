# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 7167 ms            |
| Command P95 wall time  | 7319 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 6047               |
| CPU samples            | 6047               |
| Max peak RSS           | 559.2 MB           |
| Max RSS delta          | 531 MB             |
| Max CPU estimate       | 8877 ms            |
| Max harness heap delta | 11.3 MB            |

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
| sourceFiles           | 2066  |
| observedHooks         | 111   |
| observedRegistrations | 210   |
| observedSdkImports    | 984   |
| contractProbes        | 242   |
| issueFindings         | 358   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 41 ms       | 42 ms    | 31.3 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 7086 ms     | 7143 ms  | 494.8 MB     | 464.6 MB      | 8522 ms      | 11.3 MB    | 840/840         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 7200 ms     | 7216 ms  | 503.6 MB     | 472.7 MB      | 8623 ms      | 0 MB       | 849/849         | 0          |
| contract-capture       | Contract capture inventory                      | 7319 ms     | 7460 ms  | 504.2 MB     | 476 MB        | 8877 ms      | 0.8 MB     | 873/873         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 7167 ms     | 7230 ms  | 416.6 MB     | 388.4 MB      | 8488 ms      | -0.2 MB    | 851/851         | 0          |
| cold-import-readiness  | Cold import readiness                           | 7220 ms     | 7278 ms  | 559.2 MB     | 529.8 MB      | 8664 ms      | 1.2 MB     | 852/852         | 0          |
| workspace-plan         | Workspace execution plan                        | 7239 ms     | 7282 ms  | 559.2 MB     | 531 MB        | 8709 ms      | 3 MB       | 861/861         | 0          |
| platform-probes        | Platform and loader probes                      | 7115 ms     | 7209 ms  | 452.8 MB     | 424.6 MB      | 8622 ms      | 5.8 MB     | 847/847         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 612 ms      | 623 ms   | 64.5 MB      | 36.3 MB       | 320 ms       | 2.2 MB     | 71/71           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 41 ms    | 42 ms    | 31.3 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 7086 ms  | 7143 ms  | 494.8 MB     | 8522 ms      | 840/840         | fixture-inspection     |
| target-registry  | 1        | 7200 ms  | 7216 ms  | 503.6 MB     | 8623 ms      | 849/849         | compat-report-registry |
| contract-capture | 1        | 7319 ms  | 7460 ms  | 504.2 MB     | 8877 ms      | 873/873         | contract-capture       |
| synthetic-probes | 1        | 7167 ms  | 7230 ms  | 416.6 MB     | 8488 ms      | 851/851         | synthetic-probe-plan   |
| cold-import      | 1        | 7220 ms  | 7278 ms  | 559.2 MB     | 8664 ms      | 852/852         | cold-import-readiness  |
| workspace-plan   | 1        | 7239 ms  | 7282 ms  | 559.2 MB     | 8709 ms      | 861/861         | workspace-plan         |
| platform-probes  | 1        | 7115 ms  | 7209 ms  | 452.8 MB     | 8622 ms      | 847/847         | platform-probes        |
| import-loop      | 1        | 612 ms   | 623 ms   | 64.5 MB      | 320 ms       | 71/71           | import-loop-profile    |
