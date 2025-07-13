
import degit, { type Info } from 'degit';

import { spawn } from './process.js';

export const init = async (cwd: string) => spawn('git', ['init'], cwd);

export const add = async (cwd: string) => spawn('git', ['add', '.'], cwd);

export const commit = async (cwd: string, message: string) => spawn('git', ['commit', '-m', message], cwd);

export const clone = async (
  repo: string, 
  dest: string,
  onInfo?: (info: Info) => void,  
) => {
  const emitter = degit(repo, {
    cache: false,
    force: true,
    verbose: true,
  })

  if (onInfo) {
    emitter.on('info', onInfo)
    emitter.on('warn', onInfo)
  }

  await emitter.clone(dest)
}