# crabpot agent notes

- Keep this repo fixture-driven. Add plugins to `crabpot.config.json`; do not
  hardcode fixture lists in scripts.
- External plugin code lives under `plugins/` as git submodules. Do not vendor or
  rewrite external plugin source here.
- Default checks must stay cheap and credential-free. Live tests require explicit
  opt-in and secrets.
- Prefer seam labels over product categories: `dynamic-tool`, `llm-observer`,
  `gateway-service`, `provider-capability`, and similar.
- Treat `openclaw` package dependencies as host-linked inputs owned by the
  inspector/workspace plan, not as upstream plugin install findings.
- When plugin-inspector behavior or package versions change, update both the
  source ref and generated report/test expectations. After npm publish, update
  the package pin and run both source-mode and package-mode smoke checks.
- When adding a fixture, explain the unique seam it covers in `why`.
