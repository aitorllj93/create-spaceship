import { select } from '@inquirer/prompts'
import { Args, Command, Flags } from '@oclif/core'
import path from 'node:path'

import { CONFIG_KEYS, type ConfigKey, get } from '../../lib/config.js';

export default class ConfigGet extends Command {
  static override args = {
    key: Args.string({ description: 'the config key', }),
  }
  static override description = 'Retrieves configuration for spaceship'
  static override examples = [
    '<%= config.bin %> <%= command.id %>',
  ]
  static override flags = {
    dir: Flags.string({ char: 'd', description: 'spaceship directory' }),
  }

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(ConfigGet)

    let {dir} = flags
    let {key} = args

    if (!dir) {
      dir = process.cwd()
    }

    if (!key || !CONFIG_KEYS.includes(key as ConfigKey)) {
      key = (await select({
        choices: CONFIG_KEYS,
        message: 'Enter config key',
      })) as ConfigKey
    }

    try {
      const dest = path.resolve(dir)

      const value = await get(key as ConfigKey, dest)

      this.log(value)
    } catch (error) {
      this.error(error as Error)
    }
  }
}
