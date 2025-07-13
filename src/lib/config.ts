import fs from "node:fs/promises"
import path from "node:path";
import { z } from "zod";

const configSchema = z.object({
  author: z.string().optional(),
  base: z.string().optional(),
  defaultLocale: z.string().default('en').optional(),
  description: z.string().optional(),
  site: z.string().transform(s => s.length === 0 ? undefined : s).optional(),
  title: z.string().optional(),
})

export type Config = z.infer<typeof configSchema>

export type ConfigKey = keyof Config;

export const CONFIG_KEYS = Object.keys(configSchema.shape) as ConfigKey[]

export const write = async (config: Config, cwd = process.cwd()) => {
  const { data } = configSchema.safeParse(config)

  await fs.writeFile(path.join(cwd, 'website.config.json'), JSON.stringify(data, null, 2))
}

export const get = async (key: ConfigKey, cwd = process.cwd()) => {
  const content = await fs.readFile(path.join(cwd, 'website.config.json'), 'utf8')
  const { data } = configSchema.safeParse(JSON.parse(content))

  return data?.[key]
}

export const set = async (key: ConfigKey, value: string, cwd = process.cwd()) => {
  const content = await fs.readFile(path.join(cwd, 'website.config.json'), 'utf8')
  const config = ({ ...JSON.parse(content), [key]: value})

  return write(config, cwd)
}