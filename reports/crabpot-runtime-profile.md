# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 6418 ms            |
| Command P95 wall time  | 6460 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 5407               |
| CPU samples            | 5407               |
| Max peak RSS           | 444.3 MB           |
| Max RSS delta          | 416 MB             |
| Max CPU estimate       | 7007 ms            |
| Max harness heap delta | 8.6 MB             |

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
| sourceFiles           | 2043  |
| observedHooks         | 110   |
| observedRegistrations | 211   |
| observedSdkImports    | 1318  |
| contractProbes        | 274   |
| issueFindings         | 288   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 31 ms       | 35 ms    | 28.3 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 6304 ms     | 6306 ms  | 442.4 MB     | 414.1 MB      | 6798 ms      | 8.1 MB     | 750/750         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 6385 ms     | 6408 ms  | 388.7 MB     | 360.4 MB      | 6889 ms      | 8.5 MB     | 760/760         | 0          |
| contract-capture       | Contract capture inventory                      | 6454 ms     | 6476 ms  | 442.6 MB     | 414.4 MB      | 7007 ms      | 8.6 MB     | 770/770         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 6418 ms     | 6491 ms  | 444.3 MB     | 416 MB        | 6997 ms      | 8.5 MB     | 770/770         | 0          |
| cold-import-readiness  | Cold import readiness                           | 6427 ms     | 6440 ms  | 404.6 MB     | 376.3 MB      | 6936 ms      | 8.3 MB     | 769/769         | 0          |
| workspace-plan         | Workspace execution plan                        | 6460 ms     | 6494 ms  | 400 MB       | 371.8 MB      | 6981 ms      | 2.4 MB     | 773/773         | 0          |
| platform-probes        | Platform and loader probes                      | 6443 ms     | 6443 ms  | 443 MB       | 414.8 MB      | 6920 ms      | 2.1 MB     | 770/770         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 364 ms      | 365 ms   | 60.7 MB      | 33 MB         | 178 ms       | 1.3 MB     | 42/42           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 31 ms    | 35 ms    | 28.3 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 6304 ms  | 6306 ms  | 442.4 MB     | 6798 ms      | 750/750         | fixture-inspection     |
| target-registry  | 1        | 6385 ms  | 6408 ms  | 388.7 MB     | 6889 ms      | 760/760         | compat-report-registry |
| contract-capture | 1        | 6454 ms  | 6476 ms  | 442.6 MB     | 7007 ms      | 770/770         | contract-capture       |
| synthetic-probes | 1        | 6418 ms  | 6491 ms  | 444.3 MB     | 6997 ms      | 770/770         | synthetic-probe-plan   |
| cold-import      | 1        | 6427 ms  | 6440 ms  | 404.6 MB     | 6936 ms      | 769/769         | cold-import-readiness  |
| workspace-plan   | 1        | 6460 ms  | 6494 ms  | 400 MB       | 6981 ms      | 773/773         | workspace-plan         |
| platform-probes  | 1        | 6443 ms  | 6443 ms  | 443 MB       | 6920 ms      | 770/770         | platform-probes        |
| import-loop      | 1        | 364 ms   | 365 ms   | 60.7 MB      | 178 ms       | 42/42           | import-loop-profile    |
