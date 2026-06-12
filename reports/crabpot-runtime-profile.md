# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2061 ms            |
| Command P95 wall time  | 2128 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1773               |
| CPU samples            | 1773               |
| Max peak RSS           | 331.9 MB           |
| Max RSS delta          | 303.5 MB           |
| Max CPU estimate       | 2305 ms            |
| Max harness heap delta | 6.9 MB             |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 66         |
| hookNames              | 39         |
| apiRegistrars          | 55         |
| capturedRegistrars     | 30         |
| sdkExports             | 317        |
| manifestFields         | 42         |
| manifestContractFields | 20         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 60    |
| sourceFiles           | 1970  |
| observedHooks         | 108   |
| observedRegistrations | 206   |
| observedSdkImports    | 1253  |
| contractProbes        | 281   |
| issueFindings         | 291   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 33 ms       | 36 ms    | 29.5 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 1930 ms     | 1941 ms  | 315 MB       | 286.6 MB      | 2104 ms      | 6.9 MB     | 229/229         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2058 ms     | 2081 ms  | 322.4 MB     | 294 MB        | 2260 ms      | 6.8 MB     | 245/245         | 0          |
| contract-capture       | Contract capture inventory                      | 2096 ms     | 2103 ms  | 322.4 MB     | 294 MB        | 2294 ms      | 0.7 MB     | 248/248         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2101 ms     | 2101 ms  | 322.7 MB     | 294.1 MB      | 2293 ms      | 0.9 MB     | 249/249         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2061 ms     | 2064 ms  | 331.9 MB     | 303.5 MB      | 2277 ms      | 2.2 MB     | 246/246         | 0          |
| workspace-plan         | Workspace execution plan                        | 2087 ms     | 2107 ms  | 322.6 MB     | 294.1 MB      | 2266 ms      | 0.9 MB     | 250/250         | 0          |
| platform-probes        | Platform and loader probes                      | 2128 ms     | 2132 ms  | 331 MB       | 302.5 MB      | 2305 ms      | 1 MB       | 254/254         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 407 ms      | 421 ms   | 60.6 MB      | 32.2 MB       | 195 ms       | 1.5 MB     | 49/49           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 33 ms    | 36 ms    | 29.5 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 1930 ms  | 1941 ms  | 315 MB       | 2104 ms      | 229/229         | fixture-inspection     |
| target-registry  | 1        | 2058 ms  | 2081 ms  | 322.4 MB     | 2260 ms      | 245/245         | compat-report-registry |
| contract-capture | 1        | 2096 ms  | 2103 ms  | 322.4 MB     | 2294 ms      | 248/248         | contract-capture       |
| synthetic-probes | 1        | 2101 ms  | 2101 ms  | 322.7 MB     | 2293 ms      | 249/249         | synthetic-probe-plan   |
| cold-import      | 1        | 2061 ms  | 2064 ms  | 331.9 MB     | 2277 ms      | 246/246         | cold-import-readiness  |
| workspace-plan   | 1        | 2087 ms  | 2107 ms  | 322.6 MB     | 2266 ms      | 250/250         | workspace-plan         |
| platform-probes  | 1        | 2128 ms  | 2132 ms  | 331 MB       | 2305 ms      | 254/254         | platform-probes        |
| import-loop      | 1        | 407 ms   | 421 ms   | 60.6 MB      | 195 ms       | 49/49           | import-loop-profile    |
