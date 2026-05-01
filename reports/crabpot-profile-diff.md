# Crabpot Runtime Profile Diff

Generated: deterministic
Status: PASS
Strict: false

## Summary

| Metric        | Value |
| ------------- | ----- |
| Checks        | 10    |
| Fail          | 0     |
| Warn          | 0     |
| Pass          | 10    |
| Current runs  | 3     |
| Baseline runs | 3     |

## Checks

| Action | ID                              | Metric                 | Baseline | Current | Delta | Percent | Message                                                        |
| ------ | ------------------------------- | ---------------------- | -------- | ------- | ----- | ------- | -------------------------------------------------------------- |
| pass   | profile.wall-p95                | p95WallMs              | 1273     | 523     | -750  | -58.9%  | p95WallMs stayed within 50% regression threshold               |
| pass   | profile.peak-rss                | maxPeakRssMb           | 65.1     | 90.6    | 25.5  | -       | maxPeakRssMb stayed within 50 absolute regression threshold    |
| pass   | profile.node-boot               | nodeBootWallMs         | 917      | 29      | -888  | -       | nodeBootWallMs stayed within 500 absolute regression threshold |
| pass   | registry.compatRecords          | compatRecords          | 19       | 61      | 42    | -       | registry surface delta is tracked as context                   |
| pass   | registry.hookNames              | hookNames              | 31       | 35      | 4     | -       | registry surface delta is tracked as context                   |
| pass   | registry.apiRegistrars          | apiRegistrars          | 40       | 49      | 9     | -       | registry surface delta is tracked as context                   |
| pass   | registry.capturedRegistrars     | capturedRegistrars     | 18       | 26      | 8     | -       | registry surface delta is tracked as context                   |
| pass   | registry.sdkExports             | sdkExports             | 307      | 294     | -13   | -       | registry surface delta is tracked as context                   |
| pass   | registry.manifestFields         | manifestFields         | 32       | 35      | 3     | -       | registry surface delta is tracked as context                   |
| pass   | registry.manifestContractFields | manifestContractFields | 16       | 17      | 1     | -       | registry surface delta is tracked as context                   |
