# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 6122 ms            |
| Command P95 wall time  | 6396 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 5251               |
| CPU samples            | 5251               |
| Max peak RSS           | 305.2 MB           |
| Max RSS delta          | 278.6 MB           |
| Max CPU estimate       | 7337 ms            |
| Max harness heap delta | 16.3 MB            |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 0          |
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
| sourceFiles           | 2211  |
| observedHooks         | 113   |
| observedRegistrations | 213   |
| observedSdkImports    | 1170  |
| contractProbes        | 241   |
| issueFindings         | 346   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 28 ms       | 29 ms    | 27.2 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 5945 ms     | 5971 ms  | 294.7 MB     | 266.7 MB      | 7076 ms      | 16.3 MB    | 707/707         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 6122 ms     | 6124 ms  | 300.1 MB     | 273.5 MB      | 7150 ms      | 14.8 MB    | 728/728         | 0          |
| contract-capture       | Contract capture inventory                      | 6172 ms     | 6269 ms  | 299.4 MB     | 272.8 MB      | 7285 ms      | 11.7 MB    | 741/741         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 6233 ms     | 6264 ms  | 301.6 MB     | 275 MB        | 7235 ms      | 11.7 MB    | 742/742         | 0          |
| cold-import-readiness  | Cold import readiness                           | 6103 ms     | 6129 ms  | 302.7 MB     | 276.1 MB      | 7208 ms      | 11.6 MB    | 729/729         | 0          |
| workspace-plan         | Workspace execution plan                        | 6136 ms     | 6185 ms  | 299.8 MB     | 271.9 MB      | 7218 ms      | 11.5 MB    | 731/731         | 0          |
| platform-probes        | Platform and loader probes                      | 6396 ms     | 6459 ms  | 305.2 MB     | 278.6 MB      | 7337 ms      | 12.1 MB    | 764/764         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 869 ms      | 898 ms   | 76.7 MB      | 50.1 MB       | 497 ms       | 1.8 MB     | 106/106         | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 28 ms    | 29 ms    | 27.2 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 5945 ms  | 5971 ms  | 294.7 MB     | 7076 ms      | 707/707         | fixture-inspection     |
| target-registry  | 1        | 6122 ms  | 6124 ms  | 300.1 MB     | 7150 ms      | 728/728         | compat-report-registry |
| contract-capture | 1        | 6172 ms  | 6269 ms  | 299.4 MB     | 7285 ms      | 741/741         | contract-capture       |
| synthetic-probes | 1        | 6233 ms  | 6264 ms  | 301.6 MB     | 7235 ms      | 742/742         | synthetic-probe-plan   |
| cold-import      | 1        | 6103 ms  | 6129 ms  | 302.7 MB     | 7208 ms      | 729/729         | cold-import-readiness  |
| workspace-plan   | 1        | 6136 ms  | 6185 ms  | 299.8 MB     | 7218 ms      | 731/731         | workspace-plan         |
| platform-probes  | 1        | 6396 ms  | 6459 ms  | 305.2 MB     | 7337 ms      | 764/764         | platform-probes        |
| import-loop      | 1        | 869 ms   | 898 ms   | 76.7 MB      | 497 ms       | 106/106         | import-loop-profile    |
