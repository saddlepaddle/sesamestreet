'use server';

import { faBell } from '@fortawesome/free-regular-svg-icons';
import clsx from 'clsx';

import SidebarLink from './components/SidebarLink';

export interface SidebarProps {
    className?: string;
}

export default function Sidebar({ className }: SidebarProps) {
    return (
        <aside
            className={clsx(
                className,
                'flex h-full w-fit flex-col items-start justify-center bg-gray-800 p-2',
            )}
        >
            <SidebarLink href='/home' tooltip='Home' icon={faBell} />
        </aside>
    );
}
