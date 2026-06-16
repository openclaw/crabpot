# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2128 ms            |
| Command P95 wall time  | 2208 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1818               |
| CPU samples            | 1818               |
| Max peak RSS           | 329.5 MB           |
| Max RSS delta          | 301.1 MB           |
| Max CPU estimate       | 2440 ms            |
| Max harness heap delta | 7 MB               |

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
| sourceFiles           | 1994  |
| observedHooks         | 108   |
| observedRegistrations | 206   |
| observedSdkImports    | 1256  |
| contractProbes        | 282   |
| issueFindings         | 292   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 35 ms       | 37 ms    | 29.7 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 1965 ms     | 2006 ms  | 321.3 MB     | 292.4 MB      | 2193 ms      | 6.9 MB     | 235/235         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2108 ms     | 2133 ms  | 322.2 MB     | 293.3 MB      | 2361 ms      | 7 MB       | 251/251         | 0          |
| contract-capture       | Contract capture inventory                      | 2129 ms     | 2149 ms  | 323.8 MB     | 295.4 MB      | 2316 ms      | 0.8 MB     | 251/251         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2129 ms     | 2138 ms  | 323.5 MB     | 295 MB        | 2328 ms      | 1 MB       | 253/253         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2128 ms     | 2131 ms  | 323.3 MB     | 294.9 MB      | 2355 ms      | 0.9 MB     | 251/251         | 0          |
| workspace-plan         | Workspace execution plan                        | 2179 ms     | 2216 ms  | 321.3 MB     | 292.3 MB      | 2440 ms      | 1.1 MB     | 261/261         | 0          |
| platform-probes        | Platform and loader probes                      | 2208 ms     | 2212 ms  | 329.5 MB     | 301.1 MB      | 2402 ms      | 1.2 MB     | 261/261         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 437 ms      | 462 ms   | 60.6 MB      | 32.2 MB       | 215 ms       | 1.6 MB     | 52/52           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 35 ms    | 37 ms    | 29.7 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 1965 ms  | 2006 ms  | 321.3 MB     | 2193 ms      | 235/235         | fixture-inspection     |
| target-registry  | 1        | 2108 ms  | 2133 ms  | 322.2 MB     | 2361 ms      | 251/251         | compat-report-registry |
| contract-capture | 1        | 2129 ms  | 2149 ms  | 323.8 MB     | 2316 ms      | 251/251         | contract-capture       |
| synthetic-probes | 1        | 2129 ms  | 2138 ms  | 323.5 MB     | 2328 ms      | 253/253         | synthetic-probe-plan   |
| cold-import      | 1        | 2128 ms  | 2131 ms  | 323.3 MB     | 2355 ms      | 251/251         | cold-import-readiness  |
| workspace-plan   | 1        | 2179 ms  | 2216 ms  | 321.3 MB     | 2440 ms      | 261/261         | workspace-plan         |
| platform-probes  | 1        | 2208 ms  | 2212 ms  | 329.5 MB     | 2402 ms      | 261/261         | platform-probes        |
| import-loop      | 1        | 437 ms   | 462 ms   | 60.6 MB      | 215 ms       | 52/52           | import-loop-profile    |
