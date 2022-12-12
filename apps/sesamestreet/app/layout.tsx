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
            className={clsx(inter.className, 'bg-gray-50 antialiased md:subpixel-antialiased')}
        >
            <body className='w-screen h-screen flex'>
                <SupabaseListener accessToken={session?.access_token} />
                {children}
            </body>
        </html>
    );
}
