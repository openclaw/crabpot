# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 6383 ms            |
| Command P95 wall time  | 6443 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 5366               |
| CPU samples            | 5366               |
| Max peak RSS           | 439.7 MB           |
| Max RSS delta          | 411.5 MB           |
| Max CPU estimate       | 7028 ms            |
| Max harness heap delta | 9.2 MB             |

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
| sourceFiles           | 2031  |
| observedHooks         | 110   |
| observedRegistrations | 211   |
| observedSdkImports    | 1325  |
| contractProbes        | 276   |
| issueFindings         | 401   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 35 ms       | 35 ms    | 31.4 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 6159 ms     | 6242 ms  | 438.7 MB     | 409.3 MB      | 6773 ms      | 8 MB       | 737/737         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 6443 ms     | 6471 ms  | 396.7 MB     | 368.5 MB      | 7028 ms      | 9.1 MB     | 769/769         | 0          |
| contract-capture       | Contract capture inventory                      | 6352 ms     | 6416 ms  | 396.9 MB     | 368.4 MB      | 6942 ms      | 8.8 MB     | 759/759         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 6383 ms     | 6480 ms  | 439.7 MB     | 411.5 MB      | 7024 ms      | 9.2 MB     | 763/763         | 0          |
| cold-import-readiness  | Cold import readiness                           | 6399 ms     | 6428 ms  | 439.2 MB     | 411 MB        | 6962 ms      | 8.7 MB     | 761/761         | 0          |
| workspace-plan         | Workspace execution plan                        | 6410 ms     | 6436 ms  | 433.6 MB     | 404.4 MB      | 6983 ms      | 1.3 MB     | 762/762         | 0          |
| platform-probes        | Platform and loader probes                      | 6395 ms     | 6397 ms  | 433.6 MB     | 405.1 MB      | 6919 ms      | 2.5 MB     | 763/763         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 420 ms      | 435 ms   | 60.7 MB      | 32.5 MB       | 210 ms       | 1.5 MB     | 49/49           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 35 ms    | 35 ms    | 31.4 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 6159 ms  | 6242 ms  | 438.7 MB     | 6773 ms      | 737/737         | fixture-inspection     |
| target-registry  | 1        | 6443 ms  | 6471 ms  | 396.7 MB     | 7028 ms      | 769/769         | compat-report-registry |
| contract-capture | 1        | 6352 ms  | 6416 ms  | 396.9 MB     | 6942 ms      | 759/759         | contract-capture       |
| synthetic-probes | 1        | 6383 ms  | 6480 ms  | 439.7 MB     | 7024 ms      | 763/763         | synthetic-probe-plan   |
| cold-import      | 1        | 6399 ms  | 6428 ms  | 439.2 MB     | 6962 ms      | 761/761         | cold-import-readiness  |
| workspace-plan   | 1        | 6410 ms  | 6436 ms  | 433.6 MB     | 6983 ms      | 762/762         | workspace-plan         |
| platform-probes  | 1        | 6395 ms  | 6397 ms  | 433.6 MB     | 6919 ms      | 763/763         | platform-probes        |
| import-loop      | 1        | 420 ms   | 435 ms   | 60.7 MB      | 210 ms       | 49/49           | import-loop-profile    |
