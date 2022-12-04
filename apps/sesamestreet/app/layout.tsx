'server-only';

import 'design-system/global.css';

import { Inter } from '@next/font/google';
import clsx from 'clsx';
import { ReactNode } from 'react';

import SupabaseListener from '../components/SupabaseListener';
import createClient from '../utils/supabase-server';

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
