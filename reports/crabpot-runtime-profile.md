# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 1941 ms            |
| Command P95 wall time  | 2023 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1660               |
| CPU samples            | 1660               |
| Max peak RSS           | 323.4 MB           |
| Max RSS delta          | 294.9 MB           |
| Max CPU estimate       | 2168 ms            |
| Max harness heap delta | 6.6 MB             |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 66         |
| hookNames              | 39         |
| apiRegistrars          | 55         |
| capturedRegistrars     | 30         |
| sdkExports             | 318        |
| manifestFields         | 42         |
| manifestContractFields | 21         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 60    |
| sourceFiles           | 1993  |
| observedHooks         | 108   |
| observedRegistrations | 206   |
| observedSdkImports    | 1256  |
| contractProbes        | 282   |
| issueFindings         | 292   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 28 ms       | 28 ms    | 28.5 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 1796 ms     | 1821 ms  | 321.9 MB     | 293.4 MB      | 1928 ms      | 6.6 MB     | 214/214         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 1941 ms     | 1958 ms  | 322.2 MB     | 293.7 MB      | 2105 ms      | 6.5 MB     | 231/231         | 0          |
| contract-capture       | Contract capture inventory                      | 1950 ms     | 1976 ms  | 321.7 MB     | 293.3 MB      | 2128 ms      | 0.4 MB     | 232/232         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 1963 ms     | 1972 ms  | 317.5 MB     | 289 MB        | 2112 ms      | 0.9 MB     | 233/233         | 0          |
| cold-import-readiness  | Cold import readiness                           | 1929 ms     | 1937 ms  | 322.4 MB     | 294 MB        | 2076 ms      | 1.8 MB     | 230/230         | 0          |
| workspace-plan         | Workspace execution plan                        | 1947 ms     | 1964 ms  | 323.4 MB     | 294.9 MB      | 2068 ms      | 0.3 MB     | 233/233         | 0          |
| platform-probes        | Platform and loader probes                      | 2023 ms     | 2043 ms  | 322.9 MB     | 294.4 MB      | 2168 ms      | 0.6 MB     | 242/242         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 358 ms      | 363 ms   | 60.6 MB      | 32.3 MB       | 176 ms       | 1.3 MB     | 42/42           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 28 ms    | 28 ms    | 28.5 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 1796 ms  | 1821 ms  | 321.9 MB     | 1928 ms      | 214/214         | fixture-inspection     |
| target-registry  | 1        | 1941 ms  | 1958 ms  | 322.2 MB     | 2105 ms      | 231/231         | compat-report-registry |
| contract-capture | 1        | 1950 ms  | 1976 ms  | 321.7 MB     | 2128 ms      | 232/232         | contract-capture       |
| synthetic-probes | 1        | 1963 ms  | 1972 ms  | 317.5 MB     | 2112 ms      | 233/233         | synthetic-probe-plan   |
| cold-import      | 1        | 1929 ms  | 1937 ms  | 322.4 MB     | 2076 ms      | 230/230         | cold-import-readiness  |
| workspace-plan   | 1        | 1947 ms  | 1964 ms  | 323.4 MB     | 2068 ms      | 233/233         | workspace-plan         |
| platform-probes  | 1        | 2023 ms  | 2043 ms  | 322.9 MB     | 2168 ms      | 242/242         | platform-probes        |
| import-loop      | 1        | 358 ms   | 363 ms   | 60.6 MB      | 176 ms       | 42/42           | import-loop-profile    |
