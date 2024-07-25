import { env } from '@k95/env/server';
import type { Config } from 'drizzle-kit';

if (!env.DATABASE_URL) throw new Error('DATABASE_URL not found in .env');

export default {
  schema: './src/server/db/schema/index.ts',
  dialect: 'postgresql',
  out: './supabase/migrations',
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  strict: true,
} satisfies Config;
