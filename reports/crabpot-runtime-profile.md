# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2086 ms            |
| Command P95 wall time  | 2175 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1786               |
| CPU samples            | 1786               |
| Max peak RSS           | 325.6 MB           |
| Max RSS delta          | 297.2 MB           |
| Max CPU estimate       | 2358 ms            |
| Max harness heap delta | 7.1 MB             |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 66         |
| hookNames              | 39         |
| apiRegistrars          | 55         |
| capturedRegistrars     | 30         |
| sdkExports             | 317        |
| manifestFields         | 42         |
| manifestContractFields | 20         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 60    |
| sourceFiles           | 1968  |
| observedHooks         | 108   |
| observedRegistrations | 206   |
| observedSdkImports    | 1252  |
| contractProbes        | 281   |
| issueFindings         | 291   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 35 ms       | 37 ms    | 30.5 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 1959 ms     | 1968 ms  | 322.1 MB     | 293 MB        | 2143 ms      | 7.1 MB     | 233/233         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2086 ms     | 2106 ms  | 322.6 MB     | 294.2 MB      | 2312 ms      | 6.9 MB     | 249/249         | 0          |
| contract-capture       | Contract capture inventory                      | 2103 ms     | 2115 ms  | 323.5 MB     | 295.1 MB      | 2315 ms      | 0.6 MB     | 248/248         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2104 ms     | 2113 ms  | 323.6 MB     | 295.2 MB      | 2303 ms      | 1 MB       | 250/250         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2078 ms     | 2081 ms  | 325.6 MB     | 297.2 MB      | 2272 ms      | 0.8 MB     | 245/245         | 0          |
| workspace-plan         | Workspace execution plan                        | 2113 ms     | 2118 ms  | 319.6 MB     | 290.8 MB      | 2297 ms      | 0.8 MB     | 252/252         | 0          |
| platform-probes        | Platform and loader probes                      | 2175 ms     | 2183 ms  | 324.2 MB     | 295.8 MB      | 2358 ms      | 1.1 MB     | 258/258         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 407 ms      | 409 ms   | 60.6 MB      | 32.2 MB       | 205 ms       | 1.4 MB     | 48/48           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 35 ms    | 37 ms    | 30.5 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 1959 ms  | 1968 ms  | 322.1 MB     | 2143 ms      | 233/233         | fixture-inspection     |
| target-registry  | 1        | 2086 ms  | 2106 ms  | 322.6 MB     | 2312 ms      | 249/249         | compat-report-registry |
| contract-capture | 1        | 2103 ms  | 2115 ms  | 323.5 MB     | 2315 ms      | 248/248         | contract-capture       |
| synthetic-probes | 1        | 2104 ms  | 2113 ms  | 323.6 MB     | 2303 ms      | 250/250         | synthetic-probe-plan   |
| cold-import      | 1        | 2078 ms  | 2081 ms  | 325.6 MB     | 2272 ms      | 245/245         | cold-import-readiness  |
| workspace-plan   | 1        | 2113 ms  | 2118 ms  | 319.6 MB     | 2297 ms      | 252/252         | workspace-plan         |
| platform-probes  | 1        | 2175 ms  | 2183 ms  | 324.2 MB     | 2358 ms      | 258/258         | platform-probes        |
| import-loop      | 1        | 407 ms   | 409 ms   | 60.6 MB      | 205 ms       | 48/48           | import-loop-profile    |
