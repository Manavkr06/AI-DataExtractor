import {neon, neonConfig}from '@neondatabase/serverless'
neonconfig.fetchconnectioncache = true
import {drizzle} from "drizzle-orm/neon-http";

neonconfig.fetchconnectioncache = true;

if (! process.env.DATABASE_URL) {
    throw new Error("database url not found");
}

const sql = neon(process.env.DATABASE_URL);
export const db = drizzle(sql);