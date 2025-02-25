import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
  // Clear the authentication token
  cookies().set("strapi_token", "", { maxAge: -1, path: "/" });

  return NextResponse.json({ message: "Logged out" }, { status: 200 });
}
