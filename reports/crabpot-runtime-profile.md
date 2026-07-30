# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 6384 ms            |
| Command P95 wall time  | 6426 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 5395               |
| CPU samples            | 5395               |
| Max peak RSS           | 457.4 MB           |
| Max RSS delta          | 429.2 MB           |
| Max CPU estimate       | 7120 ms            |
| Max harness heap delta | 10 MB              |

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
| observedSdkImports    | 1333  |
| contractProbes        | 275   |
| issueFindings         | 399   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 34 ms       | 35 ms    | 30.7 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 6284 ms     | 6301 ms  | 397.9 MB     | 367.5 MB      | 6862 ms      | -1.8 MB    | 750/750         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 6399 ms     | 6444 ms  | 394.3 MB     | 365.4 MB      | 7005 ms      | 9.4 MB     | 764/764         | 0          |
| contract-capture       | Contract capture inventory                      | 6374 ms     | 6493 ms  | 393.2 MB     | 364.9 MB      | 7025 ms      | 9.4 MB     | 764/764         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 6426 ms     | 6511 ms  | 395.7 MB     | 367.5 MB      | 7110 ms      | 10 MB      | 771/771         | 0          |
| cold-import-readiness  | Cold import readiness                           | 6391 ms     | 6514 ms  | 399.4 MB     | 369.7 MB      | 7120 ms      | -2.5 MB    | 767/767         | 0          |
| workspace-plan         | Workspace execution plan                        | 6384 ms     | 6419 ms  | 401.1 MB     | 372.9 MB      | 7022 ms      | 1.7 MB     | 762/762         | 0          |
| platform-probes        | Platform and loader probes                      | 6403 ms     | 6443 ms  | 457.4 MB     | 429.2 MB      | 7049 ms      | 0.5 MB     | 766/766         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 408 ms      | 409 ms   | 60.7 MB      | 32.5 MB       | 197 ms       | 1.5 MB     | 48/48           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 34 ms    | 35 ms    | 30.7 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 6284 ms  | 6301 ms  | 397.9 MB     | 6862 ms      | 750/750         | fixture-inspection     |
| target-registry  | 1        | 6399 ms  | 6444 ms  | 394.3 MB     | 7005 ms      | 764/764         | compat-report-registry |
| contract-capture | 1        | 6374 ms  | 6493 ms  | 393.2 MB     | 7025 ms      | 764/764         | contract-capture       |
| synthetic-probes | 1        | 6426 ms  | 6511 ms  | 395.7 MB     | 7110 ms      | 771/771         | synthetic-probe-plan   |
| cold-import      | 1        | 6391 ms  | 6514 ms  | 399.4 MB     | 7120 ms      | 767/767         | cold-import-readiness  |
| workspace-plan   | 1        | 6384 ms  | 6419 ms  | 401.1 MB     | 7022 ms      | 762/762         | workspace-plan         |
| platform-probes  | 1        | 6403 ms  | 6443 ms  | 457.4 MB     | 7049 ms      | 766/766         | platform-probes        |
| import-loop      | 1        | 408 ms   | 409 ms   | 60.7 MB      | 197 ms       | 48/48           | import-loop-profile    |
