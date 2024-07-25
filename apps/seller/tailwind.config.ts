import type { Config } from 'tailwindcss';
import tailwindConfig from '@k95/shadcn';

const config: Config = {
  theme: {
    ...tailwindConfig.theme,
  },
  ...tailwindConfig,
};

export default config;
