export function portableCommand(command, platform = process.platform) {
  if (platform === "win32" && ["npm", "npx", "pnpm", "yarn"].includes(command)) {
    return `${command}.cmd`;
  }
  return command;
}

export function configuredTimeoutMs(envName, fallback) {
  const raw = process.env[envName];
  if (!raw) {
    return fallback;
  }
  const parsed = Number.parseInt(raw, 10);
  if (!Number.isInteger(parsed) || parsed <= 0) {
    throw new Error(`${envName} must be a positive integer timeout in milliseconds`);
  }
  return parsed;
}
