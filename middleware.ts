import { redirect } from 'next/navigation'
// export { auth as middleware } from './auth'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const cookies = req.cookies.get('next-auth.session-token')
  if (cookies === undefined) {
    redirect('/register')
  }
}

export const config = {
  matcher: '/:path*'
}
