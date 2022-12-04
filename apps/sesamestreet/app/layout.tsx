'server-only';

import 'design-system/global.css';
import { ReactNode } from 'react';
import { Inter } from '@next/font/google';
import { headers, cookies } from 'next/headers';
import SupabaseListener from '../components/SupabaseListener';
import createClient from '../utils/supabase-server';

import { Database } from '../db_types';
import clsx from 'clsx';

const inter = Inter({
    subsets: ['latin'],
});

export const revalidate = 0;

export default async function RootLayout({ children }: { children: ReactNode }) {
    const supabase = createClient();

    const {
        data: { session },
    } = await supabase.auth.getSession();

    return (
        <html
            lang='en'
            className={clsx(inter.className, 'bg-sky-900 antialiased md:subpixel-antialiased')}
        >
            <body>
                <SupabaseListener accessToken={session?.access_token} />
                <div className=''>{children}</div>
            </body>
        </html>
    );
}
