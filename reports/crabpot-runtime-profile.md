# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2167 ms            |
| Command P95 wall time  | 2222 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1856               |
| CPU samples            | 1856               |
| Max peak RSS           | 467.9 MB           |
| Max RSS delta          | 439.2 MB           |
| Max CPU estimate       | 2403 ms            |
| Max harness heap delta | 7.5 MB             |

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
| sourceFiles           | 1834  |
| observedHooks         | 97    |
| observedRegistrations | 194   |
| observedSdkImports    | 1162  |
| contractProbes        | 277   |
| issueFindings         | 281   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 31 ms       | 32 ms    | 28.8 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2084 ms     | 2089 ms  | 446.9 MB     | 418.2 MB      | 2298 ms      | 7.5 MB     | 248/248         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2160 ms     | 2194 ms  | 467.9 MB     | 439.1 MB      | 2350 ms      | 7.1 MB     | 258/258         | 0          |
| contract-capture       | Contract capture inventory                      | 2167 ms     | 2178 ms  | 447.3 MB     | 418.6 MB      | 2362 ms      | 7.1 MB     | 258/258         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2197 ms     | 2214 ms  | 467.9 MB     | 439.2 MB      | 2380 ms      | 0.1 MB     | 260/260         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2182 ms     | 2193 ms  | 446.8 MB     | 418 MB        | 2352 ms      | 0.9 MB     | 260/260         | 0          |
| workspace-plan         | Workspace execution plan                        | 2207 ms     | 2220 ms  | 445.9 MB     | 418.3 MB      | 2403 ms      | 1 MB       | 265/265         | 0          |
| platform-probes        | Platform and loader probes                      | 2222 ms     | 2235 ms  | 454 MB       | 425.3 MB      | 2362 ms      | 1.2 MB     | 265/265         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 339 ms      | 340 ms   | 60.9 MB      | 32.4 MB       | 170 ms       | 1.2 MB     | 39/39           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 31 ms    | 32 ms    | 28.8 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2084 ms  | 2089 ms  | 446.9 MB     | 2298 ms      | 248/248         | fixture-inspection     |
| target-registry  | 1        | 2160 ms  | 2194 ms  | 467.9 MB     | 2350 ms      | 258/258         | compat-report-registry |
| contract-capture | 1        | 2167 ms  | 2178 ms  | 447.3 MB     | 2362 ms      | 258/258         | contract-capture       |
| synthetic-probes | 1        | 2197 ms  | 2214 ms  | 467.9 MB     | 2380 ms      | 260/260         | synthetic-probe-plan   |
| cold-import      | 1        | 2182 ms  | 2193 ms  | 446.8 MB     | 2352 ms      | 260/260         | cold-import-readiness  |
| workspace-plan   | 1        | 2207 ms  | 2220 ms  | 445.9 MB     | 2403 ms      | 265/265         | workspace-plan         |
| platform-probes  | 1        | 2222 ms  | 2235 ms  | 454 MB       | 2362 ms      | 265/265         | platform-probes        |
| import-loop      | 1        | 339 ms   | 340 ms   | 60.9 MB      | 170 ms       | 39/39           | import-loop-profile    |
