#!/usr/bin/env node
if (process.argv.length === 2) process.argv.push('<default-command-name>')

import {execute} from '@oclif/core'

await execute({dir: import.meta.url})
