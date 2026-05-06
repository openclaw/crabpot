# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2214 ms            |
| Command P95 wall time  | 2304 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1894               |
| CPU samples            | 1894               |
| Max peak RSS           | 440.3 MB           |
| Max RSS delta          | 410.7 MB           |
| Max CPU estimate       | 2510 ms            |
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
| sourceFiles           | 1776  |
| observedHooks         | 96    |
| observedRegistrations | 193   |
| observedSdkImports    | 1159  |
| contractProbes        | 300   |
| issueFindings         | 304   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 35 ms       | 36 ms    | 32.9 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2109 ms     | 2167 ms  | 431.4 MB     | 400.5 MB      | 2377 ms      | 7.5 MB     | 249/249         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2193 ms     | 2222 ms  | 431.7 MB     | 402.5 MB      | 2424 ms      | 7.2 MB     | 261/261         | 0          |
| contract-capture       | Contract capture inventory                      | 2214 ms     | 2255 ms  | 433.5 MB     | 402.1 MB      | 2492 ms      | 7.1 MB     | 263/263         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2248 ms     | 2266 ms  | 432 MB       | 403.2 MB      | 2438 ms      | 0.3 MB     | 264/264         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2238 ms     | 2267 ms  | 431.7 MB     | 403 MB        | 2487 ms      | 1.1 MB     | 265/265         | 0          |
| workspace-plan         | Workspace execution plan                        | 2249 ms     | 2255 ms  | 438.9 MB     | 410.2 MB      | 2460 ms      | 1.2 MB     | 267/267         | 0          |
| platform-probes        | Platform and loader probes                      | 2304 ms     | 2326 ms  | 440.3 MB     | 410.7 MB      | 2510 ms      | 1.4 MB     | 274/274         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 399 ms      | 404 ms   | 60.5 MB      | 31.8 MB       | 190 ms       | 1.4 MB     | 48/48           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 35 ms    | 36 ms    | 32.9 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2109 ms  | 2167 ms  | 431.4 MB     | 2377 ms      | 249/249         | fixture-inspection     |
| target-registry  | 1        | 2193 ms  | 2222 ms  | 431.7 MB     | 2424 ms      | 261/261         | compat-report-registry |
| contract-capture | 1        | 2214 ms  | 2255 ms  | 433.5 MB     | 2492 ms      | 263/263         | contract-capture       |
| synthetic-probes | 1        | 2248 ms  | 2266 ms  | 432 MB       | 2438 ms      | 264/264         | synthetic-probe-plan   |
| cold-import      | 1        | 2238 ms  | 2267 ms  | 431.7 MB     | 2487 ms      | 265/265         | cold-import-readiness  |
| workspace-plan   | 1        | 2249 ms  | 2255 ms  | 438.9 MB     | 2460 ms      | 267/267         | workspace-plan         |
| platform-probes  | 1        | 2304 ms  | 2326 ms  | 440.3 MB     | 2510 ms      | 274/274         | platform-probes        |
| import-loop      | 1        | 399 ms   | 404 ms   | 60.5 MB      | 190 ms       | 48/48           | import-loop-profile    |
