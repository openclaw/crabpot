# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 5092 ms            |
| Command P95 wall time  | 5223 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 4325               |
| CPU samples            | 4325               |
| Max peak RSS           | 458.5 MB           |
| Max RSS delta          | 428.7 MB           |
| Max CPU estimate       | 5710 ms            |
| Max harness heap delta | 5.7 MB             |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 0          |
| hookNames              | 42         |
| apiRegistrars          | 59         |
| capturedRegistrars     | 32         |
| sdkExports             | 331        |
| manifestFields         | 45         |
| manifestContractFields | 23         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 60    |
| sourceFiles           | 2031  |
| observedHooks         | 110   |
| observedRegistrations | 211   |
| observedSdkImports    | 1325  |
| contractProbes        | 276   |
| issueFindings         | 401   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 29 ms       | 29 ms    | 31.2 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 4966 ms     | 4968 ms  | 433.5 MB     | 404.5 MB      | 5368 ms      | 5.7 MB     | 593/593         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 5092 ms     | 5136 ms  | 454.5 MB     | 424.7 MB      | 5557 ms      | 4.9 MB     | 608/608         | 0          |
| contract-capture       | Contract capture inventory                      | 5088 ms     | 5092 ms  | 455.3 MB     | 426.3 MB      | 5485 ms      | 4.7 MB     | 607/607         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 5147 ms     | 5164 ms  | 456 MB       | 427.2 MB      | 5567 ms      | 4.9 MB     | 612/612         | 0          |
| cold-import-readiness  | Cold import readiness                           | 5145 ms     | 5277 ms  | 458.5 MB     | 428.7 MB      | 5710 ms      | 4.9 MB     | 619/619         | 0          |
| workspace-plan         | Workspace execution plan                        | 5216 ms     | 5224 ms  | 454.7 MB     | 426.3 MB      | 5673 ms      | 4.9 MB     | 619/619         | 0          |
| platform-probes        | Platform and loader probes                      | 5223 ms     | 5328 ms  | 455.2 MB     | 425.6 MB      | 5701 ms      | 5.3 MB     | 625/625         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 341 ms      | 341 ms   | 60.7 MB      | 32.3 MB       | 147 ms       | -0.2 MB    | 39/39           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 29 ms    | 29 ms    | 31.2 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 4966 ms  | 4968 ms  | 433.5 MB     | 5368 ms      | 593/593         | fixture-inspection     |
| target-registry  | 1        | 5092 ms  | 5136 ms  | 454.5 MB     | 5557 ms      | 608/608         | compat-report-registry |
| contract-capture | 1        | 5088 ms  | 5092 ms  | 455.3 MB     | 5485 ms      | 607/607         | contract-capture       |
| synthetic-probes | 1        | 5147 ms  | 5164 ms  | 456 MB       | 5567 ms      | 612/612         | synthetic-probe-plan   |
| cold-import      | 1        | 5145 ms  | 5277 ms  | 458.5 MB     | 5710 ms      | 619/619         | cold-import-readiness  |
| workspace-plan   | 1        | 5216 ms  | 5224 ms  | 454.7 MB     | 5673 ms      | 619/619         | workspace-plan         |
| platform-probes  | 1        | 5223 ms  | 5328 ms  | 455.2 MB     | 5701 ms      | 625/625         | platform-probes        |
| import-loop      | 1        | 341 ms   | 341 ms   | 60.7 MB      | 147 ms       | 39/39           | import-loop-profile    |
