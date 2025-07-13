import { updateSession } from "@/lib/supabase/middleware";
import { NextResponse, NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    const isStatic =
        pathname.startsWith("/_next/static") ||
        pathname.startsWith("/_next/image") ||
        pathname === "/favicon.ico" ||
        pathname.match(/\.(svg|png|jpg|jpeg|gif|webp)$/);

    if (isStatic) {
        return NextResponse.next();
    }

    if (pathname.startsWith("/dashboard")) {
        const response = await updateSession(request);

        if (!response) {
            const loginUrl = new URL("/login", request.url);
            return NextResponse.redirect(loginUrl);
        }

        return response;
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/dashboard",
        "/dashboard/:path*",
    ],
};
