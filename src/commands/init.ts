import { input } from '@inquirer/prompts'
import { Args, Command, Flags } from '@oclif/core'
import Case from 'case';
import path from 'node:path'
import { adjectives, animals, uniqueNamesGenerator } from 'unique-names-generator';

import { write } from '../lib/config.js';
import { add, clone, commit, init } from '../lib/git.js'
import { installDependencies } from '../lib/node.js';
import { link } from '../lib/vault.js';

export default class Init extends Command {
  static override args = {
    dir: Args.string({ description: 'directory for the new spaceship', }),
    vault: Args.string({ description: 'existing obsidian vault', }),
  }
  static override description = 'Initialises a new spaceship'
  static override examples = [
    '<%= config.bin %> <%= command.id %>',
  ]
  static override flags = {
    dir: Flags.string({ char: 'd', description: 'directory for the new spaceship' }),
    vault: Flags.string({ char: 'v', description: 'existing obsidian Vault' }),
  }

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(Init)

    let dir = flags.dir ?? args.dir
    let vault = flags.vault ?? args.vault

    if (!dir) {
      const randomDirName = uniqueNamesGenerator({
        dictionaries: [adjectives, animals],
        length: 2,
        separator: '-',
      })
      dir = await input({
        default: `./${randomDirName}`,
        message: 'Enter directory for the new spaceship',
        required: true,
      })
    }

    if (!vault) {
      vault = await input({
        message: 'Enter your Obsidian vault (leave empty to create a new one)',
        required: false,
      })
    }

    const dest = path.resolve(dir)

    const title = await input({
      default: Case.title(path.basename(dest)),
      message: 'Enter title for the new spaceship',
      prefill: 'editable',
      required: false,
    })

    const site = await input({
      message: 'Enter url for the new spaceship (if you already have one)',
      prefill: 'tab',
      required: false,
    })

    try {
      this.log(`Initialising spaceship at ${dir}`)

      const dest = path.resolve(dir)

      await clone('aitorllj93/astro-theme-spaceship', dest, (info) => this.debug(info.message))

      await write({
        site,
        title,
      }, dest)

      if (vault) {
        await link(vault, './src/content/vault', dest);
      }

      await init(dest)
      await add(dest)
      await commit(dest, 'Initial commit')

      this.log('Now installing dependencies...')

      await installDependencies(dest, (info) => this.debug(info));

      this.log(`Spaceship succesfully initialised at ${dir}`)
    } catch (error) {
      this.error(error as Error)
    }
  }
}
