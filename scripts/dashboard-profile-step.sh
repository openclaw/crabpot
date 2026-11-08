run_profile_step() {
  local timeout_seconds="$1"
  local warning="$2"
  shift 2
  if timeout "${timeout_seconds}s" "$@"; then
    return 0
  fi
  echo "::warning::${warning}"
  return 1
}
