

import type {Hook} from '@oclif/core'

const hook: Hook.CommandNotFound = async (opts) => {
  await opts.config.runCommand('hello', opts.argv);
}

export default hook;