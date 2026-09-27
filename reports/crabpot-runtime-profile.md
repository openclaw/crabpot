# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 11291 ms           |
| Command P95 wall time  | 11553 ms           |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 9517               |
| CPU samples            | 9517               |
| Max peak RSS           | 756.3 MB           |
| Max RSS delta          | 728.6 MB           |
| Max CPU estimate       | 15495 ms           |
| Max harness heap delta | 29.2 MB            |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 32         |
| hookNames              | 42         |
| apiRegistrars          | 59         |
| capturedRegistrars     | 31         |
| sdkExports             | 352        |
| manifestFields         | 57         |
| manifestContractFields | 24         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 59    |
| sourceFiles           | 2305  |
| observedHooks         | 113   |
| observedRegistrations | 219   |
| observedSdkImports    | 1195  |
| contractProbes        | 218   |
| issueFindings         | 250   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 32 ms       | 35 ms    | 29.1 MB      | 0 MB          | 32 ms        | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 11118 ms    | 11265 ms | 755.5 MB     | 726.8 MB      | 15230 ms     | 29.2 MB    | 1322/1322       | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 11386 ms    | 11461 ms | 755.7 MB     | 726.9 MB      | 15381 ms     | 21 MB      | 1346/1346       | 0          |
| contract-capture       | Contract capture inventory                      | 11441 ms    | 11487 ms | 753.2 MB     | 726.6 MB      | 15358 ms     | 20.9 MB    | 1351/1351       | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 11425 ms    | 11455 ms | 754.8 MB     | 726.8 MB      | 15292 ms     | 20.9 MB    | 1349/1349       | 0          |
| cold-import-readiness  | Cold import readiness                           | 11239 ms    | 11284 ms | 754.9 MB     | 727.2 MB      | 15263 ms     | 20.5 MB    | 1331/1331       | 0          |
| workspace-plan         | Workspace execution plan                        | 11291 ms    | 11337 ms | 756.3 MB     | 728.6 MB      | 15390 ms     | 20.3 MB    | 1335/1335       | 0          |
| platform-probes        | Platform and loader probes                      | 11553 ms    | 11721 ms | 756.2 MB     | 728.3 MB      | 15495 ms     | 20.9 MB    | 1372/1372       | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 910 ms      | 911 ms   | 78.4 MB      | 51.2 MB       | 511 ms       | 1.7 MB     | 108/108         | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 32 ms    | 35 ms    | 29.1 MB      | 32 ms        | 3/3             | node-boot              |
| fixture-scan     | 1        | 11118 ms | 11265 ms | 755.5 MB     | 15230 ms     | 1322/1322       | fixture-inspection     |
| target-registry  | 1        | 11386 ms | 11461 ms | 755.7 MB     | 15381 ms     | 1346/1346       | compat-report-registry |
| contract-capture | 1        | 11441 ms | 11487 ms | 753.2 MB     | 15358 ms     | 1351/1351       | contract-capture       |
| synthetic-probes | 1        | 11425 ms | 11455 ms | 754.8 MB     | 15292 ms     | 1349/1349       | synthetic-probe-plan   |
| cold-import      | 1        | 11239 ms | 11284 ms | 754.9 MB     | 15263 ms     | 1331/1331       | cold-import-readiness  |
| workspace-plan   | 1        | 11291 ms | 11337 ms | 756.3 MB     | 15390 ms     | 1335/1335       | workspace-plan         |
| platform-probes  | 1        | 11553 ms | 11721 ms | 756.2 MB     | 15495 ms     | 1372/1372       | platform-probes        |
| import-loop      | 1        | 910 ms   | 911 ms   | 78.4 MB      | 511 ms       | 108/108         | import-loop-profile    |
