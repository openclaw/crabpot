# Crabpot Platform And Loader Probes

Generated: deterministic
Mode: plan-only
Targets: linux, macos, windows, container

## Summary

| Metric                         | Value |
| ------------------------------ | ----- |
| fixtureCount                   | 29    |
| entrypointCount                | 34    |
| tsLoaderEntrypointCount        | 18    |
| jitiAlternativeCount           | 18    |
| lazyImportProbeCount           | 34    |
| portabilityFindingCount        | 50    |
| coveredPortabilityFindingCount | 153   |
| windowsRiskStepCount           | 14    |
| macosRiskStepCount             | 14    |
| linuxRiskStepCount             | 14    |
| containerRiskStepCount         | 14    |

## Loader Probes

| Fixture            | Status                      | Primary | Alternatives | Capture TSX | Synthetic TSX | Entrypoint                                                          |
| ------------------ | --------------------------- | ------- | ------------ | ----------- | ------------- | ------------------------------------------------------------------- |
| agentchat          | build-required              | node    | -            | no          | no            | plugins/agentchat/integrations/openclaw-channel/dist/index.js       |
| agentchat          | build-required              | node    | -            | no          | no            | plugins/agentchat/integrations/openclaw-channel/dist/setup-entry.js |
| wecom              | dependency-install-required | node    | -            | no          | no            | plugins/wecom/index.js                                              |
| qqbot              | dependency-install-required | node    | -            | no          | no            | plugins/qqbot/preload.cjs                                           |
| a2a-gateway        | ts-loader-required          | tsx     | jiti         | yes         | yes           | plugins/a2a-gateway/index.ts                                        |
| hasdata            | ts-loader-required          | tsx     | jiti         | yes         | yes           | plugins/hasdata/src/index.ts                                        |
| mcp-adapter        | ts-loader-required          | tsx     | jiti         | yes         | yes           | plugins/mcp-adapter/index.ts                                        |
| llm-trace-phoenix  | ts-loader-required          | tsx     | jiti         | yes         | yes           | plugins/llm-trace-phoenix/index.ts                                  |
| opik-openclaw      | ts-loader-required          | tsx     | jiti         | yes         | yes           | plugins/opik-openclaw/index.ts                                      |
| opik-openclaw      | build-required              | node    | -            | no          | no            | plugins/opik-openclaw/dist/index.js                                 |
| lossless-claw      | build-required              | node    | -            | no          | no            | plugins/lossless-claw/dist/index.js                                 |
| connectclaw        | ts-loader-required          | tsx     | jiti         | yes         | yes           | plugins/connectclaw/packages/plugin/index.ts                        |
| hyperspell         | ts-loader-required          | tsx     | jiti         | yes         | yes           | plugins/hyperspell/index.ts                                         |
| honcho             | build-required              | node    | -            | no          | no            | plugins/honcho/dist/index.js                                        |
| composio           | ts-loader-required          | tsx     | jiti         | yes         | yes           | plugins/composio/index.ts                                           |
| kitchen-sink       | ready                       | node    | -            | no          | no            | plugins/kitchen-sink/src/index.js                                   |
| kitchen-sink       | ready                       | node    | -            | no          | no            | plugins/kitchen-sink/src/index.js                                   |
| kitchen-sink       | ready                       | node    | -            | no          | no            | plugins/kitchen-sink/src/setup.js                                   |
| memory-tencentdb   | ts-loader-required          | tsx     | jiti         | yes         | yes           | plugins/memory-tencentdb/.crabpot-package/index.ts                  |
| ddingtalk          | ts-loader-required          | tsx     | jiti         | yes         | yes           | plugins/ddingtalk/index.ts                                          |
| dingtalk-connector | build-required              | node    | -            | no          | no            | plugins/dingtalk-connector/dist/index.mjs                           |
| mocrane-wecom      | ts-loader-required          | tsx     | jiti         | yes         | yes           | plugins/mocrane-wecom/index.ts                                      |
| yuanbao            | dependency-install-required | node    | -            | no          | no            | plugins/yuanbao/.crabpot-package/dist/index.js                      |
| openclaw-weixin    | ts-loader-required          | tsx     | jiti         | yes         | yes           | plugins/openclaw-weixin/.crabpot-package/index.ts                   |
| lightclawbot       | dependency-install-required | node    | -            | no          | no            | plugins/lightclawbot/.crabpot-package/dist/index.js                 |
| memu-engine        | ts-loader-required          | tsx     | jiti         | yes         | yes           | plugins/memu-engine/index.ts                                        |
| secureclaw         | build-required              | node    | -            | no          | no            | plugins/secureclaw/secureclaw/dist/index.js                         |
| memos-cloud        | review-required             | node    | -            | no          | no            | plugins/memos-cloud/index.js                                        |
| clawmetry          | ts-loader-required          | tsx     | jiti         | yes         | yes           | plugins/clawmetry/clawhub-plugin/index.ts                           |
| clawmetry          | build-required              | node    | -            | no          | no            | plugins/clawmetry/clawhub-plugin/dist/index.js                      |
| codex-app-server   | sdk-alias-required          | tsx     | jiti         | yes         | yes           | plugins/codex-app-server/index.ts                                   |
| web-search-plus    | ts-loader-required          | tsx     | jiti         | yes         | yes           | plugins/web-search-plus/index.ts                                    |
| apify              | ts-loader-required          | tsx     | jiti         | yes         | yes           | plugins/apify/src/index.ts                                          |
| inworld-tts        | ts-loader-required          | tsx     | jiti         | yes         | yes           | plugins/inworld-tts/index.ts                                        |

