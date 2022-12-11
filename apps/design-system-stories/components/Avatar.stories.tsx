import { ComponentMeta } from '@storybook/react';
import { Avatar } from 'design-system';
import { AVATAR_SIZE_OPTIONS } from 'design-system/components/Avatar/Avatar';

export default {
    title: 'Design System/Avatar',
    component: Avatar,
} as ComponentMeta<typeof Avatar>;

export const Default = () => (
    <div className='flex items-center justify-start space-x-3 p-2'>
        {AVATAR_SIZE_OPTIONS.map((size) => (
            <Avatar
                fullName='Loid Forger'
                src={
                    'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80'
                }
                size={size}
                key={size}
            />
        ))}
    </div>
);

export const Fallback = () => (
    <div className='flex items-center justify-start space-x-3 p-2'>
        {AVATAR_SIZE_OPTIONS.map((size) => (
            <Avatar fullName='Alice Henry James Panda' size={size} key={size} />
        ))}
    </div>
);
