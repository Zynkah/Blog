import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { guestbook } from "@/db/schema";
import { nanoid } from "nanoid";

export async function POST(req: NextRequest) {
  const newEntry = await req.json();

  const newEntryObject = {
    id: nanoid(),
    username: newEntry.username,
    guestbookMessage: newEntry.guestbookMessage,
  };

  const createEntry = await db
    .insert(guestbook)
    .values(newEntryObject)
    .returning();

  return NextResponse.json({ guestbook: createEntry });
}