## Portability Findings

| Fixture           | Step            | Platforms                        | Risks                        | Mitigation                                                     |
| ----------------- | --------------- | -------------------------------- | ---------------------------- | -------------------------------------------------------------- |
| agentchat         | link-openclaw   | container, linux, macos, windows | package-manager-availability | install the declared package manager before isolated execution |
| agentchat         | build           | container, linux, macos, windows | package-manager-availability | install the declared package manager before isolated execution |
| agentchat         | link-openclaw   | container, linux, macos, windows | package-manager-availability | install the declared package manager before isolated execution |
| agentchat         | build           | container, linux, macos, windows | package-manager-availability | install the declared package manager before isolated execution |
| a2a-gateway       | capture         | -                                | tsx-loader-runtime           | verify TS source entrypoints with tsx and Jiti loader lanes    |
| a2a-gateway       | synthetic-probe | -                                | tsx-loader-runtime           | verify TS source entrypoints with tsx and Jiti loader lanes    |
| hasdata           | capture         | -                                | tsx-loader-runtime           | verify TS source entrypoints with tsx and Jiti loader lanes    |
| hasdata           | synthetic-probe | -                                | tsx-loader-runtime           | verify TS source entrypoints with tsx and Jiti loader lanes    |
| mcp-adapter       | capture         | -                                | tsx-loader-runtime           | verify TS source entrypoints with tsx and Jiti loader lanes    |
| mcp-adapter       | synthetic-probe | -                                | tsx-loader-runtime           | verify TS source entrypoints with tsx and Jiti loader lanes    |
| llm-trace-phoenix | capture         | -                                | tsx-loader-runtime           | verify TS source entrypoints with tsx and Jiti loader lanes    |
| llm-trace-phoenix | synthetic-probe | -                                | tsx-loader-runtime           | verify TS source entrypoints with tsx and Jiti loader lanes    |
| opik-openclaw     | capture         | -                                | tsx-loader-runtime           | verify TS source entrypoints with tsx and Jiti loader lanes    |
| opik-openclaw     | synthetic-probe | -                                | tsx-loader-runtime           | verify TS source entrypoints with tsx and Jiti loader lanes    |
| connectclaw       | link-openclaw   | container, linux, macos, windows | package-manager-availability | install the declared package manager before isolated execution |
| connectclaw       | capture         | -                                | tsx-loader-runtime           | verify TS source entrypoints with tsx and Jiti loader lanes    |
| connectclaw       | synthetic-probe | -                                | tsx-loader-runtime           | verify TS source entrypoints with tsx and Jiti loader lanes    |
| hyperspell        | capture         | -                                | tsx-loader-runtime           | verify TS source entrypoints with tsx and Jiti loader lanes    |
| hyperspell        | synthetic-probe | -                                | tsx-loader-runtime           | verify TS source entrypoints with tsx and Jiti loader lanes    |
| honcho            | link-openclaw   | container, linux, macos, windows | package-manager-availability | install the declared package manager before isolated execution |
| honcho            | build           | container, linux, macos, windows | package-manager-availability | install the declared package manager before isolated execution |
| composio          | capture         | -                                | tsx-loader-runtime           | verify TS source entrypoints with tsx and Jiti loader lanes    |
| composio          | synthetic-probe | -                                | tsx-loader-runtime           | verify TS source entrypoints with tsx and Jiti loader lanes    |
| memory-tencentdb  | capture         | -                                | tsx-loader-runtime           | verify TS source entrypoints with tsx and Jiti loader lanes    |
| memory-tencentdb  | synthetic-probe | -                                | tsx-loader-runtime           | verify TS source entrypoints with tsx and Jiti loader lanes    |
| ddingtalk         | link-openclaw   | container, linux, macos, windows | package-manager-availability | install the declared package manager before isolated execution |
| ddingtalk         | install         | container, linux, macos, windows | package-manager-availability | install the declared package manager before isolated execution |
| ddingtalk         | audit           | container, linux, macos, windows | package-manager-availability | install the declared package manager before isolated execution |
| ddingtalk         | capture         | -                                | tsx-loader-runtime           | verify TS source entrypoints with tsx and Jiti loader lanes    |
| ddingtalk         | synthetic-probe | -                                | tsx-loader-runtime           | verify TS source entrypoints with tsx and Jiti loader lanes    |
| mocrane-wecom     | capture         | -                                | tsx-loader-runtime           | verify TS source entrypoints with tsx and Jiti loader lanes    |
| mocrane-wecom     | synthetic-probe | -                                | tsx-loader-runtime           | verify TS source entrypoints with tsx and Jiti loader lanes    |
| openclaw-weixin   | capture         | -                                | tsx-loader-runtime           | verify TS source entrypoints with tsx and Jiti loader lanes    |
| openclaw-weixin   | synthetic-probe | -                                | tsx-loader-runtime           | verify TS source entrypoints with tsx and Jiti loader lanes    |
| memu-engine       | capture         | -                                | tsx-loader-runtime           | verify TS source entrypoints with tsx and Jiti loader lanes    |
| memu-engine       | synthetic-probe | -                                | tsx-loader-runtime           | verify TS source entrypoints with tsx and Jiti loader lanes    |
| clawmetry         | capture         | -                                | tsx-loader-runtime           | verify TS source entrypoints with tsx and Jiti loader lanes    |
| clawmetry         | synthetic-probe | -                                | tsx-loader-runtime           | verify TS source entrypoints with tsx and Jiti loader lanes    |
| codex-app-server  | link-openclaw   | container, linux, macos, windows | package-manager-availability | install the declared package manager before isolated execution |
| codex-app-server  | install         | container, linux, macos, windows | package-manager-availability | install the declared package manager before isolated execution |
| codex-app-server  | audit           | container, linux, macos, windows | package-manager-availability | install the declared package manager before isolated execution |
| codex-app-server  | capture         | -                                | tsx-loader-runtime           | verify TS source entrypoints with tsx and Jiti loader lanes    |
| codex-app-server  | synthetic-probe | -                                | tsx-loader-runtime           | verify TS source entrypoints with tsx and Jiti loader lanes    |
| web-search-plus   | capture         | -                                | tsx-loader-runtime           | verify TS source entrypoints with tsx and Jiti loader lanes    |
| web-search-plus   | synthetic-probe | -                                | tsx-loader-runtime           | verify TS source entrypoints with tsx and Jiti loader lanes    |
| apify             | capture         | -                                | tsx-loader-runtime           | verify TS source entrypoints with tsx and Jiti loader lanes    |
| apify             | synthetic-probe | -                                | tsx-loader-runtime           | verify TS source entrypoints with tsx and Jiti loader lanes    |
| inworld-tts       | link-openclaw   | container, linux, macos, windows | package-manager-availability | install the declared package manager before isolated execution |
| inworld-tts       | capture         | -                                | tsx-loader-runtime           | verify TS source entrypoints with tsx and Jiti loader lanes    |
| inworld-tts       | synthetic-probe | -                                | tsx-loader-runtime           | verify TS source entrypoints with tsx and Jiti loader lanes    |

