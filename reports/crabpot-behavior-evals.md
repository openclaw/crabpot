# Crabpot Behavior Eval Plan

- Profile: forward-lcm-release-gate
- Category: context-engine
- Scenario: lcm-basic-memory-turn
- OpenClaw: openclaw@latest
- Plugins: @martian-engineering/lossless-claw@latest
- Runner: blacksmith (mock-openai)
- Expected mode: known-failure
- Expected failure classes: memory-recall-mismatch

## Steps

1. Create isolated temp state
   Create temp HOME, OPENCLAW_HOME, OPENCLAW_STATE_DIR, OPENCLAW_CONFIG_PATH, and XDG dirs.
2. Resolve OpenClaw CLI
   Use openclaw@latest.

   ```sh
   npm exec --yes --package=openclaw@latest -- openclaw --version
   ```

3. Install plugin
   Install lossless-claw.

   ```sh
   npm exec --yes --package=openclaw@latest -- openclaw plugins install npm:@martian-engineering/lossless-claw@latest --pin
   ```

4. Patch isolated config
   Enable plugin entries and select any requested exclusive slot.
5. Start gateway
   Run the foreground gateway with provider mode mock-openai.

   ```sh
   npm exec --yes --package=openclaw@latest -- openclaw gateway run --allow-unconfigured --bind loopback --port <free-port> --token <token>
   ```

6. Run scenario
   Install LCM, select it as the context engine, build raw context beyond the fresh tail, rotate the transcript, and recall a fact through summarized context.
7. Classify result
   Expected mode is known-failure.
## Scenario Checks

- install: The requested OpenClaw package resolves and the LCM npm plugin installs into isolated state.
- gateway-load: The gateway starts with lossless-claw enabled and selected in the contextEngine slot.
- agent-turn: An agent call emits a seeded memory fact and returns a completed run or a classified failure.
- memory-assembly: A follow-up turn on the same stable session key after /lossless rotate can observe the seeded fact through summarized LCM context, or the run is classified as an LCM assembly failure.

## Planned Classification

- Status: planned-known-failure

