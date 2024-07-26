import { env } from '@k95/env/server';
import { config } from 'dotenv';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';

if (!env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not set');
}

/**
 * Cache the database connection in development. This avoids creating a new connection on every HMR
 * update.
 */
const globalForDb = globalThis as unknown as {
  conn: postgres.Sql | undefined;
};

export const conn =
  globalForDb.conn ??
  postgres(env.DATABASE_URL, {
    max: env.DB_MIGRATING || env.DB_SEEDING ? 1 : undefined,
    // biome-ignore lint/suspicious/noEmptyBlockStatements: <explanation>
    onnotice: env.DB_SEEDING ? () => {} : undefined,
  });
if (env.NODE_ENV !== 'production') globalForDb.conn = conn;

export const db = drizzle(conn, {
  schema,
  // logger: true
});
