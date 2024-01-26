import { text, pgTable } from "drizzle-orm/pg-core";

export const user = pgTable("user", {
  id: text("id").notNull().primaryKey(),
  username: text("username"),
  email: text("email").unique(),
  password: text("password"),
});

export const guestbook = pgTable("guestbook", {
  username: text("username"),
  message: text("message"),
});

export const article = pgTable("article", {
  id: text("id").notNull().primaryKey(),
  title: text("title"),
  description: text("description"),
  content: text("content"),
});
