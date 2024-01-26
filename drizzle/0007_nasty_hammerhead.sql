CREATE TABLE IF NOT EXISTS "guestbook" (
	"username" text,
	"message" text
);
--> statement-breakpoint
ALTER TABLE "user" DROP COLUMN IF EXISTS "message";