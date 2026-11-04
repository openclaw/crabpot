export function readOptionValue(argv, index, flagName) {
  const value = argv[index + 1];
  if (!value || value.startsWith("--")) {
    throw new Error(`${flagName} requires a value`);
  }
  return value;
}
