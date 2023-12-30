ALTER TABLE "user" ADD COLUMN "username" text;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "message" text;--> statement-breakpoint
ALTER TABLE "user" DROP COLUMN IF EXISTS "name";--> statement-breakpoint
ALTER TABLE "user" DROP COLUMN IF EXISTS "email";--> statement-breakpoint
ALTER TABLE "user" DROP COLUMN IF EXISTS "password";--> statement-breakpoint
ALTER TABLE "user" DROP COLUMN IF EXISTS "role";--> statement-breakpoint
ALTER TABLE "user" DROP COLUMN IF EXISTS "created_at";--> statement-breakpoint
ALTER TABLE "user" DROP COLUMN IF EXISTS "updated_at";