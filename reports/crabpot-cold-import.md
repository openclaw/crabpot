# Crabpot Cold Import Readiness

Generated: deterministic

## Summary

| Metric                      | Value |
| --------------------------- | ----- |
| Fixtures                    | 8     |
| Entrypoints                 | 10    |
| Ready                       | 0     |
| Blocked                     | 10    |
| TypeScript loader required  | 10    |
| Build required              | 0     |
| Dependency install required | 8     |
| SDK alias required          | 0     |

## Entrypoints

| Fixture                | Kind       | Status             | Path                                                     | Blockers                                        | Assertions                                                                                                                                            |
| ---------------------- | ---------- | ------------------ | -------------------------------------------------------- | ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| brave-plugin           | extension  | ts-loader-required | plugins/brave-plugin/.crabpot-package/index.ts           | ts-loader-required                              | TypeScript source entrypoint is compiled or loaded before cold import                                                                                 |
| codex                  | extension  | ts-loader-required | plugins/codex/.crabpot-package/index.ts                  | ts-loader-required, dependency-install-required | TypeScript source entrypoint is compiled or loaded before cold import; fixture dependencies are installed in an isolated workspace before cold import |
| diagnostics-prometheus | extension  | ts-loader-required | plugins/diagnostics-prometheus/.crabpot-package/index.ts | ts-loader-required                              | TypeScript source entrypoint is compiled or loaded before cold import                                                                                 |
| google-meet            | extension  | ts-loader-required | plugins/google-meet/.crabpot-package/index.ts            | ts-loader-required, dependency-install-required | TypeScript source entrypoint is compiled or loaded before cold import; fixture dependencies are installed in an isolated workspace before cold import |
| diffs                  | extension  | ts-loader-required | plugins/diffs/.crabpot-package/index.ts                  | ts-loader-required, dependency-install-required | TypeScript source entrypoint is compiled or loaded before cold import; fixture dependencies are installed in an isolated workspace before cold import |
| memory-lancedb         | extension  | ts-loader-required | plugins/memory-lancedb/.crabpot-package/index.ts         | ts-loader-required, dependency-install-required | TypeScript source entrypoint is compiled or loaded before cold import; fixture dependencies are installed in an isolated workspace before cold import |
| openclaw-qqbot         | extension  | ts-loader-required | plugins/openclaw-qqbot/.crabpot-package/index.ts         | ts-loader-required, dependency-install-required | TypeScript source entrypoint is compiled or loaded before cold import; fixture dependencies are installed in an isolated workspace before cold import |
| openclaw-qqbot         | setupEntry | ts-loader-required | plugins/openclaw-qqbot/.crabpot-package/setup-entry.ts   | ts-loader-required, dependency-install-required | TypeScript source entrypoint is compiled or loaded before cold import; fixture dependencies are installed in an isolated workspace before cold import |
| whatsapp               | extension  | ts-loader-required | plugins/whatsapp/.crabpot-package/index.ts               | ts-loader-required, dependency-install-required | TypeScript source entrypoint is compiled or loaded before cold import; fixture dependencies are installed in an isolated workspace before cold import |
| whatsapp               | setupEntry | ts-loader-required | plugins/whatsapp/.crabpot-package/setup-entry.ts         | ts-loader-required, dependency-install-required | TypeScript source entrypoint is compiled or loaded before cold import; fixture dependencies are installed in an isolated workspace before cold import |
