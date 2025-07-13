import { rm } from "node:fs/promises"
import path from "node:path";

import { spawn } from "./process.js";

export const link = async (src: string, target = './src/content/vault', cwd = process.cwd()) => {
  if (src === target) {
    return
  }

  await rm(path.resolve(cwd, target), {
    force: true,
    recursive: true,
  });

  return spawn('ln', ['-s', path.resolve(process.cwd(), src), path.resolve(cwd, target)], cwd);
}