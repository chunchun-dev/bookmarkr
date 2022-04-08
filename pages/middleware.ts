/*
import { NextApiRequest } from "next"
import { getToken } from "next-auth/jwt"
import { NextRequest, NextResponse } from "next/server"

export async function middleware(req: NextRequest) {
    // return early if url isn't supposed to be protected
    if (!req?.url?.includes("/protected")) {
        return NextResponse.next()
    }

    const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })

    const url = req.nextUrl.clone()
    url.pathname = '/api/auth/signin'
    if (!session) return NextResponse.redirect(url)

    return NextResponse.next()
}
*/