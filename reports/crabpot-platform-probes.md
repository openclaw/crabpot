# Crabpot Platform And Loader Probes

Generated: deterministic
Mode: plan-only
Targets: linux, macos, windows, container

## Summary

| Metric                         | Value |
| ------------------------------ | ----- |
| fixtureCount                   | 8     |
| entrypointCount                | 10    |
| tsLoaderEntrypointCount        | 10    |
| jitiAlternativeCount           | 10    |
| lazyImportProbeCount           | 10    |
| portabilityFindingCount        | 0     |
| coveredPortabilityFindingCount | 48    |
| windowsRiskStepCount           | 0     |
| macosRiskStepCount             | 0     |
| linuxRiskStepCount             | 0     |
| containerRiskStepCount         | 0     |

## Loader Probes

| Fixture                | Status             | Primary | Alternatives | Capture TSX | Synthetic TSX | Capture Mock SDK | Synthetic Mock SDK | Entrypoint                                               |
| ---------------------- | ------------------ | ------- | ------------ | ----------- | ------------- | ---------------- | ------------------ | -------------------------------------------------------- |
| brave-plugin           | ts-loader-required | tsx     | jiti         | no          | no            | yes              | yes                | plugins/brave-plugin/.crabpot-package/index.ts           |
| codex                  | ts-loader-required | tsx     | jiti         | no          | no            | yes              | yes                | plugins/codex/.crabpot-package/index.ts                  |
| diagnostics-prometheus | ts-loader-required | tsx     | jiti         | no          | no            | yes              | yes                | plugins/diagnostics-prometheus/.crabpot-package/index.ts |
| google-meet            | ts-loader-required | tsx     | jiti         | no          | no            | yes              | yes                | plugins/google-meet/.crabpot-package/index.ts            |
| diffs                  | ts-loader-required | tsx     | jiti         | no          | no            | yes              | yes                | plugins/diffs/.crabpot-package/index.ts                  |
| memory-lancedb         | ts-loader-required | tsx     | jiti         | no          | no            | yes              | yes                | plugins/memory-lancedb/.crabpot-package/index.ts         |
| openclaw-qqbot         | ts-loader-required | tsx     | jiti         | no          | no            | yes              | yes                | plugins/openclaw-qqbot/.crabpot-package/index.ts         |
| openclaw-qqbot         | ts-loader-required | tsx     | jiti         | no          | no            | yes              | yes                | plugins/openclaw-qqbot/.crabpot-package/setup-entry.ts   |
| whatsapp               | ts-loader-required | tsx     | jiti         | no          | no            | yes              | yes                | plugins/whatsapp/.crabpot-package/index.ts               |
| whatsapp               | ts-loader-required | tsx     | jiti         | no          | no            | yes              | yes                | plugins/whatsapp/.crabpot-package/setup-entry.ts         |

## Portability Findings

_none_

## Covered Portability Findings

