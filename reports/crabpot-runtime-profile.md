# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 6218 ms            |
| Command P95 wall time  | 6574 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 5351               |
| CPU samples            | 5351               |
| Max peak RSS           | 222.3 MB           |
| Max RSS delta          | 192.8 MB           |
| Max CPU estimate       | 7472 ms            |
| Max harness heap delta | 3.4 MB             |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 0          |
| hookNames              | 42         |
| apiRegistrars          | 57         |
| capturedRegistrars     | 31         |
| sdkExports             | 315        |
| manifestFields         | 48         |
| manifestContractFields | 22         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 59    |
| sourceFiles           | 2202  |
| observedHooks         | 110   |
| observedRegistrations | 212   |
| observedSdkImports    | 1162  |
| contractProbes        | 252   |
| issueFindings         | 359   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 28 ms       | 29 ms    | 31.4 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 6091 ms     | 6115 ms  | 210.2 MB     | 181.3 MB      | 7234 ms      | 3.2 MB     | 723/723         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 6218 ms     | 6230 ms  | 209.4 MB     | 179.9 MB      | 7295 ms      | 2.9 MB     | 741/741         | 0          |
| contract-capture       | Contract capture inventory                      | 6322 ms     | 6327 ms  | 200.9 MB     | 172.7 MB      | 7264 ms      | 3 MB       | 754/754         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 6373 ms     | 6417 ms  | 198.1 MB     | 169.2 MB      | 7335 ms      | 2.4 MB     | 760/760         | 0          |
| cold-import-readiness  | Cold import readiness                           | 6188 ms     | 6272 ms  | 210.1 MB     | 181.9 MB      | 7333 ms      | 3 MB       | 740/740         | 0          |
| workspace-plan         | Workspace execution plan                        | 6253 ms     | 6278 ms  | 221 MB       | 192.8 MB      | 7472 ms      | 2.6 MB     | 746/746         | 0          |
| platform-probes        | Platform and loader probes                      | 6574 ms     | 6576 ms  | 222.3 MB     | 192.6 MB      | 7461 ms      | 3.4 MB     | 782/782         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 861 ms      | 864 ms   | 68.1 MB      | 39.7 MB       | 460 ms       | 1.9 MB     | 102/102         | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 28 ms    | 29 ms    | 31.4 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 6091 ms  | 6115 ms  | 210.2 MB     | 7234 ms      | 723/723         | fixture-inspection     |
| target-registry  | 1        | 6218 ms  | 6230 ms  | 209.4 MB     | 7295 ms      | 741/741         | compat-report-registry |
| contract-capture | 1        | 6322 ms  | 6327 ms  | 200.9 MB     | 7264 ms      | 754/754         | contract-capture       |
| synthetic-probes | 1        | 6373 ms  | 6417 ms  | 198.1 MB     | 7335 ms      | 760/760         | synthetic-probe-plan   |
| cold-import      | 1        | 6188 ms  | 6272 ms  | 210.1 MB     | 7333 ms      | 740/740         | cold-import-readiness  |
| workspace-plan   | 1        | 6253 ms  | 6278 ms  | 221 MB       | 7472 ms      | 746/746         | workspace-plan         |
| platform-probes  | 1        | 6574 ms  | 6576 ms  | 222.3 MB     | 7461 ms      | 782/782         | platform-probes        |
| import-loop      | 1        | 861 ms   | 864 ms   | 68.1 MB      | 460 ms       | 102/102         | import-loop-profile    |
