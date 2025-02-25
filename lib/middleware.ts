"use client";
import { authLink, afterAuthLink, privateLinkMap } from "@/config/links";
import { NextResponse, type NextRequest } from "next/server";
import axios from "axios";
import { UserPlus } from "lucide-react";

const STRAPI_API_URL =
  process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337/api";

// Function to get user from Strapi using the stored JWT token
const getUserFromStrapi = async (request: NextRequest) => {
  try {
    let url = request.nextUrl.origin + "/api/auth/me";
    const res = await fetch(url, {
      headers: request.headers,
    });
    if (res.ok) {
      const { user } = await res.json();
      console.log("[getUserFromStrapi] user : ", user);
      return user;
    }
    return null;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export async function updateSession(request: NextRequest) {
  let strapiResponse = NextResponse.next({ request });

  const token = request.cookies.get("strapi_token")?.value;

  console.log("[updateSession] token : ", token);
  const validateUser = (request: NextRequest): boolean => {
    const keys = Object.keys(privateLinkMap);
    return keys.some((key: string) =>
      request.nextUrl.pathname.startsWith(privateLinkMap[key].path)
    );
  };

  if (!token && validateUser(request)) {
    // Redirect unauthenticated users to the login page
    const url = request.nextUrl.clone();
    url.pathname = authLink.path;
    return NextResponse.redirect(url);
  }

  return strapiResponse;
}
