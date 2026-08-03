# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 7107 ms            |
| Command P95 wall time  | 7183 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 5980               |
| CPU samples            | 5980               |
| Max peak RSS           | 559.7 MB           |
| Max RSS delta          | 531.1 MB           |
| Max CPU estimate       | 8565 ms            |
| Max harness heap delta | 5.8 MB             |

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
| observedSdkImports    | 984   |
| contractProbes        | 242   |
| issueFindings         | 358   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 37 ms       | 41 ms    | 30.3 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 6943 ms     | 6964 ms  | 559.7 MB     | 531.1 MB      | 8283 ms      | 0.3 MB     | 826/826         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 7137 ms     | 7165 ms  | 505.4 MB     | 475.7 MB      | 8534 ms      | -0.1 MB    | 847/847         | 0          |
| contract-capture       | Contract capture inventory                      | 7107 ms     | 7148 ms  | 413.5 MB     | 383.9 MB      | 8513 ms      | -0.3 MB    | 846/846         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 7183 ms     | 7252 ms  | 559.2 MB     | 529.7 MB      | 8565 ms      | 1.5 MB     | 853/853         | 0          |
| cold-import-readiness  | Cold import readiness                           | 7038 ms     | 7127 ms  | 557.8 MB     | 529.5 MB      | 8403 ms      | 2.3 MB     | 843/843         | 0          |
| workspace-plan         | Workspace execution plan                        | 7127 ms     | 7129 ms  | 510.7 MB     | 482.5 MB      | 8417 ms      | 5.2 MB     | 847/847         | 0          |
| platform-probes        | Platform and loader probes                      | 7128 ms     | 7151 ms  | 555.2 MB     | 527 MB        | 8460 ms      | 5.8 MB     | 845/845         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 600 ms      | 601 ms   | 64 MB        | 35.7 MB       | 300 ms       | 2.1 MB     | 70/70           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 37 ms    | 41 ms    | 30.3 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 6943 ms  | 6964 ms  | 559.7 MB     | 8283 ms      | 826/826         | fixture-inspection     |
| target-registry  | 1        | 7137 ms  | 7165 ms  | 505.4 MB     | 8534 ms      | 847/847         | compat-report-registry |
| contract-capture | 1        | 7107 ms  | 7148 ms  | 413.5 MB     | 8513 ms      | 846/846         | contract-capture       |
| synthetic-probes | 1        | 7183 ms  | 7252 ms  | 559.2 MB     | 8565 ms      | 853/853         | synthetic-probe-plan   |
| cold-import      | 1        | 7038 ms  | 7127 ms  | 557.8 MB     | 8403 ms      | 843/843         | cold-import-readiness  |
| workspace-plan   | 1        | 7127 ms  | 7129 ms  | 510.7 MB     | 8417 ms      | 847/847         | workspace-plan         |
| platform-probes  | 1        | 7128 ms  | 7151 ms  | 555.2 MB     | 8460 ms      | 845/845         | platform-probes        |
| import-loop      | 1        | 600 ms   | 601 ms   | 64 MB        | 300 ms       | 70/70           | import-loop-profile    |
