// import { NextResponse} from "next/server"
// import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs"
// import type { NextRequest } from 'next/server'
// // import type { Database } from '@/lib/database.types'

// export default async function middleware(req: NextRequest) {
//     const res = NextResponse.next()
//     const pathname = req.nextUrl.pathname
//     // console.log(pathname)

//     // const supabase = createMiddlewareClient({ req, res })

//     // const { data: { session } } = await supabase.auth.getSession()

//     // console.log(session)

//     // if ( !session && (pathname.startsWith("/dashboard"))) {
//     //     console.log("middddd")
//     //     const url = new URL(req.url)
//     //     url.pathname = "/signin"
//     //     return NextResponse.redirect(url)
//     // }

//     // if ( session && ( pathname === "/signin" || pathname === "/signup" )) {
//     //     console.log("dashhhh")
//     //     const url = new URL(req.url)
//     //     url.pathname = "/dashboard"
//     //     return NextResponse.redirect(url)
//     // }

//     return res
// }

import { type NextRequest } from "next/server"
import { updateSession } from "@/lib/middleware"

export async function middleware(request: NextRequest) {
  return await updateSession(request)
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
}
