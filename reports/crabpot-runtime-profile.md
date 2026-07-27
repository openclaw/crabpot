# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 4496 ms            |
| Command P95 wall time  | 5536 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 3780               |
| CPU samples            | 3780               |
| Max peak RSS           | 788.4 MB           |
| Max RSS delta          | 787.9 MB           |
| Max CPU estimate       | 5493 ms            |
| Max harness heap delta | 16.8 MB            |

## Target OpenClaw Registry Surface

| Metric                 | Value                                 |
| ---------------------- | ------------------------------------- |
| status                 | ok                                    |
| configuredPath         | /tmp/crabpot-openclaw.thovuw/openclaw |
| compatRecords          | 0                                     |
| hookNames              | 42                                    |
| apiRegistrars          | 59                                    |
| capturedRegistrars     | 32                                    |
| sdkExports             | 331                                   |
| manifestFields         | 45                                    |
| manifestContractFields | 23                                    |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 60    |
| sourceFiles           | 2139  |
| observedHooks         | 111   |
| observedRegistrations | 213   |
| observedSdkImports    | 1369  |
| contractProbes        | 274   |
| issueFindings         | 396   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 30 ms       | 33 ms    | 0.6 MB       | 0 MB          | 0 ms         | 0.5 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 5208 ms     | 5499 ms  | 763.4 MB     | 762.9 MB      | 5268 ms      | 16.8 MB    | 579/579         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 4707 ms     | 5169 ms  | 729.7 MB     | 729.1 MB      | 5009 ms      | 16.6 MB    | 538/538         | 0          |
| contract-capture       | Contract capture inventory                      | 4372 ms     | 5253 ms  | 763.5 MB     | 763.1 MB      | 5064 ms      | 16.6 MB    | 529/529         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 4583 ms     | 4839 ms  | 725.8 MB     | 725.3 MB      | 4626 ms      | 12.9 MB    | 515/515         | 0          |
| cold-import-readiness  | Cold import readiness                           | 4246 ms     | 4305 ms  | 699.8 MB     | 699.3 MB      | 4038 ms      | 10.9 MB    | 480/480         | 0          |
| workspace-plan         | Workspace execution plan                        | 4496 ms     | 5017 ms  | 788.4 MB     | 787.9 MB      | 4636 ms      | 13.3 MB    | 527/527         | 0          |
| platform-probes        | Platform and loader probes                      | 5536 ms     | 5776 ms  | 761.4 MB     | 760.8 MB      | 5493 ms      | 14.3 MB    | 579/579         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 255 ms      | 256 ms   | 67.9 MB      | 67.3 MB       | 24 ms        | 0.8 MB     | 30/30           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 30 ms    | 33 ms    | 0.6 MB       | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 5208 ms  | 5499 ms  | 763.4 MB     | 5268 ms      | 579/579         | fixture-inspection     |
| target-registry  | 1        | 4707 ms  | 5169 ms  | 729.7 MB     | 5009 ms      | 538/538         | compat-report-registry |
| contract-capture | 1        | 4372 ms  | 5253 ms  | 763.5 MB     | 5064 ms      | 529/529         | contract-capture       |
| synthetic-probes | 1        | 4583 ms  | 4839 ms  | 725.8 MB     | 4626 ms      | 515/515         | synthetic-probe-plan   |
| cold-import      | 1        | 4246 ms  | 4305 ms  | 699.8 MB     | 4038 ms      | 480/480         | cold-import-readiness  |
| workspace-plan   | 1        | 4496 ms  | 5017 ms  | 788.4 MB     | 4636 ms      | 527/527         | workspace-plan         |
| platform-probes  | 1        | 5536 ms  | 5776 ms  | 761.4 MB     | 5493 ms      | 579/579         | platform-probes        |
| import-loop      | 1        | 255 ms   | 256 ms   | 67.9 MB      | 24 ms        | 30/30           | import-loop-profile    |
