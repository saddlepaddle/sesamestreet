'server-only';

import NavigationBar from 'components/dashboard/NavigationBar';
import Sidebar from 'components/dashboard/Sidebar';
import { ReactNode } from 'react';

export default async function RootLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <NavigationBar />
            <div className='flex w-full h-full pt-16'>
                <Sidebar className='fixed w-full h-full top-16 left-0 flex' />
                <div className='w-full h-full pl-32 flex'>{children}</div>
            </div>
        </>
    );
}
