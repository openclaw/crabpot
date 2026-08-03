# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 5266 ms            |
| Command P95 wall time  | 5387 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 4442               |
| CPU samples            | 4442               |
| Max peak RSS           | 546.3 MB           |
| Max RSS delta          | 517.1 MB           |
| Max CPU estimate       | 5846 ms            |
| Max harness heap delta | 5.6 MB             |

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
| sourceFiles           | 2084  |
| observedHooks         | 111   |
| observedRegistrations | 212   |
| observedSdkImports    | 1385  |
| contractProbes        | 278   |
| issueFindings         | 399   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 28 ms       | 29 ms    | 29.9 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 5116 ms     | 5132 ms  | 401.4 MB     | 371.7 MB      | 5594 ms      | 4.8 MB     | 611/611         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 5271 ms     | 5278 ms  | 540.5 MB     | 511.6 MB      | 5756 ms      | 5.3 MB     | 629/629         | 0          |
| contract-capture       | Contract capture inventory                      | 5270 ms     | 5277 ms  | 401 MB       | 372.6 MB      | 5736 ms      | 5.3 MB     | 628/628         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 5337 ms     | 5361 ms  | 542.6 MB     | 513.8 MB      | 5790 ms      | 5.6 MB     | 632/632         | 0          |
| cold-import-readiness  | Cold import readiness                           | 5249 ms     | 5339 ms  | 546.3 MB     | 516.4 MB      | 5820 ms      | 5.5 MB     | 629/629         | 0          |
| workspace-plan         | Workspace execution plan                        | 5266 ms     | 5279 ms  | 400.7 MB     | 371.9 MB      | 5740 ms      | 2.1 MB     | 626/626         | 0          |
| platform-probes        | Platform and loader probes                      | 5387 ms     | 5413 ms  | 545.6 MB     | 517.1 MB      | 5846 ms      | 2.4 MB     | 644/644         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 344 ms      | 347 ms   | 60.9 MB      | 32.4 MB       | 160 ms       | 1.3 MB     | 40/40           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 28 ms    | 29 ms    | 29.9 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 5116 ms  | 5132 ms  | 401.4 MB     | 5594 ms      | 611/611         | fixture-inspection     |
| target-registry  | 1        | 5271 ms  | 5278 ms  | 540.5 MB     | 5756 ms      | 629/629         | compat-report-registry |
| contract-capture | 1        | 5270 ms  | 5277 ms  | 401 MB       | 5736 ms      | 628/628         | contract-capture       |
| synthetic-probes | 1        | 5337 ms  | 5361 ms  | 542.6 MB     | 5790 ms      | 632/632         | synthetic-probe-plan   |
| cold-import      | 1        | 5249 ms  | 5339 ms  | 546.3 MB     | 5820 ms      | 629/629         | cold-import-readiness  |
| workspace-plan   | 1        | 5266 ms  | 5279 ms  | 400.7 MB     | 5740 ms      | 626/626         | workspace-plan         |
| platform-probes  | 1        | 5387 ms  | 5413 ms  | 545.6 MB     | 5846 ms      | 644/644         | platform-probes        |
| import-loop      | 1        | 344 ms   | 347 ms   | 60.9 MB      | 160 ms       | 40/40           | import-loop-profile    |
