# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 756 ms             |
| Command P95 wall time  | 799 ms             |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 674                |
| CPU samples            | 674                |
| Max peak RSS           | 119.1 MB           |
| Max RSS delta          | 90.2 MB            |
| Max CPU estimate       | 911 ms             |
| Max harness heap delta | 2.9 MB             |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 61         |
| hookNames              | 35         |
| apiRegistrars          | 49         |
| capturedRegistrars     | 26         |
| sdkExports             | 294        |
| manifestFields         | 35         |
| manifestContractFields | 17         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 33    |
| sourceFiles           | 1009  |
| observedHooks         | 82    |
| observedRegistrations | 121   |
| observedSdkImports    | 379   |
| contractProbes        | 176   |
| issueFindings         | 181   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 31 ms       | 33 ms    | 30 MB        | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 653 ms      | 671 ms   | 110.7 MB     | 82 MB         | 741 ms       | 2.5 MB     | 78/78           | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 761 ms      | 769 ms   | 112.2 MB     | 83.5 MB       | 835 ms       | 2.9 MB     | 90/90           | 0          |
| contract-capture       | Contract capture inventory                      | 747 ms      | 753 ms   | 112.1 MB     | 83.4 MB       | 825 ms       | 2.8 MB     | 90/90           | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 756 ms      | 756 ms   | 113 MB       | 84.3 MB       | 824 ms       | 2.6 MB     | 89/89           | 0          |
| cold-import-readiness  | Cold import readiness                           | 757 ms      | 759 ms   | 117.6 MB     | 88.8 MB       | 866 ms       | 2.5 MB     | 89/89           | 0          |
| workspace-plan         | Workspace execution plan                        | 799 ms      | 848 ms   | 119 MB       | 90.2 MB       | 911 ms       | 2.8 MB     | 95/95           | 0          |
| platform-probes        | Platform and loader probes                      | 794 ms      | 796 ms   | 119.1 MB     | 90 MB         | 879 ms       | 2.7 MB     | 93/93           | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 393 ms      | 401 ms   | 60.6 MB      | 31.9 MB       | 180 ms       | -0.1 MB    | 47/47           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 31 ms    | 33 ms    | 30 MB        | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 653 ms   | 671 ms   | 110.7 MB     | 741 ms       | 78/78           | fixture-inspection     |
| target-registry  | 1        | 761 ms   | 769 ms   | 112.2 MB     | 835 ms       | 90/90           | compat-report-registry |
| contract-capture | 1        | 747 ms   | 753 ms   | 112.1 MB     | 825 ms       | 90/90           | contract-capture       |
| synthetic-probes | 1        | 756 ms   | 756 ms   | 113 MB       | 824 ms       | 89/89           | synthetic-probe-plan   |
| cold-import      | 1        | 757 ms   | 759 ms   | 117.6 MB     | 866 ms       | 89/89           | cold-import-readiness  |
| workspace-plan   | 1        | 799 ms   | 848 ms   | 119 MB       | 911 ms       | 95/95           | workspace-plan         |
| platform-probes  | 1        | 794 ms   | 796 ms   | 119.1 MB     | 879 ms       | 93/93           | platform-probes        |
| import-loop      | 1        | 393 ms   | 401 ms   | 60.6 MB      | 180 ms       | 47/47           | import-loop-profile    |
