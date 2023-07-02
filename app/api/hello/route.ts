import { NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { userAgent } from 'next/server'
import type { NextRequest } from 'next/server'
import { redirect } from 'next/navigation'

export async function GET(request: NextRequest) {
    const {searchParams}  = new URL(request.url)
    const headersList = headers()
    // console.log(headersList);
    const user = userAgent(request)
    console.log(request.cookies.get('next-auth.session-token'))
    // if(request.cookies.get('next-auth.session-token') === undefined) {
    //     return redirect('/register')
    // }
    
    return new NextResponse('Hello, Next.js!')
}