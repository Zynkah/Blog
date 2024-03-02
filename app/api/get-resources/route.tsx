import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { resources } from "@/db/schema";

export async function GET(req: NextRequest) {
  try {
    const resourceEntries = await db.select().from(resources).execute();

    return NextResponse.json({ resourceEntries });
  } catch (error) {
    console.error("Error fetching resources entries:", error);
    return NextResponse.json({ error: "Failed to fetch resources entries" });
  }
}
