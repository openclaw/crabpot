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
| Current runs  | 1     |
| Baseline runs | 3     |

## Checks

| Action | ID                              | Metric                 | Baseline | Current | Delta              | Percent | Message                                                        |
| ------ | ------------------------------- | ---------------------- | -------- | ------- | ------------------ | ------- | -------------------------------------------------------------- |
| pass   | profile.wall-p95                | p95WallMs              | 1273     | 353     | -920               | -72.3%  | p95WallMs stayed within 50% regression threshold               |
| pass   | profile.peak-rss                | maxPeakRssMb           | 65.1     | 80.3    | 15.200000000000003 | -       | maxPeakRssMb stayed within 50 absolute regression threshold    |
| pass   | profile.node-boot               | nodeBootWallMs         | 917      | 29      | -888               | -       | nodeBootWallMs stayed within 500 absolute regression threshold |
| pass   | registry.compatRecords          | compatRecords          | 19       | 51      | 32                 | -       | registry surface delta is tracked as context                   |
| pass   | registry.hookNames              | hookNames              | 31       | 32      | 1                  | -       | registry surface delta is tracked as context                   |
| pass   | registry.apiRegistrars          | apiRegistrars          | 40       | 41      | 1                  | -       | registry surface delta is tracked as context                   |
| pass   | registry.capturedRegistrars     | capturedRegistrars     | 18       | 19      | 1                  | -       | registry surface delta is tracked as context                   |
| pass   | registry.sdkExports             | sdkExports             | 307      | 316     | 9                  | -       | registry surface delta is tracked as context                   |
| pass   | registry.manifestFields         | manifestFields         | 32       | 35      | 3                  | -       | registry surface delta is tracked as context                   |
| pass   | registry.manifestContractFields | manifestContractFields | 16       | 17      | 1                  | -       | registry surface delta is tracked as context                   |
