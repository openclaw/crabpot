# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2151 ms            |
| Command P95 wall time  | 2230 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1842               |
| CPU samples            | 1842               |
| Max peak RSS           | 331.8 MB           |
| Max RSS delta          | 303.4 MB           |
| Max CPU estimate       | 2449 ms            |
| Max harness heap delta | 7.2 MB             |

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
| sourceFiles           | 1970  |
| observedHooks         | 108   |
| observedRegistrations | 206   |
| observedSdkImports    | 1253  |
| contractProbes        | 281   |
| issueFindings         | 291   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 33 ms       | 36 ms    | 31.1 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 1980 ms     | 1988 ms  | 321.8 MB     | 293.4 MB      | 2167 ms      | 7.2 MB     | 236/236         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2155 ms     | 2189 ms  | 322.5 MB     | 294.1 MB      | 2364 ms      | 7.2 MB     | 257/257         | 0          |
| contract-capture       | Contract capture inventory                      | 2191 ms     | 2211 ms  | 322.6 MB     | 294.1 MB      | 2390 ms      | 0.2 MB     | 259/259         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2151 ms     | 2176 ms  | 322.1 MB     | 293 MB        | 2389 ms      | 1 MB       | 257/257         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2107 ms     | 2142 ms  | 331.8 MB     | 303.4 MB      | 2311 ms      | 2.3 MB     | 252/252         | 0          |
| workspace-plan         | Workspace execution plan                        | 2155 ms     | 2177 ms  | 326.3 MB     | 297.5 MB      | 2362 ms      | 1 MB       | 258/258         | 0          |
| platform-probes        | Platform and loader probes                      | 2230 ms     | 2255 ms  | 324.5 MB     | 296.1 MB      | 2449 ms      | 1.4 MB     | 266/266         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 464 ms      | 471 ms   | 60.7 MB      | 32.2 MB       | 220 ms       | 1.6 MB     | 54/54           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 33 ms    | 36 ms    | 31.1 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 1980 ms  | 1988 ms  | 321.8 MB     | 2167 ms      | 236/236         | fixture-inspection     |
| target-registry  | 1        | 2155 ms  | 2189 ms  | 322.5 MB     | 2364 ms      | 257/257         | compat-report-registry |
| contract-capture | 1        | 2191 ms  | 2211 ms  | 322.6 MB     | 2390 ms      | 259/259         | contract-capture       |
| synthetic-probes | 1        | 2151 ms  | 2176 ms  | 322.1 MB     | 2389 ms      | 257/257         | synthetic-probe-plan   |
| cold-import      | 1        | 2107 ms  | 2142 ms  | 331.8 MB     | 2311 ms      | 252/252         | cold-import-readiness  |
| workspace-plan   | 1        | 2155 ms  | 2177 ms  | 326.3 MB     | 2362 ms      | 258/258         | workspace-plan         |
| platform-probes  | 1        | 2230 ms  | 2255 ms  | 324.5 MB     | 2449 ms      | 266/266         | platform-probes        |
| import-loop      | 1        | 464 ms   | 471 ms   | 60.7 MB      | 220 ms       | 54/54           | import-loop-profile    |
