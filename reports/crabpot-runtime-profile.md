# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2193 ms            |
| Command P95 wall time  | 2225 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1858               |
| CPU samples            | 1858               |
| Max peak RSS           | 450.1 MB           |
| Max RSS delta          | 419.3 MB           |
| Max CPU estimate       | 2451 ms            |
| Max harness heap delta | 7.5 MB             |

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
| sourceFiles           | 1774  |
| observedHooks         | 96    |
| observedRegistrations | 193   |
| observedSdkImports    | 1159  |
| contractProbes        | 299   |
| issueFindings         | 303   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 33 ms       | 38 ms    | 32.1 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2060 ms     | 2138 ms  | 448.1 MB     | 417.6 MB      | 2343 ms      | 7.5 MB     | 246/246         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2193 ms     | 2247 ms  | 450.1 MB     | 419.3 MB      | 2451 ms      | 7.3 MB     | 261/261         | 0          |
| contract-capture       | Contract capture inventory                      | 2194 ms     | 2199 ms  | 432.7 MB     | 402.9 MB      | 2390 ms      | 7 MB       | 258/258         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2199 ms     | 2205 ms  | 432.8 MB     | 404.1 MB      | 2403 ms      | 0 MB       | 257/257         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2162 ms     | 2217 ms  | 435.4 MB     | 406.7 MB      | 2410 ms      | 1 MB       | 260/260         | 0          |
| workspace-plan         | Workspace execution plan                        | 2207 ms     | 2210 ms  | 440.7 MB     | 412 MB        | 2417 ms      | 1 MB       | 263/263         | 0          |
| platform-probes        | Platform and loader probes                      | 2225 ms     | 2228 ms  | 439.8 MB     | 411.1 MB      | 2426 ms      | 1.1 MB     | 265/265         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 372 ms      | 374 ms   | 60.5 MB      | 31.4 MB       | 183 ms       | 1.3 MB     | 45/45           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 33 ms    | 38 ms    | 32.1 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2060 ms  | 2138 ms  | 448.1 MB     | 2343 ms      | 246/246         | fixture-inspection     |
| target-registry  | 1        | 2193 ms  | 2247 ms  | 450.1 MB     | 2451 ms      | 261/261         | compat-report-registry |
| contract-capture | 1        | 2194 ms  | 2199 ms  | 432.7 MB     | 2390 ms      | 258/258         | contract-capture       |
| synthetic-probes | 1        | 2199 ms  | 2205 ms  | 432.8 MB     | 2403 ms      | 257/257         | synthetic-probe-plan   |
| cold-import      | 1        | 2162 ms  | 2217 ms  | 435.4 MB     | 2410 ms      | 260/260         | cold-import-readiness  |
| workspace-plan   | 1        | 2207 ms  | 2210 ms  | 440.7 MB     | 2417 ms      | 263/263         | workspace-plan         |
| platform-probes  | 1        | 2225 ms  | 2228 ms  | 439.8 MB     | 2426 ms      | 265/265         | platform-probes        |
| import-loop      | 1        | 372 ms   | 374 ms   | 60.5 MB      | 183 ms       | 45/45           | import-loop-profile    |
