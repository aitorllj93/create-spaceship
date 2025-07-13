import { spawn as childSpawn } from "node:child_process";

export const spawn = (
  command: string,
  args: string[],
  cwd: string,
  onData?: (data: string) => void,
) => new Promise((resolve, reject) => {
  const npm = childSpawn(command, args, { cwd });

  if (onData) {
    npm.stdout.on('data', onData);
  }

  npm.on('close', (code) => resolve(code));
  npm.on('error', (err) => reject(err));
})