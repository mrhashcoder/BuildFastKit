import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

const STRAPI_API_URL =
  process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337/api";

export async function GET(req: NextRequest) {
  const token = cookies().get("strapi_token")?.value;

  if (!token) {
    console.log("[GET ME] : Token Error");
    return NextResponse.json({ user: null }, { status: 401 });
  }

  try {
    const res = await fetch(`${STRAPI_API_URL}/users/me`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    // console.log("[GET ME] : res ", res);
    if (!res.ok) throw new Error("User not found");

    const user = await res.json();

    console.log("[GET ME] : user ", user);
    return NextResponse.json({ user }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
