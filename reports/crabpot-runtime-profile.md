# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 3077 ms            |
| Command P95 wall time  | 3249 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 2535               |
| CPU samples            | 2535               |
| Max peak RSS           | 593.1 MB           |
| Max RSS delta          | 592.5 MB           |
| Max CPU estimate       | 3133 ms            |
| Max harness heap delta | 10.8 MB            |

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
| sourceFiles           | 2075  |
| observedHooks         | 111   |
| observedRegistrations | 213   |
| observedSdkImports    | 1367  |
| contractProbes        | 275   |
| issueFindings         | 397   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 28 ms       | 30 ms    | 1 MB         | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 3249 ms     | 3340 ms  | 576.3 MB     | 575.7 MB      | 3133 ms      | 10.8 MB    | 370/370         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 3077 ms     | 3323 ms  | 525 MB       | 524.3 MB      | 3110 ms      | 10.8 MB    | 359/359         | 0          |
| contract-capture       | Contract capture inventory                      | 3087 ms     | 3112 ms  | 577 MB       | 576.5 MB      | 2882 ms      | 10 MB      | 351/351         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 3071 ms     | 3100 ms  | 576.7 MB     | 576.3 MB      | 2871 ms      | 9.9 MB     | 347/347         | 0          |
| cold-import-readiness  | Cold import readiness                           | 3076 ms     | 3165 ms  | 576.5 MB     | 576.2 MB      | 2912 ms      | 8.5 MB     | 349/349         | 0          |
| workspace-plan         | Workspace execution plan                        | 3195 ms     | 3272 ms  | 593.1 MB     | 592.5 MB      | 3063 ms      | 8.7 MB     | 362/362         | 0          |
| platform-probes        | Platform and loader probes                      | 3193 ms     | 3225 ms  | 586.9 MB     | 586.3 MB      | 2983 ms      | 8.5 MB     | 363/363         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 268 ms      | 273 ms   | 68 MB        | 67.4 MB       | 29 ms        | 0.8 MB     | 31/31           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 28 ms    | 30 ms    | 1 MB         | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 3249 ms  | 3340 ms  | 576.3 MB     | 3133 ms      | 370/370         | fixture-inspection     |
| target-registry  | 1        | 3077 ms  | 3323 ms  | 525 MB       | 3110 ms      | 359/359         | compat-report-registry |
| contract-capture | 1        | 3087 ms  | 3112 ms  | 577 MB       | 2882 ms      | 351/351         | contract-capture       |
| synthetic-probes | 1        | 3071 ms  | 3100 ms  | 576.7 MB     | 2871 ms      | 347/347         | synthetic-probe-plan   |
| cold-import      | 1        | 3076 ms  | 3165 ms  | 576.5 MB     | 2912 ms      | 349/349         | cold-import-readiness  |
| workspace-plan   | 1        | 3195 ms  | 3272 ms  | 593.1 MB     | 3063 ms      | 362/362         | workspace-plan         |
| platform-probes  | 1        | 3193 ms  | 3225 ms  | 586.9 MB     | 2983 ms      | 363/363         | platform-probes        |
| import-loop      | 1        | 268 ms   | 273 ms   | 68 MB        | 29 ms        | 31/31           | import-loop-profile    |
