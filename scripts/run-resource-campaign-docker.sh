#!/usr/bin/env bash
# Compose the frozen core package/image/host owners; never implement a Gateway here.
set -euo pipefail

resource_container_absent() {
  local name="$1" names match_status=0
  # Successful enumeration is a daemon response. An inspect error alone cannot
  # distinguish absence from a dead daemon, so never use it as closure proof.
  names="$(DOCKER_COMMAND_TIMEOUT=30s docker_e2e_docker_cmd container ls --all --format '{{.Names}}')" || return 2
  # Consume the entire listing: grep -q can SIGPIPE printf under pipefail and
  # turn a real early match into false absence when many containers follow it.
  printf '%s\n' "$names" | grep -Fx -- "$name" >/dev/null || match_status="$?"
  case "$match_status" in
    0) return 1 ;;
    1) return 0 ;;
    *) return 4 ;; # Matcher failure is unknown, distinct from daemon failure.
  esac
}

resource_close_container() {
  local name="$1" status=0 removal_status=0
  resource_container_absent "$name" || status="$?"
  [ "$status" -ne 0 ] || return 0
  [ "$status" -eq 1 ] || return "$status"
  # Only this attempt's exact name is owned; no broad pruning or stale-job cleanup.
  DOCKER_COMMAND_TIMEOUT=30s docker_e2e_docker_cmd rm -f "$name" || removal_status="$?"
  status=0
  resource_container_absent "$name" || status="$?"
  [ "$status" -eq 0 ] || return "$status"
  [ "$removal_status" -eq 0 ] || return 3
}

resource_reserve_output() {
  local out="$1" name
  for name in closure.json preparation.json inventory.json prepared.json campaign; do
    if [ -e "$out/$name" ] || [ -L "$out/$name" ]; then
      echo "Resource output already exists: $name" >&2
      return 2
    fi
  done
  # Atomically claim this attempt before installing any output-writing trap.
  # Keep the claim on failure so a rerun cannot overwrite earlier evidence.
  mkdir "$out/.resource-campaign-owner"
}

resource_finish() {
  local original="$?" cleanup=0 closure="not-started" final
  trap - EXIT INT TERM HUP
  set +e
  if [ "$resource_admitted" = 1 ]; then
    resource_close_container "$resource_name"
    cleanup="$?"
    closure="unknown"
    [ "$cleanup" -ne 0 ] || closure="confirmed-absent"
  fi
  final="$original"
  if [ "$final" -eq 0 ] && [ "$cleanup" -ne 0 ]; then final=1; fi
  node --input-type=module - "$resource_out/closure.json" "$original" "$cleanup" "$closure" "$resource_name" <<'NODE'
import { writeFileSync } from "node:fs";
const [out, workloadExit, cleanupExit, closure, container] = process.argv.slice(2);
writeFileSync(out, JSON.stringify({ schemaVersion: 1, workloadExit: Number(workloadExit), cleanupExit: Number(cleanupExit), closure, container }, null, 2) + "\n");
NODE
  if [ "$?" -ne 0 ]; then final=1; fi
  if [ "$final" -ne 0 ]; then echo "[resource-campaign-docker] FAILED (exit $final)" >&2; fi
  exit "$final"
}

