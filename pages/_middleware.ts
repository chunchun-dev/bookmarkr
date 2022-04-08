import { NextApiRequest } from "next"
import { getToken } from "next-auth/jwt"
import { NextRequest, NextResponse } from "next/server"

interface AuthNextApiRequest extends NextApiRequest {
    url: string,
    nextUrl: string
}

export async function middleware(req: AuthNextApiRequest) {
    // return early if url isn't supposed to be protected
    if (process.env.NODE_ENV === "production") {
        if (!req?.url?.includes("/protected")) {
            return NextResponse.next()
        }

        const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })

        const url = req.nextUrl.clone()
        url.pathname = '/api/auth/signin'
        if (!session) return NextResponse.redirect(url)

        return NextResponse.next()
    } else {
        return NextResponse.next()
    }
}