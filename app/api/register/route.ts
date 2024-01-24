import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const {email, password} = await req.json();
        // validate email and password
        console.log({ email, password })
    }catch (e) {
        console.log({ e })
    }
    return NextResponse.json({ message: 'success'})
}