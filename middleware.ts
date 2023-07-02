import {auth} from "@/auth";
import { redirect } from 'next/navigation'

export { auth as middleware } from './auth'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'


export function isAuthorized(req: NextRequest) {
    console.log('hello from isAuthorized middleware')
    // console.log('loging auth from middleware', auth)
    const cookies = req.cookies.get('next-auth.session-token')
    if(cookies === undefined) {
        return redirect('/register')
    }
}

export const config = {
    matcher: '/:path*',
}