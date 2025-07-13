

import type {Hook} from '@oclif/core'

const hook: Hook.CommandNotFound = async (opts) => opts.config.runCommand('init', opts.argv)

export default hook;