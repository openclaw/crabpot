# Crabpot Execution Results

Generated: deterministic
Results dir: .crabpot/results

## Summary

| Metric                       | Value |
| ---------------------------- | ----- |
| Artifacts                    | 2     |
| Capture artifacts            | 1     |
| Synthetic artifacts          | 1     |
| Captured registrations/hooks | 8     |
| Pass                         | 6     |
| Fail                         | 0     |
| Blocked                      | 2     |

## Artifacts

| Fixture | Kind      | Status   | Entrypoint                         | Result                      | Artifact                                                                                 |
| ------- | --------- | -------- | ---------------------------------- | --------------------------- | ---------------------------------------------------------------------------------------- |
| wecom   | capture   | captured | .crabpot/workspaces/wecom/index.js | 8 captured                  | .crabpot/results/wecom/cold-import-extension-wecom-plugins-wecom-index-js.capture.json   |
| wecom   | synthetic | captured | .crabpot/workspaces/wecom/index.js | 6 pass / 0 fail / 2 blocked | .crabpot/results/wecom/cold-import-extension-wecom-plugins-wecom-index-js.synthetic.json |

## Blocked Synthetic Probes

| Fixture | Kind         | Seam            | Label           | Reason                                                    | Artifact                                                                                 |
| ------- | ------------ | --------------- | --------------- | --------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| wecom   | registration | registerChannel | registerChannel | captured registration requires includeChannelRuntime=true | .crabpot/results/wecom/cold-import-extension-wecom-plugins-wecom-index-js.synthetic.json |
| wecom   | registration | registerTool    | registerTool    | captured registration has no object descriptor            | .crabpot/results/wecom/cold-import-extension-wecom-plugins-wecom-index-js.synthetic.json |

## Failed Synthetic Probes

_none_
