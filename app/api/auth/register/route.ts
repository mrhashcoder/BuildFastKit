import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

const STRAPI_API_URL = process.env.BASE_SERVER_URL;

export async function POST(req: NextRequest) {
  try {
    const { username, email, password } = await req.json();

    const res = await fetch(`${STRAPI_API_URL}/auth/local/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.error.message || "Registration failed");
    }

    const { jwt, user } = await res.json();

    // Set HTTP-only cookie with JWT
    cookies().set("strapi_token", jwt, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
    });

    return NextResponse.json({ user }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
