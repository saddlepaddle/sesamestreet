import { ComponentMeta } from '@storybook/react';
import { Toggle } from 'design-system';

export default {
    title: 'Design System/Toggle',
    component: Toggle,
} as ComponentMeta<typeof Toggle>;

export const Default = () => (
    <div className='h-10 w-10 bg-indigo-500'>
        <Toggle />
    </div>
);
