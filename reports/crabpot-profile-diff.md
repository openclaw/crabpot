# Crabpot Runtime Profile Diff

Generated: deterministic
Status: PASS
Strict: false

## Summary

| Metric        | Value |
| ------------- | ----- |
| Checks        | 10    |
| Fail          | 0     |
| Warn          | 1     |
| Pass          | 9     |
| Current runs  | 3     |
| Baseline runs | 3     |

## Checks

| Action | ID                              | Metric                 | Baseline | Current | Delta | Percent | Message                                                        |
| ------ | ------------------------------- | ---------------------- | -------- | ------- | ----- | ------- | -------------------------------------------------------------- |
| pass   | profile.wall-p95                | p95WallMs              | 1273     | 1437    | 164   | 12.9%   | p95WallMs stayed within 50% regression threshold               |
| warn   | profile.peak-rss                | maxPeakRssMb           | 65.1     | 437.6   | 372.5 | -       | maxPeakRssMb regressed 372.5 over baseline                     |
| pass   | profile.node-boot               | nodeBootWallMs         | 917      | 44      | -873  | -       | nodeBootWallMs stayed within 500 absolute regression threshold |
| pass   | registry.compatRecords          | compatRecords          | 19       | 61      | 42    | -       | registry surface delta is tracked as context                   |
| pass   | registry.hookNames              | hookNames              | 31       | 37      | 6     | -       | registry surface delta is tracked as context                   |
| pass   | registry.apiRegistrars          | apiRegistrars          | 40       | 53      | 13    | -       | registry surface delta is tracked as context                   |
| pass   | registry.capturedRegistrars     | capturedRegistrars     | 18       | 28      | 10    | -       | registry surface delta is tracked as context                   |
| pass   | registry.sdkExports             | sdkExports             | 307      | 310     | 3     | -       | registry surface delta is tracked as context                   |
| pass   | registry.manifestFields         | manifestFields         | 32       | 41      | 9     | -       | registry surface delta is tracked as context                   |
| pass   | registry.manifestContractFields | manifestContractFields | 16       | 18      | 2     | -       | registry surface delta is tracked as context                   |
