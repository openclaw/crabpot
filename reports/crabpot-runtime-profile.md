# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2156 ms            |
| Command P95 wall time  | 2222 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1839               |
| CPU samples            | 1839               |
| Max peak RSS           | 334.3 MB           |
| Max RSS delta          | 305.9 MB           |
| Max CPU estimate       | 2434 ms            |
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
| sourceFiles           | 1870  |
| observedHooks         | 107   |
| observedRegistrations | 206   |
| observedSdkImports    | 1248  |
| contractProbes        | 279   |
| issueFindings         | 290   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 34 ms       | 37 ms    | 30.2 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 1984 ms     | 1986 ms  | 316.3 MB     | 286.7 MB      | 2190 ms      | 7 MB       | 235/235         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2162 ms     | 2170 ms  | 327.6 MB     | 298.5 MB      | 2370 ms      | 7.1 MB     | 255/255         | 0          |
| contract-capture       | Contract capture inventory                      | 2156 ms     | 2179 ms  | 327.5 MB     | 298 MB        | 2364 ms      | 1 MB       | 258/258         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2167 ms     | 2176 ms  | 328 MB       | 299.5 MB      | 2375 ms      | 1.1 MB     | 257/257         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2154 ms     | 2158 ms  | 322.6 MB     | 294.2 MB      | 2367 ms      | 2.3 MB     | 256/256         | 0          |
| workspace-plan         | Workspace execution plan                        | 2176 ms     | 2207 ms  | 324.3 MB     | 295.9 MB      | 2397 ms      | 1.3 MB     | 259/259         | 0          |
| platform-probes        | Platform and loader probes                      | 2222 ms     | 2237 ms  | 334.3 MB     | 305.9 MB      | 2434 ms      | 1.2 MB     | 265/265         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 428 ms      | 457 ms   | 60.9 MB      | 32.5 MB       | 210 ms       | 1.6 MB     | 51/51           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 34 ms    | 37 ms    | 30.2 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 1984 ms  | 1986 ms  | 316.3 MB     | 2190 ms      | 235/235         | fixture-inspection     |
| target-registry  | 1        | 2162 ms  | 2170 ms  | 327.6 MB     | 2370 ms      | 255/255         | compat-report-registry |
| contract-capture | 1        | 2156 ms  | 2179 ms  | 327.5 MB     | 2364 ms      | 258/258         | contract-capture       |
| synthetic-probes | 1        | 2167 ms  | 2176 ms  | 328 MB       | 2375 ms      | 257/257         | synthetic-probe-plan   |
| cold-import      | 1        | 2154 ms  | 2158 ms  | 322.6 MB     | 2367 ms      | 256/256         | cold-import-readiness  |
| workspace-plan   | 1        | 2176 ms  | 2207 ms  | 324.3 MB     | 2397 ms      | 259/259         | workspace-plan         |
| platform-probes  | 1        | 2222 ms  | 2237 ms  | 334.3 MB     | 2434 ms      | 265/265         | platform-probes        |
| import-loop      | 1        | 428 ms   | 457 ms   | 60.9 MB      | 210 ms       | 51/51           | import-loop-profile    |
