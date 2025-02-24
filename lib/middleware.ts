import { authLink, afterAuthLink, privateLinkMap } from "@/config/links";
import { NextResponse, type NextRequest } from "next/server";
import axios from "axios";

const STRAPI_API_URL =
  process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337/api";

// Function to get user from Strapi using the stored JWT token
const getUserFromStrapi = async (token: string | undefined) => {
  if (!token) return null;

  try {
    const { data } = await axios.get(`${STRAPI_API_URL}/users/me`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  } catch (error) {
    return null;
  }
};

export async function updateSession(request: NextRequest) {
  let strapiResponse = NextResponse.next({ request });

  const token = request.cookies.get("strapi_token")?.value;
  const user = await getUserFromStrapi(token);

  const validateUser = (request: NextRequest): boolean => {
    const keys = Object.keys(privateLinkMap);
    return keys.some(
      (key: string) => request.nextUrl.pathname === privateLinkMap[key].path
    );
  };

  console.log(user);

  if (!user && validateUser(request)) {
    // Redirect unauthenticated users to the login page
    const url = request.nextUrl.clone();
    url.pathname = authLink.path;
    return NextResponse.redirect(url);
  }

  if (
    user &&
    (request.nextUrl.pathname.startsWith("/login") ||
      request.nextUrl.pathname.startsWith("/signup"))
  ) {
    // Redirect authenticated users away from login/signup to the dashboard
    const url = request.nextUrl.clone();
    url.pathname = afterAuthLink.path;
    return NextResponse.redirect(url);
  }

  return strapiResponse;
}
