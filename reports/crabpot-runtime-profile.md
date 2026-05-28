# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2430 ms            |
| Command P95 wall time  | 2575 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 2095               |
| CPU samples            | 2095               |
| Max peak RSS           | 482.6 MB           |
| Max RSS delta          | 453.2 MB           |
| Max CPU estimate       | 2820 ms            |
| Max harness heap delta | 8.4 MB             |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 64         |
| hookNames              | 37         |
| apiRegistrars          | 55         |
| capturedRegistrars     | 30         |
| sdkExports             | 304        |
| manifestFields         | 41         |
| manifestContractFields | 20         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 60    |
| sourceFiles           | 1784  |
| observedHooks         | 108   |
| observedRegistrations | 205   |
| observedSdkImports    | 1213  |
| contractProbes        | 284   |
| issueFindings         | 289   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 39 ms       | 40 ms    | 31 MB        | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2371 ms     | 2382 ms  | 473.4 MB     | 443.6 MB      | 2604 ms      | 7.8 MB     | 277/277         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2493 ms     | 2524 ms  | 474.2 MB     | 444.8 MB      | 2744 ms      | 7.8 MB     | 291/291         | 0          |
| contract-capture       | Contract capture inventory                      | 2426 ms     | 2486 ms  | 473.9 MB     | 444.2 MB      | 2710 ms      | 8.2 MB     | 287/287         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2468 ms     | 2534 ms  | 474.2 MB     | 445.8 MB      | 2770 ms      | 8 MB       | 294/294         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2430 ms     | 2469 ms  | 474.5 MB     | 446.1 MB      | 2721 ms      | 7.9 MB     | 288/288         | 0          |
| workspace-plan         | Workspace execution plan                        | 2575 ms     | 2592 ms  | 482.6 MB     | 453.2 MB      | 2820 ms      | 8.4 MB     | 303/303         | 0          |
| platform-probes        | Platform and loader probes                      | 2549 ms     | 2618 ms  | 482.5 MB     | 453.1 MB      | 2820 ms      | 8.3 MB     | 303/303         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 416 ms      | 428 ms   | 60.5 MB      | 31.2 MB       | 203 ms       | 1.5 MB     | 49/49           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 39 ms    | 40 ms    | 31 MB        | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2371 ms  | 2382 ms  | 473.4 MB     | 2604 ms      | 277/277         | fixture-inspection     |
| target-registry  | 1        | 2493 ms  | 2524 ms  | 474.2 MB     | 2744 ms      | 291/291         | compat-report-registry |
| contract-capture | 1        | 2426 ms  | 2486 ms  | 473.9 MB     | 2710 ms      | 287/287         | contract-capture       |
| synthetic-probes | 1        | 2468 ms  | 2534 ms  | 474.2 MB     | 2770 ms      | 294/294         | synthetic-probe-plan   |
| cold-import      | 1        | 2430 ms  | 2469 ms  | 474.5 MB     | 2721 ms      | 288/288         | cold-import-readiness  |
| workspace-plan   | 1        | 2575 ms  | 2592 ms  | 482.6 MB     | 2820 ms      | 303/303         | workspace-plan         |
| platform-probes  | 1        | 2549 ms  | 2618 ms  | 482.5 MB     | 2820 ms      | 303/303         | platform-probes        |
| import-loop      | 1        | 416 ms   | 428 ms   | 60.5 MB      | 203 ms       | 49/49           | import-loop-profile    |
