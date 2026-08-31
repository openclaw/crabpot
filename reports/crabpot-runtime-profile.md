# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 5035 ms            |
| Command P95 wall time  | 5114 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 4278               |
| CPU samples            | 4278               |
| Max peak RSS           | 212.8 MB           |
| Max RSS delta          | 185.3 MB           |
| Max CPU estimate       | 6017 ms            |
| Max harness heap delta | 5.1 MB             |

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
| fixtures              | 60    |
| sourceFiles           | 2176  |
| observedHooks         | 111   |
| observedRegistrations | 215   |
| observedSdkImports    | 1109  |
| contractProbes        | 255   |
| issueFindings         | 364   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 25 ms       | 29 ms    | 28.3 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 4934 ms     | 4966 ms  | 196 MB       | 168 MB        | 5885 ms      | 4.6 MB     | 591/591         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 5035 ms     | 5065 ms  | 206.3 MB     | 178.5 MB      | 6007 ms      | 5.1 MB     | 603/603         | 0          |
| contract-capture       | Contract capture inventory                      | 5030 ms     | 5038 ms  | 195.7 MB     | 167.9 MB      | 5930 ms      | 0.4 MB     | 601/601         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 5080 ms     | 5116 ms  | 203.4 MB     | 176.2 MB      | 6016 ms      | 1.9 MB     | 608/608         | 0          |
| cold-import-readiness  | Cold import readiness                           | 5062 ms     | 5065 ms  | 195.6 MB     | 168.1 MB      | 6017 ms      | 5.1 MB     | 605/605         | 0          |
| workspace-plan         | Workspace execution plan                        | 5074 ms     | 5112 ms  | 201.2 MB     | 174.7 MB      | 6017 ms      | -1.1 MB    | 608/608         | 0          |
| platform-probes        | Platform and loader probes                      | 5114 ms     | 5120 ms  | 212.8 MB     | 185.3 MB      | 5980 ms      | 5 MB       | 611/611         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 393 ms      | 400 ms   | 64.2 MB      | 36.9 MB       | 185 ms       | 1.5 MB     | 48/48           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 25 ms    | 29 ms    | 28.3 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 4934 ms  | 4966 ms  | 196 MB       | 5885 ms      | 591/591         | fixture-inspection     |
| target-registry  | 1        | 5035 ms  | 5065 ms  | 206.3 MB     | 6007 ms      | 603/603         | compat-report-registry |
| contract-capture | 1        | 5030 ms  | 5038 ms  | 195.7 MB     | 5930 ms      | 601/601         | contract-capture       |
| synthetic-probes | 1        | 5080 ms  | 5116 ms  | 203.4 MB     | 6016 ms      | 608/608         | synthetic-probe-plan   |
| cold-import      | 1        | 5062 ms  | 5065 ms  | 195.6 MB     | 6017 ms      | 605/605         | cold-import-readiness  |
| workspace-plan   | 1        | 5074 ms  | 5112 ms  | 201.2 MB     | 6017 ms      | 608/608         | workspace-plan         |
| platform-probes  | 1        | 5114 ms  | 5120 ms  | 212.8 MB     | 5980 ms      | 611/611         | platform-probes        |
| import-loop      | 1        | 393 ms   | 400 ms   | 64.2 MB      | 185 ms       | 48/48           | import-loop-profile    |
