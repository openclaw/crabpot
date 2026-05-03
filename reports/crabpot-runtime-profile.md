# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2314 ms            |
| Command P95 wall time  | 2366 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1972               |
| CPU samples            | 1972               |
| Max peak RSS           | 450.9 MB           |
| Max RSS delta          | 422.1 MB           |
| Max CPU estimate       | 2543 ms            |
| Max harness heap delta | 8 MB               |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 60         |
| hookNames              | 35         |
| apiRegistrars          | 49         |
| capturedRegistrars     | 26         |
| sdkExports             | 294        |
| manifestFields         | 39         |
| manifestContractFields | 17         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 57    |
| sourceFiles           | 2970  |
| observedHooks         | 93    |
| observedRegistrations | 185   |
| observedSdkImports    | 1080  |
| contractProbes        | 299   |
| issueFindings         | 307   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 32 ms       | 33 ms    | 28.8 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2207 ms     | 2286 ms  | 443.3 MB     | 414.5 MB      | 2405 ms      | 8 MB       | 265/265         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2314 ms     | 2319 ms  | 429.8 MB     | 401 MB        | 2505 ms      | 7.6 MB     | 275/275         | 0          |
| contract-capture       | Contract capture inventory                      | 2314 ms     | 2318 ms  | 432.2 MB     | 403.4 MB      | 2464 ms      | 7.5 MB     | 273/273         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2335 ms     | 2354 ms  | 430 MB       | 401.3 MB      | 2491 ms      | 0.7 MB     | 278/278         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2307 ms     | 2327 ms  | 430.4 MB     | 401.6 MB      | 2502 ms      | 0.2 MB     | 275/275         | 0          |
| workspace-plan         | Workspace execution plan                        | 2348 ms     | 2355 ms  | 450.9 MB     | 422.1 MB      | 2543 ms      | 1.7 MB     | 280/280         | 0          |
| platform-probes        | Platform and loader probes                      | 2366 ms     | 2377 ms  | 439.2 MB     | 410.4 MB      | 2534 ms      | 1.6 MB     | 281/281         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 357 ms      | 358 ms   | 60.5 MB      | 31.8 MB       | 169 ms       | 1.3 MB     | 42/42           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 32 ms    | 33 ms    | 28.8 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2207 ms  | 2286 ms  | 443.3 MB     | 2405 ms      | 265/265         | fixture-inspection     |
| target-registry  | 1        | 2314 ms  | 2319 ms  | 429.8 MB     | 2505 ms      | 275/275         | compat-report-registry |
| contract-capture | 1        | 2314 ms  | 2318 ms  | 432.2 MB     | 2464 ms      | 273/273         | contract-capture       |
| synthetic-probes | 1        | 2335 ms  | 2354 ms  | 430 MB       | 2491 ms      | 278/278         | synthetic-probe-plan   |
| cold-import      | 1        | 2307 ms  | 2327 ms  | 430.4 MB     | 2502 ms      | 275/275         | cold-import-readiness  |
| workspace-plan   | 1        | 2348 ms  | 2355 ms  | 450.9 MB     | 2543 ms      | 280/280         | workspace-plan         |
| platform-probes  | 1        | 2366 ms  | 2377 ms  | 439.2 MB     | 2534 ms      | 281/281         | platform-probes        |
| import-loop      | 1        | 357 ms   | 358 ms   | 60.5 MB      | 169 ms       | 42/42           | import-loop-profile    |
