import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { guestbook } from "@/db/schema";
import { nanoid } from "nanoid";

export async function POST(req: NextRequest) {
  const newUser = await req.json();

  const newUserObject = {
    id: nanoid(),
    username: newUser.username,
    message: newUser.message
  };

  const createUser = await db
  .insert(guestbook)
  .values(newUserObject)
  .returning();

  return NextResponse.json({ user: createUser });
}
