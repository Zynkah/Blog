import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { guestbook } from "@/db/schema";

export async function GET(req: NextRequest) {
  try {
    const guestbookEntries = await db.select().from(guestbook).execute();
    console.log("Guestbook Entries:", guestbookEntries);

    return NextResponse.json({ guestbookEntries });
  } catch (error) {
    console.error("Error fetching guestbook entries:", error);
    return NextResponse.json({ error: "Failed to fetch guestbook entries" });
  }
}