resource_main() {
  if [ "$#" -ne 3 ] || [[ ! "$3" =~ ^[a-f0-9]{40}$ ]]; then
    echo 'usage: run-resource-campaign-docker.sh HOST_ROOT OUTPUT_DIR HOST_SHA' >&2
    return 2
  fi
  local host consumer host_sha image image_id package_dir package_tgz consumer_sha
  host="$(cd "$1" && pwd)"
  consumer="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
  host_sha="$3"
  mkdir -p "$2"
  resource_out="$(cd "$2" && pwd)"
  resource_reserve_output "$resource_out"
  # Unique names make cancellation and native-helper cleanup independently auditable.
  resource_name="crabpot-resource-$(node -e 'console.log(require("node:crypto").randomUUID())')"
  resource_admitted=0
  trap resource_finish EXIT
  trap 'exit 130' INT
  trap 'exit 143' TERM
  trap 'exit 129' HUP
  [ "$(git -C "$host" rev-parse HEAD)" = "$host_sha" ]
  consumer_sha="$(git -C "$consumer" rev-parse HEAD)"
  [ -z "$(git -C "$host" status --porcelain --untracked-files=no)" ]
  [ -z "$(git -C "$consumer" status --porcelain --untracked-files=no)" ]
  export ROOT_DIR="$host" OPENCLAW_DOCKER_E2E_REPO_ROOT="$host"
  export OPENCLAW_DOCKER_E2E_RUN_TIMEOUT=1200
  unset DOCKER_COMMAND_TIMEOUT
  export OPENCLAW_DOCKER_BUILD_TIMEOUT=1800s
  export OPENCLAW_DOCKER_BUILD_RETRIES=0
  export OPENCLAW_SKIP_DOCKER_BUILD=0
  source "$host/scripts/lib/docker-e2e-image.sh"
  cd "$host"
  node scripts/generate-plugin-inventory-doc.mts --json --commit "$host_sha" > "$resource_out/inventory.json"
  package_dir="$(mktemp -d "${RUNNER_TEMP:-/tmp}/crabpot-resource-package.XXXXXX")"
  # The native package owner builds and validates the installable host tarball.
  package_tgz="$(node scripts/package-openclaw-for-docker.mjs --source-dir "$host" \
    --allow-unreleased-changelog --output-dir "$package_dir" --output-name openclaw-current.tgz)"
  export OPENCLAW_CURRENT_PACKAGE_TGZ="$package_tgz"
  image="crabpot-resource:${host_sha}"
  docker_e2e_build_or_reuse "$image" resource-campaign "$host/scripts/e2e/Dockerfile" "$host" functional 0
  image_id="$(DOCKER_COMMAND_TIMEOUT=30s docker_e2e_docker_cmd image inspect --format '{{.Id}}' "$image")"
  [[ "$image_id" =~ ^sha256:[a-f0-9]{64}$ ]]
  node --input-type=module - "$resource_out/preparation.json" "$host_sha" "$consumer_sha" "$image_id" "$package_tgz" <<'NODE'
import { createHash } from "node:crypto";
import { readFileSync, writeFileSync } from "node:fs";
const [out, hostCommit, consumerCommit, imageId, archive] = process.argv.slice(2);
writeFileSync(out, JSON.stringify({ schemaVersion: 1, hostCommit, harnessCommit: hostCommit, consumerCommit, imageId,
  hostArchiveSha256: createHash("sha256").update(readFileSync(archive)).digest("hex"),
  selection: { distribution: "core" }, archives: [],
  sandbox: { network: "none", cpus: 2, memoryBytes: 4294967296, memorySwapBytes: 4294967296, pids: 512, init: true, deadlineSeconds: 1200 },
}, null, 2) + "\n");
NODE
  # Match the runner UID so exclusive 0600 input pins remain uploadable. The
  # workload receives a fresh HOME and no host credentials or Docker socket.
  resource_container_absent "$resource_name"
  resource_admitted=1
  docker_e2e_run_with_harness --name "$resource_name" --network none --init \
    --user "$(id -u):$(id -g)" \
    --cpus 2 --memory 4g --memory-swap 4g --pids-limit 512 \
    --mount "type=bind,src=$consumer,dst=/crabpot,readonly" \
    --mount "type=bind,src=$resource_out,dst=/output" \
    "$image_id" env -i PATH=/usr/local/bin:/usr/bin:/bin HOME=/tmp/resource-home \
    TMPDIR=/tmp CI=1 OPENCLAW_DISABLE_BONJOUR=1 OPENCLAW_NO_AUTO_UPDATE=1 bash -ceu '
      mkdir -p "$HOME"
      cd /app
      node /crabpot/scripts/prepare-resource-inputs.mjs \
        --plugin-inventory /output/inventory.json --host-root /app --out /output/prepared.json
      node /crabpot/scripts/run-resource-campaign.mjs \
        --plugin-inventory /output/inventory.json --inputs /output/prepared.json \
        --out /output/campaign --repetitions 3 --distribution core --execute
    '
}

if [[ "${BASH_SOURCE[0]}" = "$0" ]]; then
  resource_main "$@"
fi
