import * as BaseAvatar from '@radix-ui/react-avatar';
import clsx from 'clsx';
import React, { HTMLAttributes } from 'react';
import { getInitialsFromFullName } from 'utils/names';

export const AVATAR_SIZE_OPTIONS = ['default', 'large'] as const;
export type AvatarSize = typeof AVATAR_SIZE_OPTIONS[number];

const sizeToRootSizes: Record<AvatarSize, string> = {
    default: 'h-8 w-8',
    large: 'h-10 w-10',
};

const sizeToTextSizes: Record<AvatarSize, string> = {
    default: 'text-sm',
    large: 'text-lg',
};

export interface AvatarProps extends HTMLAttributes<HTMLSpanElement> {
    size?: AvatarSize;
    src?: string;
    fullName?: string;
}

const Avatar = React.forwardRef<HTMLSpanElement, AvatarProps>(
    ({ size = 'default', src, fullName, ...props }: AvatarProps, ref) => (
        <BaseAvatar.Root
            {...props}
            ref={ref}
            className={clsx(
                sizeToRootSizes[size],
                'inline-flex items-center justify-center align-middle select-none overflow-hidden rounded-full bg-slate-100',
            )}
        >
            <BaseAvatar.Image
                className='w-full h-full object-cover border-inherit pointer-events-none'
                src={src}
                alt={fullName}
            />
            <BaseAvatar.Fallback
                className={clsx(
                    sizeToTextSizes[size],
                    'w-full h-full flex items-center justify-center bg-slate-100 text-slate-700',
                )}
                delayMs={600}
            >
                {!!fullName ? getInitialsFromFullName(fullName) : ''}
            </BaseAvatar.Fallback>
        </BaseAvatar.Root>
    ),
);

Avatar.displayName = 'Avatar';

export default Avatar;
