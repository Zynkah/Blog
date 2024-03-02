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

export const resources = pgTable("resource", {
  id: text("id").notNull().primaryKey(),
  header: text("header"),
  content: text("content"),
  docs: text("docs"),
  tutorial: text("tutorial"),
  course_1: text("course_1"),
  course_1_name: text("course_name_1"),
  course_2: text("course_2"),
  course_2_name: text("course_name_2"),
  course_3: text("course_3"),
  course_3_name: text("course_name_3"),
  image: text("image"),
});
