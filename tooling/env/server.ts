import { createEnv } from '@t3-oss/env-core';
import { z } from 'zod';

import { config } from 'dotenv';
import { expand } from 'dotenv-expand';

expand(config({ path: '../../.env' }));

const stringBoolean = z.coerce
  .string()
  .transform((val) => {
    return val === 'true';
  })
  .default('false');

export const env = createEnv({
  server: {
    NODE_ENV: z
      .enum(['development', 'test', 'production'])
      .default('development'),
    DATABASE_URL: z.string().url(),
    DB_MIGRATING: stringBoolean,
    DB_SEEDING: stringBoolean,
    // DISCORD_CLIENT_ID: z.string(),
    // DISCORD_CLIENT_SECRET: z.string(),
  },
  runtimeEnv: process.env,
});
