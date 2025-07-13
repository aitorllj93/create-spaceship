import { spawn } from "./process.js";

export const installDependencies = (
  dest: string,
  onData?: (data: string) => void,
) => spawn('npm', ['install'], dest, onData);