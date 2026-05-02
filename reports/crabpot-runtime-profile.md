# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 1

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 6340 ms            |
| Command P95 wall time  | 7859 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 9                  |
| RSS samples            | 1735               |
| CPU samples            | 1735               |
| Max peak RSS           | 531.3 MB           |
| Max RSS delta          | 529.1 MB           |
| Max CPU estimate       | 2341 ms            |
| Max harness heap delta | 19 MB              |

## Target OpenClaw Registry Surface

| Metric                 | Value                  |
| ---------------------- | ---------------------- |
| status                 | ok                     |
| configuredPath         | .crabpot/openclaw-main |
| compatRecords          | 60                     |
| hookNames              | 35                     |
| apiRegistrars          | 49                     |
| capturedRegistrars     | 26                     |
| sdkExports             | 294                    |
| manifestFields         | 39                     |
| manifestContractFields | 17                     |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 57    |
| sourceFiles           | 2315  |
| observedHooks         | 90    |
| observedRegistrations | 168   |
| observedSdkImports    | 572   |
| contractProbes        | 310   |
| issueFindings         | 325   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 201 ms      | 201 ms   | 43.6 MB      | 41.4 MB       | 8 ms         | 2.1 MB     | 6/6             | 0          |
| fixture-inspection     | Fixture inspection                              | 6816 ms     | 6816 ms  | 470.9 MB     | 470.6 MB      | 1704 ms      | 5.8 MB     | 240/240         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 6214 ms     | 6214 ms  | 528.6 MB     | 528 MB        | 2212 ms      | 1.8 MB     | 224/224         | 0          |
| contract-capture       | Contract capture inventory                      | 7859 ms     | 7859 ms  | 517.6 MB     | 517.2 MB      | 2043 ms      | 12.3 MB    | 273/273         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 6737 ms     | 6737 ms  | 477.9 MB     | 475.7 MB      | 1806 ms      | 2 MB       | 237/237         | 0          |
| cold-import-readiness  | Cold import readiness                           | 5753 ms     | 5753 ms  | 495.5 MB     | 493.6 MB      | 1835 ms      | -4.8 MB    | 206/206         | 0          |
| workspace-plan         | Workspace execution plan                        | 6340 ms     | 6340 ms  | 495.9 MB     | 494.2 MB      | 1750 ms      | 0.2 MB     | 228/228         | 0          |
| platform-probes        | Platform and loader probes                      | 6613 ms     | 6613 ms  | 531.3 MB     | 529.1 MB      | 2341 ms      | 1.4 MB     | 236/236         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 2446 ms     | 2446 ms  | 60.4 MB      | 58.9 MB       | 313 ms       | 19 MB      | 85/85           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 201 ms   | 201 ms   | 43.6 MB      | 8 ms         | 6/6             | node-boot              |
| fixture-scan     | 1        | 6816 ms  | 6816 ms  | 470.9 MB     | 1704 ms      | 240/240         | fixture-inspection     |
| target-registry  | 1        | 6214 ms  | 6214 ms  | 528.6 MB     | 2212 ms      | 224/224         | compat-report-registry |
| contract-capture | 1        | 7859 ms  | 7859 ms  | 517.6 MB     | 2043 ms      | 273/273         | contract-capture       |
| synthetic-probes | 1        | 6737 ms  | 6737 ms  | 477.9 MB     | 1806 ms      | 237/237         | synthetic-probe-plan   |
| cold-import      | 1        | 5753 ms  | 5753 ms  | 495.5 MB     | 1835 ms      | 206/206         | cold-import-readiness  |
| workspace-plan   | 1        | 6340 ms  | 6340 ms  | 495.9 MB     | 1750 ms      | 228/228         | workspace-plan         |
| platform-probes  | 1        | 6613 ms  | 6613 ms  | 531.3 MB     | 2341 ms      | 236/236         | platform-probes        |
| import-loop      | 1        | 2446 ms  | 2446 ms  | 60.4 MB      | 313 ms       | 85/85           | import-loop-profile    |
