# Crabpot External Plugin Monitor Candidates

Verified: 2026-05-14

Scope: China and China-adjacent OpenClaw ecosystem plugins that are not already
covered by Crabpot reporting, plus the existing covered fixtures that prove the
same platform seams.

Selection rule: prioritize active repo-backed or npm-published native OpenClaw
plugins with a distinct seam. Popular forks, setup guides, and CLI-only helpers
belong below native plugins unless they expose an OpenClaw extension entry.

## Current Coverage

These are already in `crabpot.config.json` and present in the generated report.

| Platform | Covered fixture | Upstream | Coverage note |
| --- | --- | --- | --- |
| Feishu/Lark | `feishu` | `@openclaw/feishu` | OpenClaw-managed monorepo package. Does not cover the separate LarkSuite official plugin. |
| DingTalk | `ddingtalk` | `largezhou/openclaw-dingtalk` | Community DingTalk channel. |
| DingTalk | `dingtalk-connector` | `DingTalk-Real-AI/dingtalk-openclaw-connector` | Official DingTalk stream connector. |
| WeCom | `wecom` | `sunnoy/openclaw-plugin-wecom` | Large community WeCom fixture. |
| WeCom | `mocrane-wecom` | `TencentCloud-Lighthouse/openclaw-wecom` | Mocrane/TencentCloud Lighthouse WeCom fixture. |
| Weixin | `openclaw-weixin` | `@tencent-weixin/openclaw-weixin` | Npm-pinned Weixin channel fixture. |
| QQ Bot | `qqbot` | `tencent-connect/openclaw-qqbot` | External repo-backed QQ Bot fixture. |
| QQ Bot | `openclaw-qqbot` | `@openclaw/qqbot` | OpenClaw-managed monorepo package. |
| Tencent Yuanbao | `yuanbao` | `openclaw-plugin-yuanbao` | Npm-pinned Tencent Yuanbao channel. |
| TencentDB Memory | `memory-tencentdb` | `@tencentdb-agent-memory/memory-tencentdb` | Npm-pinned TencentDB memory/vector-store fixture. |

## Add Next

These are active, distinct, and not currently listed in Crabpot reporting.

| Rank | Candidate | Source | Latest observed | Why monitor |
| --- | --- | --- | --- | --- |
| P0 | LarkSuite official Lark/Feishu | `larksuite/openclaw-lark`, `@larksuite/openclaw-lark` | GitHub updated 2026-05-13; npm `2026.5.12` | Biggest missed external plugin. It is a separate official LarkSuite artifact, not the current `@openclaw/feishu` fixture. Covers messaging plus docs/base/sheets/calendar/tasks and has a large live issue surface. |
| P0 | WeCom official plugin | `WecomTeam/wecom-openclaw-plugin`, `@wecom/wecom-openclaw-plugin` | GitHub updated 2026-05-13; npm `2026.5.7` | Separate official Tencent WeCom artifact. Current Crabpot covers `sunnoy` and `mocrane`, but not this official package or its richer WeCom workflow seams. |
| P1 | Weibo DM channel | `@wecode-ai/weibo-openclaw-plugin` | npm `2.2.7`, published 2026-05-13 | Npm metadata exposes native OpenClaw extensions and channel catalog metadata. No current Weibo fixture exists. |
| P1 | WeCom Customer Service | `@openclaw-china/wecom-kf` | npm `2026.4.24` | Native OpenClaw channel for WeCom customer-service conversations. Distinct from bot/app WeCom channels. |
| P1 | WeCom self-built app | `@openclaw-china/wecom-app` | npm `2026.4.24` | Native OpenClaw channel for self-built enterprise apps and proactive sending. Distinct from intelligent-bot WeCom channels. |
| P1 | DingTalk document MCP tools | `suchasplus/openclaw-dingtalk-doc`, `openclaw-dingtalk-doc` | npm `0.2.5`, repo-backed | DingTalk document/MCP tool surface, not another chat-channel clone. Adds a document-tool seam under the DingTalk platform. |
| P2 | Xiaopaitek channel | `xiaopaitek/openclaw-xiaopai`, `@xiaopaitek/openclaw-xiaopai` | npm `1.0.2`, published 2026-05-07 | Native channel catalog metadata for Xiaopaitek enterprise messaging. Monitor if we want broader China enterprise messaging coverage. |
| P2 | Tagword group chat | `tagword/tagword-group-chat`, `@tagword/tagword-group-chat` | npm `0.1.0`, published 2026-04-12 | Feishu-first multi-agent group-chat sync with native extension metadata. Good later fixture for multi-agent/session persistence. |

## Defer

These showed up in live search, but should not become Crabpot fixtures yet.

| Candidate | Reason |
| --- | --- |
| `AlexAnys/openclaw-feishu`, `Futaoj/enable_openclaw_feishu_lark`, and similar Feishu setup repos | High visibility, but they look like guides, bridges, or setup kits rather than native OpenClaw plugin artifacts. Useful for user-support signal, not fixture coverage. |
| Feishu/Lark fork packages such as `@brycehuang/openclaw-lark`, `@realguan/openclaw-lark`, `ylib-openclaw-lark` | Mostly forks or republished variants of the LarkSuite artifact. Track only if they diverge into a distinct runtime seam. |
| DingTalk fork packages such as `@soimy/dingtalk`, `@nextclaw/channel-plugin-dingtalk`, `clawdbot-dingtalk` | Covered better by the official connector plus one mature community DingTalk channel unless a fork introduces a unique seam. |
| `@looki-ai/openclaw-looki-cli`, `@long_88/openclaw-aicc-channel-cli` | CLI installer packages only in npm metadata. Need the underlying native plugin package or repo before fixture inclusion. |
| `openclaw-lark-multi-agent` | Interesting and active, but npm metadata only exposed keywords in the quick pass. Verify package contents before promoting. |

## Reporting Gaps

- Crabpot currently reports 57 fixtures, but none of the P0/P1 candidates above
  appear by package name or source repo in `crabpot.config.json`.
- The most important false sense of coverage is Feishu/Lark: `feishu` covers the
  OpenClaw-managed `@openclaw/feishu`, while the ecosystem-heavy package is
  `@larksuite/openclaw-lark`.
- The second false sense of coverage is WeCom: existing fixtures cover community
  and Mocrane paths, but not the official `WecomTeam/wecom-openclaw-plugin`
  package.
- Weibo, WeCom KF, WeCom App, DingTalk document tools, and Xiaopaitek add
  genuinely new product seams rather than one more same-shaped channel plugin.

## Suggested Fixture Batch

Small first batch:

1. Add `larksuite-lark` as a repo-backed high-priority fixture.
2. Add `wecom-official` as a repo-backed high-priority fixture.
3. Add `weibo` as an npm-pinned high-priority fixture.

Second batch:

1. Add `wecom-kf` and `wecom-app` as npm-pinned high-priority fixtures.
2. Add `dingtalk-doc` as a repo-backed medium-priority fixture.
3. Recheck Xiaopaitek and Tagword package contents, then decide if they earn
   medium-priority fixtures.
