'use client';

import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { Tooltip } from 'design-system';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { forwardRef, HTMLAttributes, RefObject } from 'react';

export interface SidebarLinkProps extends HTMLAttributes<HTMLAnchorElement> {
    icon: IconDefinition;
    tooltip: string;
    href: string;
}

const SidebarLink = forwardRef<RefObject<HTMLAnchorElement>, SidebarLinkProps>(
    ({ className, icon, tooltip, href, ...props }, ref) => {
        const segment = useSelectedLayoutSegment();
        const active = href === `/${segment}`;

        return (
            <Tooltip side='right' text={tooltip}>
                <Link
                    {...props}
                    ref={ref as RefObject<HTMLAnchorElement>}
                    className={clsx(
                        className,
                        'flex items-center justify-center p-4 hover:bg-gray-900',
                        {
                            'bg-gray-900': active,
                        },
                    )}
                    href={href}
                >
                    <FontAwesomeIcon className='h-6 w-6 text-gray-300' icon={icon} />
                </Link>
            </Tooltip>
        );
    },
);

SidebarLink.displayName = 'Link';

export default SidebarLink;
