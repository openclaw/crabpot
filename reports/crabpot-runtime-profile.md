# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2202 ms            |
| Command P95 wall time  | 2269 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1876               |
| CPU samples            | 1876               |
| Max peak RSS           | 340.9 MB           |
| Max RSS delta          | 312.5 MB           |
| Max CPU estimate       | 2475 ms            |
| Max harness heap delta | 7.3 MB             |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 66         |
| hookNames              | 39         |
| apiRegistrars          | 55         |
| capturedRegistrars     | 30         |
| sdkExports             | 318        |
| manifestFields         | 42         |
| manifestContractFields | 21         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 60    |
| sourceFiles           | 1970  |
| observedHooks         | 108   |
| observedRegistrations | 206   |
| observedSdkImports    | 1256  |
| contractProbes        | 282   |
| issueFindings         | 292   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 37 ms       | 37 ms    | 29.8 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2014 ms     | 2030 ms  | 315.1 MB     | 286 MB        | 2203 ms      | 7.1 MB     | 240/240         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2237 ms     | 2246 ms  | 333.4 MB     | 304.6 MB      | 2445 ms      | 7.3 MB     | 264/264         | 0          |
| contract-capture       | Contract capture inventory                      | 2204 ms     | 2212 ms  | 333.6 MB     | 305.2 MB      | 2407 ms      | 0.4 MB     | 262/262         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2202 ms     | 2202 ms  | 315.8 MB     | 287.4 MB      | 2409 ms      | 1.2 MB     | 260/260         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2186 ms     | 2187 ms  | 330 MB       | 301.6 MB      | 2407 ms      | 1 MB       | 260/260         | 0          |
| workspace-plan         | Workspace execution plan                        | 2213 ms     | 2256 ms  | 317.9 MB     | 289.5 MB      | 2475 ms      | 1.2 MB     | 265/265         | 0          |
| platform-probes        | Platform and loader probes                      | 2269 ms     | 2290 ms  | 340.9 MB     | 312.5 MB      | 2466 ms      | 1.4 MB     | 270/270         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 448 ms      | 461 ms   | 60.6 MB      | 32.1 MB       | 217 ms       | 1.6 MB     | 52/52           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 37 ms    | 37 ms    | 29.8 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2014 ms  | 2030 ms  | 315.1 MB     | 2203 ms      | 240/240         | fixture-inspection     |
| target-registry  | 1        | 2237 ms  | 2246 ms  | 333.4 MB     | 2445 ms      | 264/264         | compat-report-registry |
| contract-capture | 1        | 2204 ms  | 2212 ms  | 333.6 MB     | 2407 ms      | 262/262         | contract-capture       |
| synthetic-probes | 1        | 2202 ms  | 2202 ms  | 315.8 MB     | 2409 ms      | 260/260         | synthetic-probe-plan   |
| cold-import      | 1        | 2186 ms  | 2187 ms  | 330 MB       | 2407 ms      | 260/260         | cold-import-readiness  |
| workspace-plan   | 1        | 2213 ms  | 2256 ms  | 317.9 MB     | 2475 ms      | 265/265         | workspace-plan         |
| platform-probes  | 1        | 2269 ms  | 2290 ms  | 340.9 MB     | 2466 ms      | 270/270         | platform-probes        |
| import-loop      | 1        | 448 ms   | 461 ms   | 60.6 MB      | 217 ms       | 52/52           | import-loop-profile    |
