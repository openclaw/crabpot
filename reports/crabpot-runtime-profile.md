# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 6140 ms            |
| Command P95 wall time  | 6473 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 5273               |
| CPU samples            | 5273               |
| Max peak RSS           | 313.5 MB           |
| Max RSS delta          | 286.9 MB           |
| Max CPU estimate       | 7454 ms            |
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
| node-boot              | Node boot                                       | 28 ms       | 33 ms    | 28.8 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 5970 ms     | 6019 ms  | 299.9 MB     | 272.8 MB      | 7048 ms      | 16.4 MB    | 716/716         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 6140 ms     | 6193 ms  | 298.6 MB     | 271.9 MB      | 7258 ms      | 14.8 MB    | 730/730         | 0          |
| contract-capture       | Contract capture inventory                      | 6200 ms     | 6232 ms  | 304.5 MB     | 276.7 MB      | 7242 ms      | 11.7 MB    | 740/740         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 6280 ms     | 6353 ms  | 302.6 MB     | 276 MB        | 7363 ms      | 12 MB      | 751/751         | 0          |
| cold-import-readiness  | Cold import readiness                           | 6087 ms     | 6101 ms  | 300.3 MB     | 273.8 MB      | 7158 ms      | 11.4 MB    | 724/724         | 0          |
| workspace-plan         | Workspace execution plan                        | 6146 ms     | 6160 ms  | 313.5 MB     | 286.9 MB      | 7263 ms      | 11.6 MB    | 735/735         | 0          |
| platform-probes        | Platform and loader probes                      | 6473 ms     | 6476 ms  | 306.1 MB     | 278.3 MB      | 7454 ms      | 12.1 MB    | 771/771         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 865 ms      | 869 ms   | 76.9 MB      | 50.3 MB       | 494 ms       | 1.7 MB     | 103/103         | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 28 ms    | 33 ms    | 28.8 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 5970 ms  | 6019 ms  | 299.9 MB     | 7048 ms      | 716/716         | fixture-inspection     |
| target-registry  | 1        | 6140 ms  | 6193 ms  | 298.6 MB     | 7258 ms      | 730/730         | compat-report-registry |
| contract-capture | 1        | 6200 ms  | 6232 ms  | 304.5 MB     | 7242 ms      | 740/740         | contract-capture       |
| synthetic-probes | 1        | 6280 ms  | 6353 ms  | 302.6 MB     | 7363 ms      | 751/751         | synthetic-probe-plan   |
| cold-import      | 1        | 6087 ms  | 6101 ms  | 300.3 MB     | 7158 ms      | 724/724         | cold-import-readiness  |
| workspace-plan   | 1        | 6146 ms  | 6160 ms  | 313.5 MB     | 7263 ms      | 735/735         | workspace-plan         |
| platform-probes  | 1        | 6473 ms  | 6476 ms  | 306.1 MB     | 7454 ms      | 771/771         | platform-probes        |
| import-loop      | 1        | 865 ms   | 869 ms   | 76.9 MB      | 494 ms       | 103/103         | import-loop-profile    |
