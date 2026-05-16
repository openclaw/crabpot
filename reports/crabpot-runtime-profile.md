# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2286 ms            |
| Command P95 wall time  | 2339 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1944               |
| CPU samples            | 1944               |
| Max peak RSS           | 457.1 MB           |
| Max RSS delta          | 427.3 MB           |
| Max CPU estimate       | 2597 ms            |
| Max harness heap delta | 8 MB               |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 60         |
| hookNames              | 36         |
| apiRegistrars          | 53         |
| capturedRegistrars     | 28         |
| sdkExports             | 307        |
| manifestFields         | 41         |
| manifestContractFields | 17         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 60    |
| sourceFiles           | 1783  |
| observedHooks         | 106   |
| observedRegistrations | 196   |
| observedSdkImports    | 1193  |
| contractProbes        | 278   |
| issueFindings         | 283   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 35 ms       | 36 ms    | 32.6 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2171 ms     | 2212 ms  | 445 MB       | 414.4 MB      | 2393 ms      | 8 MB       | 257/257         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2290 ms     | 2338 ms  | 447.8 MB     | 417.6 MB      | 2572 ms      | 7.4 MB     | 270/270         | 0          |
| contract-capture       | Contract capture inventory                      | 2284 ms     | 2365 ms  | 447.6 MB     | 417.6 MB      | 2597 ms      | 7.5 MB     | 272/272         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2288 ms     | 2310 ms  | 447.6 MB     | 418 MB        | 2504 ms      | 1.3 MB     | 269/269         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2286 ms     | 2305 ms  | 454.6 MB     | 426 MB        | 2533 ms      | 0.1 MB     | 272/272         | 0          |
| workspace-plan         | Workspace execution plan                        | 2337 ms     | 2340 ms  | 455.5 MB     | 425.6 MB      | 2551 ms      | 1.6 MB     | 278/278         | 0          |
| platform-probes        | Platform and loader probes                      | 2339 ms     | 2342 ms  | 457.1 MB     | 427.3 MB      | 2552 ms      | 1.6 MB     | 278/278         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 377 ms      | 377 ms   | 60.4 MB      | 31.8 MB       | 177 ms       | 1.4 MB     | 45/45           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 35 ms    | 36 ms    | 32.6 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2171 ms  | 2212 ms  | 445 MB       | 2393 ms      | 257/257         | fixture-inspection     |
| target-registry  | 1        | 2290 ms  | 2338 ms  | 447.8 MB     | 2572 ms      | 270/270         | compat-report-registry |
| contract-capture | 1        | 2284 ms  | 2365 ms  | 447.6 MB     | 2597 ms      | 272/272         | contract-capture       |
| synthetic-probes | 1        | 2288 ms  | 2310 ms  | 447.6 MB     | 2504 ms      | 269/269         | synthetic-probe-plan   |
| cold-import      | 1        | 2286 ms  | 2305 ms  | 454.6 MB     | 2533 ms      | 272/272         | cold-import-readiness  |
| workspace-plan   | 1        | 2337 ms  | 2340 ms  | 455.5 MB     | 2551 ms      | 278/278         | workspace-plan         |
| platform-probes  | 1        | 2339 ms  | 2342 ms  | 457.1 MB     | 2552 ms      | 278/278         | platform-probes        |
| import-loop      | 1        | 377 ms   | 377 ms   | 60.4 MB      | 177 ms       | 45/45           | import-loop-profile    |
