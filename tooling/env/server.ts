import { createEnv } from '@t3-oss/env-core';
import { z } from 'zod';

const stringBoolean = z.coerce
  .string()
  .transform((val) => {
    return val === 'true';
  })
  .default('false');

export const env = createEnv({
  server: {
    DATABASE_URL: z.string().url(),
    DISCORD_CLIENT_ID: z.string(),
    DISCORD_CLIENT_SECRET: z.string(),
  },
  runtimeEnv: process.env,
});
