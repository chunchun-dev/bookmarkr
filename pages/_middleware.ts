import { NextApiRequest } from "next"
import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server"

export async function middleware(req: NextApiRequest) {
    // return early if url isn't supposed to be protected
    if (!req?.url?.includes("/protected")) {
        return NextResponse.next()
    }

    const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })

    if (!session) return NextResponse.redirect("/api/auth/signin")

    return NextResponse.next()
}