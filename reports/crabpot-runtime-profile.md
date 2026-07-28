# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 5158 ms            |
| Command P95 wall time  | 5407 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 4434               |
| CPU samples            | 4434               |
| Max peak RSS           | 460.2 MB           |
| Max RSS delta          | 432.3 MB           |
| Max CPU estimate       | 5940 ms            |
| Max harness heap delta | 6.2 MB             |

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
| observedRegistrations | 211   |
| observedSdkImports    | 1333  |
| contractProbes        | 275   |
| issueFindings         | 400   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 25 ms       | 26 ms    | 28.5 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 5128 ms     | 5153 ms  | 459.1 MB     | 431.5 MB      | 5617 ms      | 5.3 MB     | 608/608         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 5150 ms     | 5153 ms  | 460.2 MB     | 432.3 MB      | 5577 ms      | 5.4 MB     | 613/613         | 0          |
| contract-capture       | Contract capture inventory                      | 5158 ms     | 5233 ms  | 459.8 MB     | 432.1 MB      | 5657 ms      | 5.6 MB     | 619/619         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 5201 ms     | 5285 ms  | 459.3 MB     | 431.1 MB      | 5639 ms      | 5.8 MB     | 626/626         | 0          |
| cold-import-readiness  | Cold import readiness                           | 5316 ms     | 5371 ms  | 458.5 MB     | 430.2 MB      | 5833 ms      | 5.9 MB     | 637/637         | 0          |
| workspace-plan         | Workspace execution plan                        | 5397 ms     | 5460 ms  | 398.5 MB     | 370.1 MB      | 5940 ms      | 6.2 MB     | 647/647         | 0          |
| platform-probes        | Platform and loader probes                      | 5407 ms     | 5417 ms  | 395.2 MB     | 367.1 MB      | 5840 ms      | 1.6 MB     | 644/644         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 313 ms      | 314 ms   | 60.8 MB      | 34.5 MB       | 144 ms       | -0.3 MB    | 37/37           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 25 ms    | 26 ms    | 28.5 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 5128 ms  | 5153 ms  | 459.1 MB     | 5617 ms      | 608/608         | fixture-inspection     |
| target-registry  | 1        | 5150 ms  | 5153 ms  | 460.2 MB     | 5577 ms      | 613/613         | compat-report-registry |
| contract-capture | 1        | 5158 ms  | 5233 ms  | 459.8 MB     | 5657 ms      | 619/619         | contract-capture       |
| synthetic-probes | 1        | 5201 ms  | 5285 ms  | 459.3 MB     | 5639 ms      | 626/626         | synthetic-probe-plan   |
| cold-import      | 1        | 5316 ms  | 5371 ms  | 458.5 MB     | 5833 ms      | 637/637         | cold-import-readiness  |
| workspace-plan   | 1        | 5397 ms  | 5460 ms  | 398.5 MB     | 5940 ms      | 647/647         | workspace-plan         |
| platform-probes  | 1        | 5407 ms  | 5417 ms  | 395.2 MB     | 5840 ms      | 644/644         | platform-probes        |
| import-loop      | 1        | 313 ms   | 314 ms   | 60.8 MB      | 144 ms       | 37/37           | import-loop-profile    |
