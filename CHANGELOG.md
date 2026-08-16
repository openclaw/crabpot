# Changelog

## 0.2.2 - Unreleased

- Time out hung plugin-inspector git fetch, npm ci, smoke, and generated-surface spawnSync calls instead of blocking the static suite.
- Refreshed compatible plugin fixture pins and npm locks, upgraded plugin-inspector to 0.3.21, and moved CI to current GitHub Actions.
- Refreshed plugin fixtures and restored real OpenClaw lifecycle profiling against current diagnostics APIs.
- Split CI into a required pinned OpenClaw Default Track, an advisory artifact-producing HEAD canary, and a 14-day pin-promotion SLA.
- Kept each track dashboard independent from unrelated OpenClaw release metadata failures.
- Recorded dashboard metadata from the exact OpenClaw checkout exercised by the run.

## 0.2.1 - 2026-07-06

- Fixed synthetic gateway probes to start services before compatibility checks and stop them afterward, eliminating false failures for lifecycle-sensitive plugins.
- Hardened sweep, generated-surface, isolated-checkout, workspace-profile, and runtime-evidence validation across local, container, and cross-platform CI lanes.
- Kept isolated fixture execution running through known peer-range drift and classified QQBot's missing host context as an expected blocked probe.
- Remediated fixture dependency security alerts and refreshed the Feishu lockfile after exact install and compatibility verification.
- Updated A2A Gateway, Clawmetry, ClawRouter, Hyperspell, Kitchen Sink, LightClawBot, Lossless Claw, NemoClaw, Weixin, and Web Search Plus fixture coverage.
- Updated plugin-inspector to v0.3.16 and pinned its gateway lifecycle ordering fix for both source-mode and package-mode validation.
- Thanks @vincentkoc for the fixture security, Feishu, QQBot, and workspace peer-drift improvements.

## 0.2.0 - 2026-06-11

- Added track-aware compatibility dashboards for OpenClaw stable, beta, and development sources.
- Added isolated behavior-evaluation gates for Lossless Claw recall, reset, rotation, and context-engine quarantine behavior.
- Added OpenClaw lifecycle import/activation profiling, runtime performance comparisons, and bounded cross-platform execution.
- Expanded the fixture catalog to 60 plugins, including OpenClaw npm artifacts, NemoClaw, AIWerk MCP, HAPI, DingTalk document, Weixin catalog discovery, and additional community integrations.
- Added runtime evidence reconciliation, synthetic probe execution, package availability reporting, generated-surface validation, and Crabbox hydration support.
- Hardened generated code, fixture dependency locks, subprocess cleanup, report freshness, Dependabot merging, and CI portability.
- Updated Discord and NemoClaw fixtures after exact package, runtime, static, and CI verification.
- Thanks @Patrick-Erichsen for the Lossless Claw behavior gate and plugin-inspector smoke fix, and @odysseus0 for Weixin catalog-discovery coverage.
