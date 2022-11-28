'server-only';

import 'design-system/global.css';
import { ReactNode } from 'react';
import { Inter } from '@next/font/google';
import { headers, cookies } from 'next/headers';
import SupabaseListener from '../components/SupabaseListener';
import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '../db_types';

const inter = Inter({
    subsets: ['latin'],
});

export default async function RootLayout({ children }: { children: ReactNode }) {
    const supabase = createServerComponentSupabaseClient<Database>({
        headers,
        cookies,
    });

    const {
        data: { session },
    } = await supabase.auth.getSession();

    return (
        <html lang='en' className='bg-sky-900 font-sans antialiased md:subpixel-antialiased'>
            <body>
                <div className=''>{children}</div>
                <SupabaseListener accessToken={session?.access_token} />
            </body>
        </html>
    );
}
