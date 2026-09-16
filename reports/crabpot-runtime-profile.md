# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 6113 ms            |
| Command P95 wall time  | 6407 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 5264               |
| CPU samples            | 5264               |
| Max peak RSS           | 307.4 MB           |
| Max RSS delta          | 280.8 MB           |
| Max CPU estimate       | 7376 ms            |
| Max harness heap delta | 16.4 MB            |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 34         |
| hookNames              | 42         |
| apiRegistrars          | 57         |
| capturedRegistrars     | 31         |
| sdkExports             | 338        |
| manifestFields         | 52         |
| manifestContractFields | 22         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 59    |
| sourceFiles           | 2221  |
| observedHooks         | 113   |
| observedRegistrations | 213   |
| observedSdkImports    | 1174  |
| contractProbes        | 260   |
| issueFindings         | 292   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 27 ms       | 29 ms    | 28 MB        | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 5952 ms     | 5993 ms  | 302.8 MB     | 276.3 MB      | 7047 ms      | 16.4 MB    | 711/711         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 6139 ms     | 6144 ms  | 300.6 MB     | 272.8 MB      | 7201 ms      | 14.8 MB    | 731/731         | 0          |
| contract-capture       | Contract capture inventory                      | 6217 ms     | 6272 ms  | 303.8 MB     | 277.2 MB      | 7276 ms      | 11.7 MB    | 742/742         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 6322 ms     | 6386 ms  | 305 MB       | 278.4 MB      | 7376 ms      | 11.9 MB    | 755/755         | 0          |
| cold-import-readiness  | Cold import readiness                           | 6062 ms     | 6065 ms  | 307.1 MB     | 280.5 MB      | 7159 ms      | 11.5 MB    | 725/725         | 0          |
| workspace-plan         | Workspace execution plan                        | 6113 ms     | 6132 ms  | 307.4 MB     | 280.8 MB      | 7199 ms      | 11.5 MB    | 728/728         | 0          |
| platform-probes        | Platform and loader probes                      | 6407 ms     | 6429 ms  | 304.1 MB     | 276.9 MB      | 7355 ms      | 12.2 MB    | 766/766         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 862 ms      | 866 ms   | 76.8 MB      | 50.1 MB       | 491 ms       | 1.7 MB     | 103/103         | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 27 ms    | 29 ms    | 28 MB        | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 5952 ms  | 5993 ms  | 302.8 MB     | 7047 ms      | 711/711         | fixture-inspection     |
| target-registry  | 1        | 6139 ms  | 6144 ms  | 300.6 MB     | 7201 ms      | 731/731         | compat-report-registry |
| contract-capture | 1        | 6217 ms  | 6272 ms  | 303.8 MB     | 7276 ms      | 742/742         | contract-capture       |
| synthetic-probes | 1        | 6322 ms  | 6386 ms  | 305 MB       | 7376 ms      | 755/755         | synthetic-probe-plan   |
| cold-import      | 1        | 6062 ms  | 6065 ms  | 307.1 MB     | 7159 ms      | 725/725         | cold-import-readiness  |
| workspace-plan   | 1        | 6113 ms  | 6132 ms  | 307.4 MB     | 7199 ms      | 728/728         | workspace-plan         |
| platform-probes  | 1        | 6407 ms  | 6429 ms  | 304.1 MB     | 7355 ms      | 766/766         | platform-probes        |
| import-loop      | 1        | 862 ms   | 866 ms   | 76.8 MB      | 491 ms       | 103/103         | import-loop-profile    |
