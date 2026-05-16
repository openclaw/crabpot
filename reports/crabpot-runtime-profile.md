# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 3969 ms            |
| Command P95 wall time  | 7804 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 328                |
| CPU samples            | 328                |
| Max peak RSS           | 521.8 MB           |
| Max RSS delta          | 521.5 MB           |
| Max CPU estimate       | 2072 ms            |
| Max harness heap delta | 5.3 MB             |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 60         |
| hookNames              | 36         |
| apiRegistrars          | 53         |
| capturedRegistrars     | 28         |
| sdkExports             | 307        |
| manifestFields         | 41         |
| manifestContractFields | 17         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 60    |
| sourceFiles           | 1783  |
| observedHooks         | 106   |
| observedRegistrations | 196   |
| observedSdkImports    | 1193  |
| contractProbes        | 278   |
| issueFindings         | 283   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 806 ms      | 808 ms   | 0.4 MB       | 0 MB          | 0 ms         | 1 MB       | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2752 ms     | 3074 ms  | 521.8 MB     | 521.5 MB      | 1343 ms      | 2.7 MB     | 24/24           | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 3365 ms     | 3933 ms  | 504.7 MB     | 504.4 MB      | 1380 ms      | 3.4 MB     | 32/32           | 0          |
| contract-capture       | Contract capture inventory                      | 6028 ms     | 6337 ms  | 479.9 MB     | 479.6 MB      | 2072 ms      | 5.3 MB     | 55/55           | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 4325 ms     | 4547 ms  | 515.1 MB     | 514.8 MB      | 1682 ms      | 3.8 MB     | 39/39           | 0          |
| cold-import-readiness  | Cold import readiness                           | 3338 ms     | 3886 ms  | 514.6 MB     | 514.4 MB      | 2048 ms      | 0.6 MB     | 29/29           | 0          |
| workspace-plan         | Workspace execution plan                        | 3969 ms     | 4546 ms  | 510.1 MB     | 509.8 MB      | 2000 ms      | 0.6 MB     | 34/34           | 0          |
| platform-probes        | Platform and loader probes                      | 6479 ms     | 7753 ms  | 476.3 MB     | 476 MB        | 2008 ms      | 0.4 MB     | 65/65           | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 7804 ms     | 8489 ms  | 59.9 MB      | 59.6 MB       | 304 ms       | 0.2 MB     | 47/47           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 806 ms   | 808 ms   | 0.4 MB       | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2752 ms  | 3074 ms  | 521.8 MB     | 1343 ms      | 24/24           | fixture-inspection     |
| target-registry  | 1        | 3365 ms  | 3933 ms  | 504.7 MB     | 1380 ms      | 32/32           | compat-report-registry |
| contract-capture | 1        | 6028 ms  | 6337 ms  | 479.9 MB     | 2072 ms      | 55/55           | contract-capture       |
| synthetic-probes | 1        | 4325 ms  | 4547 ms  | 515.1 MB     | 1682 ms      | 39/39           | synthetic-probe-plan   |
| cold-import      | 1        | 3338 ms  | 3886 ms  | 514.6 MB     | 2048 ms      | 29/29           | cold-import-readiness  |
| workspace-plan   | 1        | 3969 ms  | 4546 ms  | 510.1 MB     | 2000 ms      | 34/34           | workspace-plan         |
| platform-probes  | 1        | 6479 ms  | 7753 ms  | 476.3 MB     | 2008 ms      | 65/65           | platform-probes        |
| import-loop      | 1        | 7804 ms  | 8489 ms  | 59.9 MB      | 304 ms       | 47/47           | import-loop-profile    |
