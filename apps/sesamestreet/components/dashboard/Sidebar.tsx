'use server';

import clsx from 'clsx';

export interface SidebarProps {
    className?: string;
}

export default function Sidebar({ className }: SidebarProps) {
    return (
        <aside
            className={clsx(
                className,
                'flex w-32 h-full flex-col items-center justify-center bg-gray-800 p-4',
            )}
        >
            <span className='text-3xl font-extrabold text-green-900'>Welcome!</span>
            <span className='text-3xl font-extrabold text-green-900'>Line two!</span>
        </aside>
    );
}
