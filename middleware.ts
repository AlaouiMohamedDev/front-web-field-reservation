import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {

  const response = NextResponse.next()

  if (!request.cookies.get('jwt') && request.nextUrl.pathname.startsWith('/owner')) {

    return NextResponse.rewrite(new URL('/', request.url))
  }

  if (!request.cookies.get('admin') && request.nextUrl.pathname.startsWith('/admin')) {

    return NextResponse.rewrite(new URL('/', request.url))
  }
  
}