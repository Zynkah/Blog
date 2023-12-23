import type { Config } from "drizzle-kit";

export default {
  schema: "./db/schema.ts",
  driver: 'pg',
  out: "./drizzle",
} satisfies Config;
