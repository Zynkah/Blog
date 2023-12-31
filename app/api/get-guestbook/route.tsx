import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { user } from "@/db/schema";

export async function GET(req: NextRequest) {
  try {
    const guestbookEntries = await db
      .select()
      .from(user)
      .execute();

    return NextResponse.json({ guestbookEntries });
  } catch (error) {
    console.error("Error fetching guestbook entries:", error);
    return NextResponse.error();
  }
}
