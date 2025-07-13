import { input } from '@inquirer/prompts'
import { Args, Command, Flags } from '@oclif/core'
import path from 'node:path'
import { adjectives, animals, uniqueNamesGenerator } from 'unique-names-generator';

import { clone } from '../lib/git.js'

export default class Init extends Command {
  static override args = {
    dir: Args.string({ description: 'directory for the new spaceship', }),
  }
  static override description = 'Initialises a new spaceship'
  static override examples = [
    '<%= config.bin %> <%= command.id %>',
  ]
  static override flags = {
    dir: Flags.string({ char: 'd', description: 'directory for the new spaceship' }),
  }

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(Init)

    let dir = flags.dir ?? args.dir

    if (!dir) {
      const randomDirName = uniqueNamesGenerator({
        dictionaries: [adjectives, animals],
        length: 2,
        separator: '-',
      });
      dir = await input({
        default: `./${randomDirName}`,
        message: 'Enter directory for the new spaceship'
      });
    }

    try {
      this.log(`Initialising spaceship at ${dir}`);

      const dest = path.resolve(dir);

      await clone('aitorllj93/astro-theme-spaceship', dest, (info) => this.debug(info.message))

      this.log(`Spaceship succesfully initialised at ${dir}`)
    } catch (error) {
      this.error(error as Error)
    }
  }
}
