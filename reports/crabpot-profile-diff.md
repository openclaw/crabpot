# Crabpot Runtime Profile Diff

Generated: deterministic
Status: PASS
Strict: false

## Summary

| Metric        | Value |
| ------------- | ----- |
| Checks        | 10    |
| Fail          | 0     |
| Warn          | 2     |
| Pass          | 8     |
| Current runs  | 3     |
| Baseline runs | 3     |

## Checks

| Action | ID                              | Metric                 | Baseline | Current | Delta | Percent | Message                                                        |
| ------ | ------------------------------- | ---------------------- | -------- | ------- | ----- | ------- | -------------------------------------------------------------- |
| warn   | profile.wall-p95                | p95WallMs              | 1273     | 2242    | 969   | 76.1%   | p95WallMs regressed 76.1% over baseline                        |
| warn   | profile.peak-rss                | maxPeakRssMb           | 65.1     | 434.5   | 369.4 | -       | maxPeakRssMb regressed 369.4 over baseline                     |
| pass   | profile.node-boot               | nodeBootWallMs         | 917      | 34      | -883  | -       | nodeBootWallMs stayed within 500 absolute regression threshold |
| pass   | registry.compatRecords          | compatRecords          | 19       | 61      | 42    | -       | registry surface delta is tracked as context                   |
| pass   | registry.hookNames              | hookNames              | 31       | 35      | 4     | -       | registry surface delta is tracked as context                   |
| pass   | registry.apiRegistrars          | apiRegistrars          | 40       | 49      | 9     | -       | registry surface delta is tracked as context                   |
| pass   | registry.capturedRegistrars     | capturedRegistrars     | 18       | 26      | 8     | -       | registry surface delta is tracked as context                   |
| pass   | registry.sdkExports             | sdkExports             | 307      | 294     | -13   | -       | registry surface delta is tracked as context                   |
| pass   | registry.manifestFields         | manifestFields         | 32       | 35      | 3     | -       | registry surface delta is tracked as context                   |
| pass   | registry.manifestContractFields | manifestContractFields | 16       | 17      | 1     | -       | registry surface delta is tracked as context                   |
