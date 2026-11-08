import { appendFile } from "node:fs/promises";

export async function writeGithubOutput(result) {
  const output = `${Object.entries(result).map(([key, value]) => `${key}=${value}`).join("\n")}\n`;
  if (process.env.GITHUB_OUTPUT) {
    await appendFile(process.env.GITHUB_OUTPUT, output, "utf8");
    return;
  }
  process.stdout.write(output);
}
