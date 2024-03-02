ALTER TABLE "resource" RENAME COLUMN "title" TO "content";--> statement-breakpoint
ALTER TABLE "resource" ADD COLUMN "header" text;