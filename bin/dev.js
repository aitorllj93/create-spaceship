#!/usr/bin/env -S node --loader ts-node/esm --disable-warning=ExperimentalWarning
if (process.argv.length === 2) process.argv.push('<default-command-name>')

import {execute} from '@oclif/core'

await execute({development: true, dir: import.meta.url})
