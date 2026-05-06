# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2209 ms            |
| Command P95 wall time  | 2264 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1885               |
| CPU samples            | 1885               |
| Max peak RSS           | 448.1 MB           |
| Max RSS delta          | 417.8 MB           |
| Max CPU estimate       | 2529 ms            |
| Max harness heap delta | 7.4 MB             |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 60         |
| hookNames              | 35         |
| apiRegistrars          | 49         |
| capturedRegistrars     | 26         |
| sdkExports             | 296        |
| manifestFields         | 40         |
| manifestContractFields | 17         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 57    |
| sourceFiles           | 1784  |
| observedHooks         | 96    |
| observedRegistrations | 193   |
| observedSdkImports    | 1159  |
| contractProbes        | 299   |
| issueFindings         | 303   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 35 ms       | 37 ms    | 30.9 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2094 ms     | 2121 ms  | 431.9 MB     | 401.1 MB      | 2339 ms      | 7.4 MB     | 249/249         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2218 ms     | 2220 ms  | 431.6 MB     | 402.6 MB      | 2460 ms      | 7.2 MB     | 263/263         | 0          |
| contract-capture       | Contract capture inventory                      | 2234 ms     | 2322 ms  | 448.1 MB     | 417.8 MB      | 2529 ms      | 7.2 MB     | 268/268         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2209 ms     | 2213 ms  | 431.3 MB     | 402.6 MB      | 2403 ms      | 0.9 MB     | 260/260         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2183 ms     | 2185 ms  | 439.5 MB     | 410.8 MB      | 2406 ms      | 1 MB       | 259/259         | 0          |
| workspace-plan         | Workspace execution plan                        | 2250 ms     | 2257 ms  | 434.5 MB     | 404.9 MB      | 2480 ms      | 1.3 MB     | 267/267         | 0          |
| platform-probes        | Platform and loader probes                      | 2264 ms     | 2279 ms  | 437.6 MB     | 408.9 MB      | 2477 ms      | 1.3 MB     | 271/271         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 371 ms      | 376 ms   | 60.5 MB      | 31.8 MB       | 175 ms       | 1.4 MB     | 45/45           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 35 ms    | 37 ms    | 30.9 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2094 ms  | 2121 ms  | 431.9 MB     | 2339 ms      | 249/249         | fixture-inspection     |
| target-registry  | 1        | 2218 ms  | 2220 ms  | 431.6 MB     | 2460 ms      | 263/263         | compat-report-registry |
| contract-capture | 1        | 2234 ms  | 2322 ms  | 448.1 MB     | 2529 ms      | 268/268         | contract-capture       |
| synthetic-probes | 1        | 2209 ms  | 2213 ms  | 431.3 MB     | 2403 ms      | 260/260         | synthetic-probe-plan   |
| cold-import      | 1        | 2183 ms  | 2185 ms  | 439.5 MB     | 2406 ms      | 259/259         | cold-import-readiness  |
| workspace-plan   | 1        | 2250 ms  | 2257 ms  | 434.5 MB     | 2480 ms      | 267/267         | workspace-plan         |
| platform-probes  | 1        | 2264 ms  | 2279 ms  | 437.6 MB     | 2477 ms      | 271/271         | platform-probes        |
| import-loop      | 1        | 371 ms   | 376 ms   | 60.5 MB      | 175 ms       | 45/45           | import-loop-profile    |
