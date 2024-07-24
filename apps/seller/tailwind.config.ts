import type { Config } from "tailwindcss";
import tailwindConfig from '@k95/shadcn/config'

const config: Config = {
  theme: {
    ...tailwindConfig.theme
  },
  ...tailwindConfig
}

export default config;