## Covered Portability Findings

| Fixture            | Step              | Platforms          | Covered Risks                         | Coverage                               |
| ------------------ | ----------------- | ------------------ | ------------------------------------- | -------------------------------------- |
| agentchat          | prepare           | container, windows | posix-mkdir, rsync-required           | covered by Crabpot structured executor |
| agentchat          | prepare-artifacts | windows            | posix-mkdir                           | covered by Crabpot structured executor |
| agentchat          | capture           | windows            | posix-env-prefix                      | covered by Crabpot structured executor |
| agentchat          | synthetic-probe   | windows            | posix-env-prefix                      | covered by Crabpot structured executor |
| agentchat          | prepare           | container, windows | posix-mkdir, rsync-required           | covered by Crabpot structured executor |
| agentchat          | prepare-artifacts | windows            | posix-mkdir                           | covered by Crabpot structured executor |
| agentchat          | capture           | windows            | posix-env-prefix                      | covered by Crabpot structured executor |
| agentchat          | synthetic-probe   | windows            | posix-env-prefix                      | covered by Crabpot structured executor |
| wecom              | prepare           | container, windows | posix-mkdir, rsync-required           | covered by Crabpot structured executor |
| wecom              | prepare-artifacts | windows            | posix-mkdir                           | covered by Crabpot structured executor |
| wecom              | audit             | windows            | posix-null-failure, shell-redirection | covered by Crabpot structured executor |
| wecom              | capture           | windows            | posix-env-prefix                      | covered by Crabpot structured executor |
| wecom              | synthetic-probe   | windows            | posix-env-prefix                      | covered by Crabpot structured executor |
| qqbot              | prepare           | container, windows | posix-mkdir, rsync-required           | covered by Crabpot structured executor |
| qqbot              | prepare-artifacts | windows            | posix-mkdir                           | covered by Crabpot structured executor |
| qqbot              | audit             | windows            | posix-null-failure, shell-redirection | covered by Crabpot structured executor |
| qqbot              | capture           | windows            | posix-env-prefix                      | covered by Crabpot structured executor |
| qqbot              | synthetic-probe   | windows            | posix-env-prefix                      | covered by Crabpot structured executor |
| a2a-gateway        | prepare           | container, windows | posix-mkdir, rsync-required           | covered by Crabpot structured executor |
| a2a-gateway        | prepare-artifacts | windows            | posix-mkdir                           | covered by Crabpot structured executor |
| a2a-gateway        | audit             | windows            | posix-null-failure, shell-redirection | covered by Crabpot structured executor |
| a2a-gateway        | capture           | windows            | posix-env-prefix                      | covered by Crabpot structured executor |
| a2a-gateway        | synthetic-probe   | windows            | posix-env-prefix                      | covered by Crabpot structured executor |
| hasdata            | prepare           | container, windows | posix-mkdir, rsync-required           | covered by Crabpot structured executor |
| hasdata            | prepare-artifacts | windows            | posix-mkdir                           | covered by Crabpot structured executor |
| hasdata            | audit             | windows            | posix-null-failure, shell-redirection | covered by Crabpot structured executor |
| hasdata            | capture           | windows            | posix-env-prefix                      | covered by Crabpot structured executor |
| hasdata            | synthetic-probe   | windows            | posix-env-prefix                      | covered by Crabpot structured executor |
| mcp-adapter        | prepare           | container, windows | posix-mkdir, rsync-required           | covered by Crabpot structured executor |
| mcp-adapter        | prepare-artifacts | windows            | posix-mkdir                           | covered by Crabpot structured executor |
| mcp-adapter        | audit             | windows            | posix-null-failure, shell-redirection | covered by Crabpot structured executor |
| mcp-adapter        | capture           | windows            | posix-env-prefix                      | covered by Crabpot structured executor |
| mcp-adapter        | synthetic-probe   | windows            | posix-env-prefix                      | covered by Crabpot structured executor |
| llm-trace-phoenix  | prepare           | container, windows | posix-mkdir, rsync-required           | covered by Crabpot structured executor |
| llm-trace-phoenix  | prepare-artifacts | windows            | posix-mkdir                           | covered by Crabpot structured executor |
| llm-trace-phoenix  | capture           | windows            | posix-env-prefix                      | covered by Crabpot structured executor |
| llm-trace-phoenix  | synthetic-probe   | windows            | posix-env-prefix                      | covered by Crabpot structured executor |
| opik-openclaw      | prepare           | container, windows | posix-mkdir, rsync-required           | covered by Crabpot structured executor |
| opik-openclaw      | prepare-artifacts | windows            | posix-mkdir                           | covered by Crabpot structured executor |
| opik-openclaw      | audit             | windows            | posix-null-failure, shell-redirection | covered by Crabpot structured executor |
| opik-openclaw      | capture           | windows            | posix-env-prefix                      | covered by Crabpot structured executor |
| opik-openclaw      | synthetic-probe   | windows            | posix-env-prefix                      | covered by Crabpot structured executor |
| opik-openclaw      | prepare           | container, windows | posix-mkdir, rsync-required           | covered by Crabpot structured executor |
| opik-openclaw      | prepare-artifacts | windows            | posix-mkdir                           | covered by Crabpot structured executor |
| opik-openclaw      | capture           | windows            | posix-env-prefix                      | covered by Crabpot structured executor |
| opik-openclaw      | synthetic-probe   | windows            | posix-env-prefix                      | covered by Crabpot structured executor |
| lossless-claw      | prepare           | container, windows | posix-mkdir, rsync-required           | covered by Crabpot structured executor |
| lossless-claw      | prepare-artifacts | windows            | posix-mkdir                           | covered by Crabpot structured executor |
| lossless-claw      | capture           | windows            | posix-env-prefix                      | covered by Crabpot structured executor |
| lossless-claw      | synthetic-probe   | windows            | posix-env-prefix                      | covered by Crabpot structured executor |
| connectclaw        | prepare           | container, windows | posix-mkdir, rsync-required           | covered by Crabpot structured executor |
| connectclaw        | prepare-artifacts | windows            | posix-mkdir                           | covered by Crabpot structured executor |
| connectclaw        | capture           | windows            | posix-env-prefix                      | covered by Crabpot structured executor |
| connectclaw        | synthetic-probe   | windows            | posix-env-prefix                      | covered by Crabpot structured executor |
| hyperspell         | prepare           | container, windows | posix-mkdir, rsync-required           | covered by Crabpot structured executor |
| hyperspell         | prepare-artifacts | windows            | posix-mkdir                           | covered by Crabpot structured executor |
| hyperspell         | audit             | windows            | posix-null-failure, shell-redirection | covered by Crabpot structured executor |
| hyperspell         | capture           | windows            | posix-env-prefix                      | covered by Crabpot structured executor |
| hyperspell         | synthetic-probe   | windows            | posix-env-prefix                      | covered by Crabpot structured executor |
| honcho             | prepare           | container, windows | posix-mkdir, rsync-required           | covered by Crabpot structured executor |
| honcho             | prepare-artifacts | windows            | posix-mkdir                           | covered by Crabpot structured executor |
| honcho             | capture           | windows            | posix-env-prefix                      | covered by Crabpot structured executor |
| honcho             | synthetic-probe   | windows            | posix-env-prefix                      | covered by Crabpot structured executor |
| composio           | prepare           | container, windows | posix-mkdir, rsync-required           | covered by Crabpot structured executor |
| composio           | prepare-artifacts | windows            | posix-mkdir                           | covered by Crabpot structured executor |
| composio           | audit             | windows            | posix-null-failure, shell-redirection | covered by Crabpot structured executor |
| composio           | capture           | windows            | posix-env-prefix                      | covered by Crabpot structured executor |
| composio           | synthetic-probe   | windows            | posix-env-prefix                      | covered by Crabpot structured executor |
| kitchen-sink       | prepare           | container, windows | posix-mkdir, rsync-required           | covered by Crabpot structured executor |
| kitchen-sink       | prepare-artifacts | windows            | posix-mkdir                           | covered by Crabpot structured executor |
| kitchen-sink       | capture           | windows            | posix-env-prefix                      | covered by Crabpot structured executor |
| kitchen-sink       | synthetic-probe   | windows            | posix-env-prefix                      | covered by Crabpot structured executor |
| kitchen-sink       | prepare           | container, windows | posix-mkdir, rsync-required           | covered by Crabpot structured executor |
| kitchen-sink       | prepare-artifacts | windows            | posix-mkdir                           | covered by Crabpot structured executor |
| kitchen-sink       | capture           | windows            | posix-env-prefix                      | covered by Crabpot structured executor |
| kitchen-sink       | synthetic-probe   | windows            | posix-env-prefix                      | covered by Crabpot structured executor |
| kitchen-sink       | prepare           | container, windows | posix-mkdir, rsync-required           | covered by Crabpot structured executor |
| kitchen-sink       | prepare-artifacts | windows            | posix-mkdir                           | covered by Crabpot structured executor |
| kitchen-sink       | capture           | windows            | posix-env-prefix                      | covered by Crabpot structured executor |
| kitchen-sink       | synthetic-probe   | windows            | posix-env-prefix                      | covered by Crabpot structured executor |
| memory-tencentdb   | prepare           | container, windows | posix-mkdir, rsync-required           | covered by Crabpot structured executor |
| memory-tencentdb   | prepare-artifacts | windows            | posix-mkdir                           | covered by Crabpot structured executor |
| memory-tencentdb   | audit             | windows            | posix-null-failure, shell-redirection | covered by Crabpot structured executor |
| memory-tencentdb   | capture           | windows            | posix-env-prefix                      | covered by Crabpot structured executor |
| memory-tencentdb   | synthetic-probe   | windows            | posix-env-prefix                      | covered by Crabpot structured executor |
| ddingtalk          | prepare           | container, windows | posix-mkdir, rsync-required           | covered by Crabpot structured executor |
| ddingtalk          | prepare-artifacts | windows            | posix-mkdir                           | covered by Crabpot structured executor |
| ddingtalk          | audit             | windows            | posix-null-failure, shell-redirection | covered by Crabpot structured executor |
| ddingtalk          | capture           | windows            | posix-env-prefix                      | covered by Crabpot structured executor |
| ddingtalk          | synthetic-probe   | windows            | posix-env-prefix                      | covered by Crabpot structured executor |
| dingtalk-connector | prepare           | container, windows | posix-mkdir, rsync-required           | covered by Crabpot structured executor |
| dingtalk-connector | prepare-artifacts | windows            | posix-mkdir                           | covered by Crabpot structured executor |
| dingtalk-connector | capture           | windows            | posix-env-prefix                      | covered by Crabpot structured executor |
| dingtalk-connector | synthetic-probe   | windows            | posix-env-prefix                      | covered by Crabpot structured executor |
| mocrane-wecom      | prepare           | container, windows | posix-mkdir, rsync-required           | covered by Crabpot structured executor |
| mocrane-wecom      | prepare-artifacts | windows            | posix-mkdir                           | covered by Crabpot structured executor |
| mocrane-wecom      | audit             | windows            | posix-null-failure, shell-redirection | covered by Crabpot structured executor |
| mocrane-wecom      | capture           | windows            | posix-env-prefix                      | covered by Crabpot structured executor |
| mocrane-wecom      | synthetic-probe   | windows            | posix-env-prefix                      | covered by Crabpot structured executor |
| yuanbao            | prepare           | container, windows | posix-mkdir, rsync-required           | covered by Crabpot structured executor |
| yuanbao            | prepare-artifacts | windows            | posix-mkdir                           | covered by Crabpot structured executor |
| yuanbao            | audit             | windows            | posix-null-failure, shell-redirection | covered by Crabpot structured executor |
| yuanbao            | capture           | windows            | posix-env-prefix                      | covered by Crabpot structured executor |
| yuanbao            | synthetic-probe   | windows            | posix-env-prefix                      | covered by Crabpot structured executor |
| openclaw-weixin    | prepare           | container, windows | posix-mkdir, rsync-required           | covered by Crabpot structured executor |
| openclaw-weixin    | prepare-artifacts | windows            | posix-mkdir                           | covered by Crabpot structured executor |
| openclaw-weixin    | audit             | windows            | posix-null-failure, shell-redirection | covered by Crabpot structured executor |
| openclaw-weixin    | capture           | windows            | posix-env-prefix                      | covered by Crabpot structured executor |
| openclaw-weixin    | synthetic-probe   | windows            | posix-env-prefix                      | covered by Crabpot structured executor |
| lightclawbot       | prepare           | container, windows | posix-mkdir, rsync-required           | covered by Crabpot structured executor |
| lightclawbot       | prepare-artifacts | windows            | posix-mkdir                           | covered by Crabpot structured executor |
| lightclawbot       | audit             | windows            | posix-null-failure, shell-redirection | covered by Crabpot structured executor |
| lightclawbot       | capture           | windows            | posix-env-prefix                      | covered by Crabpot structured executor |
| lightclawbot       | synthetic-probe   | windows            | posix-env-prefix                      | covered by Crabpot structured executor |
| memu-engine        | prepare           | container, windows | posix-mkdir, rsync-required           | covered by Crabpot structured executor |
| memu-engine        | prepare-artifacts | windows            | posix-mkdir                           | covered by Crabpot structured executor |
| memu-engine        | capture           | windows            | posix-env-prefix                      | covered by Crabpot structured executor |
| memu-engine        | synthetic-probe   | windows            | posix-env-prefix                      | covered by Crabpot structured executor |
| secureclaw         | prepare           | container, windows | posix-mkdir, rsync-required           | covered by Crabpot structured executor |
| secureclaw         | prepare-artifacts | windows            | posix-mkdir                           | covered by Crabpot structured executor |
| secureclaw         | capture           | windows            | posix-env-prefix                      | covered by Crabpot structured executor |
| secureclaw         | synthetic-probe   | windows            | posix-env-prefix                      | covered by Crabpot structured executor |
| memos-cloud        | prepare           | container, windows | posix-mkdir, rsync-required           | covered by Crabpot structured executor |
| memos-cloud        | prepare-artifacts | windows            | posix-mkdir                           | covered by Crabpot structured executor |
| memos-cloud        | capture           | windows            | posix-env-prefix                      | covered by Crabpot structured executor |
| memos-cloud        | synthetic-probe   | windows            | posix-env-prefix                      | covered by Crabpot structured executor |
| clawmetry          | prepare           | container, windows | posix-mkdir, rsync-required           | covered by Crabpot structured executor |
| clawmetry          | prepare-artifacts | windows            | posix-mkdir                           | covered by Crabpot structured executor |
| clawmetry          | audit             | windows            | posix-null-failure, shell-redirection | covered by Crabpot structured executor |
| clawmetry          | capture           | windows            | posix-env-prefix                      | covered by Crabpot structured executor |
| clawmetry          | synthetic-probe   | windows            | posix-env-prefix                      | covered by Crabpot structured executor |
| clawmetry          | prepare           | container, windows | posix-mkdir, rsync-required           | covered by Crabpot structured executor |
| clawmetry          | prepare-artifacts | windows            | posix-mkdir                           | covered by Crabpot structured executor |
| clawmetry          | capture           | windows            | posix-env-prefix                      | covered by Crabpot structured executor |
| clawmetry          | synthetic-probe   | windows            | posix-env-prefix                      | covered by Crabpot structured executor |
| codex-app-server   | prepare           | container, windows | posix-mkdir, rsync-required           | covered by Crabpot structured executor |
| codex-app-server   | prepare-artifacts | windows            | posix-mkdir                           | covered by Crabpot structured executor |
| codex-app-server   | audit             | windows            | posix-null-failure, shell-redirection | covered by Crabpot structured executor |
| codex-app-server   | capture           | windows            | posix-env-prefix                      | covered by Crabpot structured executor |
| codex-app-server   | synthetic-probe   | windows            | posix-env-prefix                      | covered by Crabpot structured executor |
| web-search-plus    | prepare           | container, windows | posix-mkdir, rsync-required           | covered by Crabpot structured executor |
| web-search-plus    | prepare-artifacts | windows            | posix-mkdir                           | covered by Crabpot structured executor |
| web-search-plus    | capture           | windows            | posix-env-prefix                      | covered by Crabpot structured executor |
| web-search-plus    | synthetic-probe   | windows            | posix-env-prefix                      | covered by Crabpot structured executor |
| apify              | prepare           | container, windows | posix-mkdir, rsync-required           | covered by Crabpot structured executor |
| apify              | prepare-artifacts | windows            | posix-mkdir                           | covered by Crabpot structured executor |
| apify              | audit             | windows            | posix-null-failure, shell-redirection | covered by Crabpot structured executor |
| apify              | capture           | windows            | posix-env-prefix                      | covered by Crabpot structured executor |
| apify              | synthetic-probe   | windows            | posix-env-prefix                      | covered by Crabpot structured executor |
| inworld-tts        | prepare           | container, windows | posix-mkdir, rsync-required           | covered by Crabpot structured executor |
| inworld-tts        | prepare-artifacts | windows            | posix-mkdir                           | covered by Crabpot structured executor |
| inworld-tts        | capture           | windows            | posix-env-prefix                      | covered by Crabpot structured executor |
| inworld-tts        | synthetic-probe   | windows            | posix-env-prefix                      | covered by Crabpot structured executor |

## Recommendations

| Area   | Action                                                                                                                            |
| ------ | --------------------------------------------------------------------------------------------------------------------------------- |
| loader | keep tsx as the source-entrypoint smoke path, add a Jiti execution lane before treating TS plugin source compatibility as covered |