| Fixture                | Step              | Platforms          | Covered Risks                         | Coverage                               |
| ---------------------- | ----------------- | ------------------ | ------------------------------------- | -------------------------------------- |
| brave-plugin           | prepare           | container, windows | posix-mkdir, rsync-required           | covered by Crabpot structured executor |
| brave-plugin           | prepare-artifacts | windows            | posix-mkdir                           | covered by Crabpot structured executor |
| brave-plugin           | capture           | windows            | posix-env-prefix                      | covered by Crabpot structured executor |
| brave-plugin           | synthetic-probe   | windows            | posix-env-prefix                      | covered by Crabpot structured executor |
| codex                  | prepare           | container, windows | posix-mkdir, rsync-required           | covered by Crabpot structured executor |
| codex                  | prepare-artifacts | windows            | posix-mkdir                           | covered by Crabpot structured executor |
| codex                  | audit             | windows            | posix-null-failure, shell-redirection | covered by Crabpot structured executor |
| codex                  | capture           | windows            | posix-env-prefix                      | covered by Crabpot structured executor |
| codex                  | synthetic-probe   | windows            | posix-env-prefix                      | covered by Crabpot structured executor |
| diagnostics-prometheus | prepare           | container, windows | posix-mkdir, rsync-required           | covered by Crabpot structured executor |
| diagnostics-prometheus | prepare-artifacts | windows            | posix-mkdir                           | covered by Crabpot structured executor |
| diagnostics-prometheus | capture           | windows            | posix-env-prefix                      | covered by Crabpot structured executor |
| diagnostics-prometheus | synthetic-probe   | windows            | posix-env-prefix                      | covered by Crabpot structured executor |
| google-meet            | prepare           | container, windows | posix-mkdir, rsync-required           | covered by Crabpot structured executor |
| google-meet            | prepare-artifacts | windows            | posix-mkdir                           | covered by Crabpot structured executor |
| google-meet            | audit             | windows            | posix-null-failure, shell-redirection | covered by Crabpot structured executor |
| google-meet            | capture           | windows            | posix-env-prefix                      | covered by Crabpot structured executor |
| google-meet            | synthetic-probe   | windows            | posix-env-prefix                      | covered by Crabpot structured executor |
| diffs                  | prepare           | container, windows | posix-mkdir, rsync-required           | covered by Crabpot structured executor |
| diffs                  | prepare-artifacts | windows            | posix-mkdir                           | covered by Crabpot structured executor |
| diffs                  | audit             | windows            | posix-null-failure, shell-redirection | covered by Crabpot structured executor |
| diffs                  | capture           | windows            | posix-env-prefix                      | covered by Crabpot structured executor |
| diffs                  | synthetic-probe   | windows            | posix-env-prefix                      | covered by Crabpot structured executor |
| memory-lancedb         | prepare           | container, windows | posix-mkdir, rsync-required           | covered by Crabpot structured executor |
| memory-lancedb         | prepare-artifacts | windows            | posix-mkdir                           | covered by Crabpot structured executor |
| memory-lancedb         | audit             | windows            | posix-null-failure, shell-redirection | covered by Crabpot structured executor |
| memory-lancedb         | capture           | windows            | posix-env-prefix                      | covered by Crabpot structured executor |
| memory-lancedb         | synthetic-probe   | windows            | posix-env-prefix                      | covered by Crabpot structured executor |
| openclaw-qqbot         | prepare           | container, windows | posix-mkdir, rsync-required           | covered by Crabpot structured executor |
| openclaw-qqbot         | prepare-artifacts | windows            | posix-mkdir                           | covered by Crabpot structured executor |
| openclaw-qqbot         | audit             | windows            | posix-null-failure, shell-redirection | covered by Crabpot structured executor |
| openclaw-qqbot         | capture           | windows            | posix-env-prefix                      | covered by Crabpot structured executor |
| openclaw-qqbot         | synthetic-probe   | windows            | posix-env-prefix                      | covered by Crabpot structured executor |
| openclaw-qqbot         | prepare           | container, windows | posix-mkdir, rsync-required           | covered by Crabpot structured executor |
| openclaw-qqbot         | prepare-artifacts | windows            | posix-mkdir                           | covered by Crabpot structured executor |
| openclaw-qqbot         | audit             | windows            | posix-null-failure, shell-redirection | covered by Crabpot structured executor |
| openclaw-qqbot         | capture           | windows            | posix-env-prefix                      | covered by Crabpot structured executor |
| openclaw-qqbot         | synthetic-probe   | windows            | posix-env-prefix                      | covered by Crabpot structured executor |
| whatsapp               | prepare           | container, windows | posix-mkdir, rsync-required           | covered by Crabpot structured executor |
| whatsapp               | prepare-artifacts | windows            | posix-mkdir                           | covered by Crabpot structured executor |
| whatsapp               | audit             | windows            | posix-null-failure, shell-redirection | covered by Crabpot structured executor |
| whatsapp               | capture           | windows            | posix-env-prefix                      | covered by Crabpot structured executor |
| whatsapp               | synthetic-probe   | windows            | posix-env-prefix                      | covered by Crabpot structured executor |
| whatsapp               | prepare           | container, windows | posix-mkdir, rsync-required           | covered by Crabpot structured executor |
| whatsapp               | prepare-artifacts | windows            | posix-mkdir                           | covered by Crabpot structured executor |
| whatsapp               | audit             | windows            | posix-null-failure, shell-redirection | covered by Crabpot structured executor |
| whatsapp               | capture           | windows            | posix-env-prefix                      | covered by Crabpot structured executor |
| whatsapp               | synthetic-probe   | windows            | posix-env-prefix                      | covered by Crabpot structured executor |

## Recommendations

| Area   | Action                                                                                                                             |
| ------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| loader | keep mock-SDK TypeScript capture green, add a real host-loader/Jiti lane before treating TS plugin source compatibility as covered |
