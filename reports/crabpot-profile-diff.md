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
| pass   | profile.wall-p95                | p95WallMs              | 1273     | 1273    | 0     | 0%      | p95WallMs stayed within 50% regression threshold               |
| pass   | profile.peak-rss                | maxPeakRssMb           | 65.1     | 65.1    | 0     | -       | maxPeakRssMb stayed within 50 absolute regression threshold    |
| pass   | profile.node-boot               | nodeBootWallMs         | 917      | 917     | 0     | -       | nodeBootWallMs stayed within 500 absolute regression threshold |
| pass   | registry.compatRecords          | compatRecords          | 19       | 19      | 0     | -       | registry surface delta is tracked as context                   |
| pass   | registry.hookNames              | hookNames              | 31       | 31      | 0     | -       | registry surface delta is tracked as context                   |
| pass   | registry.apiRegistrars          | apiRegistrars          | 40       | 40      | 0     | -       | registry surface delta is tracked as context                   |
| pass   | registry.capturedRegistrars     | capturedRegistrars     | 18       | 18      | 0     | -       | registry surface delta is tracked as context                   |
| pass   | registry.sdkExports             | sdkExports             | 307      | 307     | 0     | -       | registry surface delta is tracked as context                   |
| pass   | registry.manifestFields         | manifestFields         | 32       | 32      | 0     | -       | registry surface delta is tracked as context                   |
| pass   | registry.manifestContractFields | manifestContractFields | 16       | 16      | 0     | -       | registry surface delta is tracked as context                   |
