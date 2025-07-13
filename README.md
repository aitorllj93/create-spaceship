create-spaceship
=================

Spaceship CLI


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/create-spaceship.svg)](https://npmjs.org/package/create-spaceship)
[![Downloads/week](https://img.shields.io/npm/dw/create-spaceship.svg)](https://npmjs.org/package/create-spaceship)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g create-spaceship
$ create-spaceship COMMAND
running command...
$ create-spaceship (--version)
create-spaceship/0.0.2 darwin-arm64 node-v22.15.0
$ create-spaceship --help [COMMAND]
USAGE
  $ create-spaceship COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`create-spaceship hello PERSON`](#create-spaceship-hello-person)
* [`create-spaceship hello world`](#create-spaceship-hello-world)
* [`create-spaceship help [COMMAND]`](#create-spaceship-help-command)
* [`create-spaceship init [DIR]`](#create-spaceship-init-dir)
* [`create-spaceship plugins`](#create-spaceship-plugins)
* [`create-spaceship plugins add PLUGIN`](#create-spaceship-plugins-add-plugin)
* [`create-spaceship plugins:inspect PLUGIN...`](#create-spaceship-pluginsinspect-plugin)
* [`create-spaceship plugins install PLUGIN`](#create-spaceship-plugins-install-plugin)
* [`create-spaceship plugins link PATH`](#create-spaceship-plugins-link-path)
* [`create-spaceship plugins remove [PLUGIN]`](#create-spaceship-plugins-remove-plugin)
* [`create-spaceship plugins reset`](#create-spaceship-plugins-reset)
* [`create-spaceship plugins uninstall [PLUGIN]`](#create-spaceship-plugins-uninstall-plugin)
* [`create-spaceship plugins unlink [PLUGIN]`](#create-spaceship-plugins-unlink-plugin)
* [`create-spaceship plugins update`](#create-spaceship-plugins-update)

## `create-spaceship hello PERSON`

Say hello

```
USAGE
  $ create-spaceship hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ create-spaceship hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/aitorllj93/create-spaceship/blob/v0.0.2/src/commands/hello/index.ts)_

## `create-spaceship hello world`

Say hello world

```
USAGE
  $ create-spaceship hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ create-spaceship hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/aitorllj93/create-spaceship/blob/v0.0.2/src/commands/hello/world.ts)_

## `create-spaceship help [COMMAND]`

Display help for create-spaceship.

```
USAGE
  $ create-spaceship help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for create-spaceship.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.31/src/commands/help.ts)_

## `create-spaceship init [DIR]`

Initialises a new spaceship

```
USAGE
  $ create-spaceship init [DIR] [-d <value>]

ARGUMENTS
  DIR  directory for the new spaceship

FLAGS
  -d, --dir=<value>  directory for the new spaceship

DESCRIPTION
  Initialises a new spaceship

EXAMPLES
  $ create-spaceship init
```

_See code: [src/commands/init.ts](https://github.com/aitorllj93/create-spaceship/blob/v0.0.2/src/commands/init.ts)_

## `create-spaceship plugins`

List installed plugins.

```
USAGE
  $ create-spaceship plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ create-spaceship plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.44/src/commands/plugins/index.ts)_

## `create-spaceship plugins add PLUGIN`

Installs a plugin into create-spaceship.

```
USAGE
  $ create-spaceship plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into create-spaceship.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the CREATE_SPACESHIP_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the CREATE_SPACESHIP_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ create-spaceship plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ create-spaceship plugins add myplugin

  Install a plugin from a github url.

    $ create-spaceship plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ create-spaceship plugins add someuser/someplugin
```

## `create-spaceship plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ create-spaceship plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ create-spaceship plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.44/src/commands/plugins/inspect.ts)_

## `create-spaceship plugins install PLUGIN`

Installs a plugin into create-spaceship.

```
USAGE
  $ create-spaceship plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into create-spaceship.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the CREATE_SPACESHIP_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the CREATE_SPACESHIP_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ create-spaceship plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ create-spaceship plugins install myplugin

  Install a plugin from a github url.

    $ create-spaceship plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ create-spaceship plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.44/src/commands/plugins/install.ts)_

## `create-spaceship plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ create-spaceship plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ create-spaceship plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.44/src/commands/plugins/link.ts)_

## `create-spaceship plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ create-spaceship plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ create-spaceship plugins unlink
  $ create-spaceship plugins remove

EXAMPLES
  $ create-spaceship plugins remove myplugin
```

## `create-spaceship plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ create-spaceship plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.44/src/commands/plugins/reset.ts)_

## `create-spaceship plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ create-spaceship plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ create-spaceship plugins unlink
  $ create-spaceship plugins remove

EXAMPLES
  $ create-spaceship plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.44/src/commands/plugins/uninstall.ts)_

## `create-spaceship plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ create-spaceship plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ create-spaceship plugins unlink
  $ create-spaceship plugins remove

EXAMPLES
  $ create-spaceship plugins unlink myplugin
```

## `create-spaceship plugins update`

Update installed plugins.

```
USAGE
  $ create-spaceship plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.44/src/commands/plugins/update.ts)_
<!-- commandsstop -->
