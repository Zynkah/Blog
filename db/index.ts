import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { user } from './schema';

const sql = neon(process.env.DRIZZLE_DATABASE_URL!);
export const db = drizzle(sql);

const main = async () => {
    console.log("Running...");

    const result = await db.select().from(user);
    console.log("users: ", result)
}

main();