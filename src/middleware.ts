import { jwtDecode } from 'jwt-decode';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';


const authRoutes = ['/login', '/register'];
const commonPrivateRoutes = [
  '/dashboard',
  '/profile',
  '/profile/edit',
  '/profile/change-password',
  '/request-blood',
  '/my-requests',
  '/blood-requests',
];


export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = cookies().get('token')?.value;

  if (token && authRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  if (
    token &&
    (commonPrivateRoutes.includes(pathname) ||
      commonPrivateRoutes.some((route) => pathname.startsWith(route)))
  ) {
    return NextResponse.next();
  }

  if (!token) {
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  const decodedToken = jwtDecode(token) as { role: string };

  if (decodedToken?.role === 'ADMIN' && pathname === '/manage-users') {
    return NextResponse.next();
  }


  return NextResponse.redirect(new URL('/login', request.url));
}

export const config = {
  matcher: [
    '/login',
    '/register',
    '/request-blood',
    '/dashboard',
    '/request-blood',
    '/profile/:page*',
    '/manage-users',
    '/blood-requests',
    '/my-requests'
  ],
};