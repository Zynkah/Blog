import { NextRequest, NextResponse } from "next/server";
import { hash } from "bcrypt";

import { user } from "@/db/schema";
import { db } from "@/db";
import { nanoid } from "nanoid";

export async function POST(req: NextRequest) {
  try {
    const { username, email, password } = await req.json();
    
    // console.log({ username, email, password });

    const hashedPassword = await hash(password, 10);

    const registerNewUser = {
      id: nanoid(),
      username: username,
      email: email,
      password: hashedPassword,
    };

    const registerUser = await db
      .insert(user)
      .values(registerNewUser)
      .returning();

    return NextResponse.json({ user: registerUser });
  } catch (e) {
    console.log({ e });
  }
  return NextResponse.json({ message: "success" });
}
