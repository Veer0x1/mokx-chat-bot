import { redirect } from 'next/navigation'
import { NextResponse } from 'next/server'
export { auth as middleware } from './auth'
import type { NextRequest } from 'next/server'

// as of now, this is not working, nextjs team is working on it

// export function middleware(req: NextRequest) {
//   const cookies = req.cookies.get('next-auth.session-token')
//   if (cookies === undefined) {
//     return NextResponse.rewrite(new URL('/register', req.url))
//   }
// }

// export const config = {
//   matcher: '/:path*'
// }
