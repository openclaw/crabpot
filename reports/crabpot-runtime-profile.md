# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 6170 ms            |
| Command P95 wall time  | 6197 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 5208               |
| CPU samples            | 5208               |
| Max peak RSS           | 460.6 MB           |
| Max RSS delta          | 432.3 MB           |
| Max CPU estimate       | 6820 ms            |
| Max harness heap delta | 8.9 MB             |

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
| sourceFiles           | 2044  |
| observedHooks         | 110   |
| observedRegistrations | 213   |
| observedSdkImports    | 1335  |
| contractProbes        | 280   |
| issueFindings         | 293   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 30 ms       | 32 ms    | 28.3 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 6072 ms     | 6087 ms  | 396 MB       | 367.7 MB      | 6527 ms      | 8.9 MB     | 723/723         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 6186 ms     | 6188 ms  | 398.5 MB     | 370.3 MB      | 6656 ms      | 7.7 MB     | 738/738         | 0          |
| contract-capture       | Contract capture inventory                      | 6160 ms     | 6164 ms  | 397.5 MB     | 369.2 MB      | 6616 ms      | 1.7 MB     | 736/736         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 6197 ms     | 6219 ms  | 400.4 MB     | 372.1 MB      | 6654 ms      | 1.8 MB     | 741/741         | 0          |
| cold-import-readiness  | Cold import readiness                           | 6170 ms     | 6190 ms  | 399.1 MB     | 370.8 MB      | 6645 ms      | 1.8 MB     | 737/737         | 0          |
| workspace-plan         | Workspace execution plan                        | 6188 ms     | 6229 ms  | 397.4 MB     | 369.1 MB      | 6715 ms      | 2.9 MB     | 742/742         | 0          |
| platform-probes        | Platform and loader probes                      | 6196 ms     | 6338 ms  | 460.6 MB     | 432.3 MB      | 6820 ms      | 7.6 MB     | 746/746         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 363 ms      | 363 ms   | 61 MB        | 32.7 MB       | 182 ms       | 1.3 MB     | 42/42           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 30 ms    | 32 ms    | 28.3 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 6072 ms  | 6087 ms  | 396 MB       | 6527 ms      | 723/723         | fixture-inspection     |
| target-registry  | 1        | 6186 ms  | 6188 ms  | 398.5 MB     | 6656 ms      | 738/738         | compat-report-registry |
| contract-capture | 1        | 6160 ms  | 6164 ms  | 397.5 MB     | 6616 ms      | 736/736         | contract-capture       |
| synthetic-probes | 1        | 6197 ms  | 6219 ms  | 400.4 MB     | 6654 ms      | 741/741         | synthetic-probe-plan   |
| cold-import      | 1        | 6170 ms  | 6190 ms  | 399.1 MB     | 6645 ms      | 737/737         | cold-import-readiness  |
| workspace-plan   | 1        | 6188 ms  | 6229 ms  | 397.4 MB     | 6715 ms      | 742/742         | workspace-plan         |
| platform-probes  | 1        | 6196 ms  | 6338 ms  | 460.6 MB     | 6820 ms      | 746/746         | platform-probes        |
| import-loop      | 1        | 363 ms   | 363 ms   | 61 MB        | 182 ms       | 42/42           | import-loop-profile    |
