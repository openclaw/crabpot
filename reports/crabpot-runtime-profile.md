# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2254 ms            |
| Command P95 wall time  | 2334 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1929               |
| CPU samples            | 1929               |
| Max peak RSS           | 447.1 MB           |
| Max RSS delta          | 417.3 MB           |
| Max CPU estimate       | 2599 ms            |
| Max harness heap delta | 7.7 MB             |

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
| sourceFiles           | 1820  |
| observedHooks         | 97    |
| observedRegistrations | 194   |
| observedSdkImports    | 1161  |
| contractProbes        | 278   |
| issueFindings         | 282   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 39 ms       | 41 ms    | 32.5 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2166 ms     | 2191 ms  | 435.7 MB     | 405.6 MB      | 2387 ms      | 7.7 MB     | 256/256         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2224 ms     | 2240 ms  | 436.6 MB     | 406.3 MB      | 2453 ms      | 7.3 MB     | 265/265         | 0          |
| contract-capture       | Contract capture inventory                      | 2289 ms     | 2299 ms  | 436.7 MB     | 407.9 MB      | 2529 ms      | 7.5 MB     | 268/268         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2254 ms     | 2297 ms  | 436.8 MB     | 406.7 MB      | 2508 ms      | 1.1 MB     | 266/266         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2277 ms     | 2321 ms  | 444.3 MB     | 415.5 MB      | 2544 ms      | 0.1 MB     | 270/270         | 0          |
| workspace-plan         | Workspace execution plan                        | 2329 ms     | 2335 ms  | 443.9 MB     | 415.2 MB      | 2599 ms      | 1.6 MB     | 276/276         | 0          |
| platform-probes        | Platform and loader probes                      | 2334 ms     | 2366 ms  | 447.1 MB     | 417.3 MB      | 2558 ms      | 1.5 MB     | 278/278         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 399 ms      | 404 ms   | 60.9 MB      | 31.8 MB       | 184 ms       | 1.4 MB     | 47/47           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 39 ms    | 41 ms    | 32.5 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2166 ms  | 2191 ms  | 435.7 MB     | 2387 ms      | 256/256         | fixture-inspection     |
| target-registry  | 1        | 2224 ms  | 2240 ms  | 436.6 MB     | 2453 ms      | 265/265         | compat-report-registry |
| contract-capture | 1        | 2289 ms  | 2299 ms  | 436.7 MB     | 2529 ms      | 268/268         | contract-capture       |
| synthetic-probes | 1        | 2254 ms  | 2297 ms  | 436.8 MB     | 2508 ms      | 266/266         | synthetic-probe-plan   |
| cold-import      | 1        | 2277 ms  | 2321 ms  | 444.3 MB     | 2544 ms      | 270/270         | cold-import-readiness  |
| workspace-plan   | 1        | 2329 ms  | 2335 ms  | 443.9 MB     | 2599 ms      | 276/276         | workspace-plan         |
| platform-probes  | 1        | 2334 ms  | 2366 ms  | 447.1 MB     | 2558 ms      | 278/278         | platform-probes        |
| import-loop      | 1        | 399 ms   | 404 ms   | 60.9 MB      | 184 ms       | 47/47           | import-loop-profile    |
