# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2307 ms            |
| Command P95 wall time  | 2361 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1969               |
| CPU samples            | 1969               |
| Max peak RSS           | 462.5 MB           |
| Max RSS delta          | 432.4 MB           |
| Max CPU estimate       | 2635 ms            |
| Max harness heap delta | 7.7 MB             |

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
| fixtures              | 58    |
| sourceFiles           | 1779  |
| observedHooks         | 105   |
| observedRegistrations | 194   |
| observedSdkImports    | 1193  |
| contractProbes        | 271   |
| issueFindings         | 275   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 38 ms       | 40 ms    | 31.1 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2264 ms     | 2299 ms  | 449.6 MB     | 421 MB        | 2497 ms      | 7.7 MB     | 266/266         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2339 ms     | 2400 ms  | 462.5 MB     | 432.4 MB      | 2635 ms      | 7.5 MB     | 278/278         | 0          |
| contract-capture       | Contract capture inventory                      | 2329 ms     | 2332 ms  | 447.4 MB     | 416.8 MB      | 2585 ms      | 7.5 MB     | 270/270         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2302 ms     | 2303 ms  | 447 MB       | 418.5 MB      | 2513 ms      | 1.4 MB     | 273/273         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2307 ms     | 2360 ms  | 447 MB       | 418.3 MB      | 2577 ms      | 0.3 MB     | 275/275         | 0          |
| workspace-plan         | Workspace execution plan                        | 2361 ms     | 2365 ms  | 454 MB       | 425.4 MB      | 2592 ms      | 1.8 MB     | 280/280         | 0          |
| platform-probes        | Platform and loader probes                      | 2359 ms     | 2365 ms  | 448.8 MB     | 420.3 MB      | 2597 ms      | 1.6 MB     | 279/279         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 383 ms      | 385 ms   | 60.4 MB      | 31.9 MB       | 178 ms       | 1.4 MB     | 45/45           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 38 ms    | 40 ms    | 31.1 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2264 ms  | 2299 ms  | 449.6 MB     | 2497 ms      | 266/266         | fixture-inspection     |
| target-registry  | 1        | 2339 ms  | 2400 ms  | 462.5 MB     | 2635 ms      | 278/278         | compat-report-registry |
| contract-capture | 1        | 2329 ms  | 2332 ms  | 447.4 MB     | 2585 ms      | 270/270         | contract-capture       |
| synthetic-probes | 1        | 2302 ms  | 2303 ms  | 447 MB       | 2513 ms      | 273/273         | synthetic-probe-plan   |
| cold-import      | 1        | 2307 ms  | 2360 ms  | 447 MB       | 2577 ms      | 275/275         | cold-import-readiness  |
| workspace-plan   | 1        | 2361 ms  | 2365 ms  | 454 MB       | 2592 ms      | 280/280         | workspace-plan         |
| platform-probes  | 1        | 2359 ms  | 2365 ms  | 448.8 MB     | 2597 ms      | 279/279         | platform-probes        |
| import-loop      | 1        | 383 ms   | 385 ms   | 60.4 MB      | 178 ms       | 45/45           | import-loop-profile    |
