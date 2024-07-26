import { env } from '@k95/env/server';
import { config } from 'dotenv';
import type { Config } from 'drizzle-kit';

if (!env.DATABASE_URL) throw new Error('DATABASE_URL not found in .env');

export default {
  schema: './schema/index.ts',
  dialect: 'postgresql',
  out: '../../apps/supabase/supabase/migrations',
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  strict: true,
} satisfies Config;
