# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 9565 ms            |
| Command P95 wall time  | 9613 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 8044               |
| CPU samples            | 8044               |
| Max peak RSS           | 764.6 MB           |
| Max RSS delta          | 736.3 MB           |
| Max CPU estimate       | 11234 ms           |
| Max harness heap delta | 7.2 MB             |

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
| sourceFiles           | 2099  |
| observedHooks         | 111   |
| observedRegistrations | 212   |
| observedSdkImports    | 1035  |
| contractProbes        | 245   |
| issueFindings         | 358   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 32 ms       | 34 ms    | 30 MB        | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 9594 ms     | 9607 ms  | 664.8 MB     | 636.6 MB      | 11058 ms     | 7 MB       | 1145/1145       | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 9566 ms     | 9638 ms  | 749.3 MB     | 721 MB        | 11199 ms     | 7.2 MB     | 1133/1133       | 0          |
| contract-capture       | Contract capture inventory                      | 9586 ms     | 9752 ms  | 711.8 MB     | 683.6 MB      | 11234 ms     | 7.2 MB     | 1149/1149       | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 9542 ms     | 9669 ms  | 712.6 MB     | 684.3 MB      | 11139 ms     | 1.2 MB     | 1140/1140       | 0          |
| cold-import-readiness  | Cold import readiness                           | 9565 ms     | 9584 ms  | 653.5 MB     | 625.2 MB      | 11031 ms     | 3.7 MB     | 1132/1132       | 0          |
| workspace-plan         | Workspace execution plan                        | 9613 ms     | 9673 ms  | 764.6 MB     | 736.3 MB      | 11182 ms     | 1.1 MB     | 1144/1144       | 0          |
| platform-probes        | Platform and loader probes                      | 9563 ms     | 9588 ms  | 657.2 MB     | 628.9 MB      | 11036 ms     | 6.7 MB     | 1139/1139       | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 496 ms      | 497 ms   | 64 MB        | 35.7 MB       | 271 ms       | 1.7 MB     | 59/59           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 32 ms    | 34 ms    | 30 MB        | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 9594 ms  | 9607 ms  | 664.8 MB     | 11058 ms     | 1145/1145       | fixture-inspection     |
| target-registry  | 1        | 9566 ms  | 9638 ms  | 749.3 MB     | 11199 ms     | 1133/1133       | compat-report-registry |
| contract-capture | 1        | 9586 ms  | 9752 ms  | 711.8 MB     | 11234 ms     | 1149/1149       | contract-capture       |
| synthetic-probes | 1        | 9542 ms  | 9669 ms  | 712.6 MB     | 11139 ms     | 1140/1140       | synthetic-probe-plan   |
| cold-import      | 1        | 9565 ms  | 9584 ms  | 653.5 MB     | 11031 ms     | 1132/1132       | cold-import-readiness  |
| workspace-plan   | 1        | 9613 ms  | 9673 ms  | 764.6 MB     | 11182 ms     | 1144/1144       | workspace-plan         |
| platform-probes  | 1        | 9563 ms  | 9588 ms  | 657.2 MB     | 11036 ms     | 1139/1139       | platform-probes        |
| import-loop      | 1        | 496 ms   | 497 ms   | 64 MB        | 271 ms       | 59/59           | import-loop-profile    |
