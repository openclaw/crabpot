# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2187 ms            |
| Command P95 wall time  | 2235 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1874               |
| CPU samples            | 1874               |
| Max peak RSS           | 330.7 MB           |
| Max RSS delta          | 302.3 MB           |
| Max CPU estimate       | 2468 ms            |
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
| sourceFiles           | 1994  |
| observedHooks         | 108   |
| observedRegistrations | 206   |
| observedSdkImports    | 1253  |
| contractProbes        | 280   |
| issueFindings         | 290   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 36 ms       | 38 ms    | 29.8 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2042 ms     | 2108 ms  | 321.6 MB     | 291.8 MB      | 2329 ms      | 7.3 MB     | 244/244         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2187 ms     | 2227 ms  | 315.8 MB     | 287.3 MB      | 2416 ms      | 7.3 MB     | 260/260         | 0          |
| contract-capture       | Contract capture inventory                      | 2204 ms     | 2210 ms  | 316.4 MB     | 287.2 MB      | 2389 ms      | 0.9 MB     | 262/262         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2205 ms     | 2241 ms  | 317.8 MB     | 288.9 MB      | 2429 ms      | -0.1 MB    | 264/264         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2157 ms     | 2195 ms  | 322.8 MB     | 294.4 MB      | 2366 ms      | 1.2 MB     | 259/259         | 0          |
| workspace-plan         | Workspace execution plan                        | 2204 ms     | 2240 ms  | 330.6 MB     | 302.2 MB      | 2466 ms      | 1.3 MB     | 263/263         | 0          |
| platform-probes        | Platform and loader probes                      | 2235 ms     | 2279 ms  | 330.7 MB     | 302.3 MB      | 2468 ms      | 1.5 MB     | 269/269         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 431 ms      | 434 ms   | 60.6 MB      | 32.1 MB       | 199 ms       | 1.5 MB     | 50/50           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 36 ms    | 38 ms    | 29.8 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2042 ms  | 2108 ms  | 321.6 MB     | 2329 ms      | 244/244         | fixture-inspection     |
| target-registry  | 1        | 2187 ms  | 2227 ms  | 315.8 MB     | 2416 ms      | 260/260         | compat-report-registry |
| contract-capture | 1        | 2204 ms  | 2210 ms  | 316.4 MB     | 2389 ms      | 262/262         | contract-capture       |
| synthetic-probes | 1        | 2205 ms  | 2241 ms  | 317.8 MB     | 2429 ms      | 264/264         | synthetic-probe-plan   |
| cold-import      | 1        | 2157 ms  | 2195 ms  | 322.8 MB     | 2366 ms      | 259/259         | cold-import-readiness  |
| workspace-plan   | 1        | 2204 ms  | 2240 ms  | 330.6 MB     | 2466 ms      | 263/263         | workspace-plan         |
| platform-probes  | 1        | 2235 ms  | 2279 ms  | 330.7 MB     | 2468 ms      | 269/269         | platform-probes        |
| import-loop      | 1        | 431 ms   | 434 ms   | 60.6 MB      | 199 ms       | 50/50           | import-loop-profile    |
