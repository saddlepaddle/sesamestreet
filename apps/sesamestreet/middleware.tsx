import { createMiddlewareSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { NextRequest, NextResponse } from 'next/server';

const redirectResponse = (request: NextRequest, pathname: string): NextResponse => {
    const redirectUrl = request.nextUrl.clone();

    redirectUrl.pathname = pathname;
    return NextResponse.redirect(redirectUrl);
};

// this middleware refreshes the user's session and must be run
// for any Server Component route that uses `createServerComponentSupabaseClient`
export async function middleware(request: NextRequest) {
    const response = NextResponse.next();

    const supabase = createMiddlewareSupabaseClient({ req: request, res: response });

    const {
        data: { session },
    } = await supabase.auth.getSession();

    if (session && request.nextUrl.pathname === '/') {
        return redirectResponse(request, '/dashboard');
    }

    if (!session && request.nextUrl.pathname.startsWith('/dashboard')) {
        return redirectResponse(request, '/');
    }

    return response;
}

export const config = {
    matcher: ['/dashboard', '/'],
};
