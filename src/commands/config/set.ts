import { input, select } from '@inquirer/prompts'
import { Args, Command, Flags } from '@oclif/core'
import path from 'node:path'

import { CONFIG_KEYS, type ConfigKey, set } from '../../lib/config.js';

export default class ConfigSet extends Command {
  static override args = {
    key: Args.string({ description: 'the config key', }),
    value: Args.string({ description: 'the config value', }),
  }
  static override description = 'Retrieves configuration for spaceship'
  static override examples = [
    '<%= config.bin %> <%= command.id %>',
  ]
  static override flags = {
    dir: Flags.string({ char: 'd', description: 'spaceship directory' }),
  }

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(ConfigSet)

    let {dir} = flags
    let {key, value} = args

    if (!dir) {
      dir = process.cwd()
    }

    if (!key || !CONFIG_KEYS.includes(key as ConfigKey)) {
      key = (await select({
        choices: CONFIG_KEYS,
        message: 'Enter config key',
      })) as string
    }

    if (!value) {
      value = (await input({
        message: 'Enter config value',
        required: true,
      })) as string
    }

    try {
      const dest = path.resolve(dir)

      await set(key as ConfigKey, value, dest)

      this.log(value)
    } catch (error) {
      this.error(error as Error)
    }
  }
}
