'server-only';

import { NavigationBar, Sidebar } from 'components/dashboard';
import { ReactNode } from 'react';

export default async function RootLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <NavigationBar />
            <div className='flex h-full w-full pt-16'>
                <Sidebar className='fixed top-16 left-0 flex h-full w-full' />
                <div className='flex h-full w-full pl-32'>{children}</div>
            </div>
        </>
    );
}
