import { env } from '@k95/env/server';
import { conn, db } from './';
import * as schema from './schema';
import { type Table, getTableName, sql } from 'drizzle-orm';
import * as seeds from './seeds';

if (!env.DB_SEEDING) {
  throw new Error('You must set DB_SEEDING to "true" when running seeds');
}

async function resetTable(database: typeof db, table: Table) {
  return database.execute(
    sql.raw(`TRUNCATE TABLE ${getTableName(table)} RESTART IDENTITY CASCADE`)
  );
}

for (const table of [schema.post]) {
  // await db.delete(table); // clear tables without truncating / resetting ids
  await resetTable(db, table);
}

await seeds.post(db);

await conn.end();
