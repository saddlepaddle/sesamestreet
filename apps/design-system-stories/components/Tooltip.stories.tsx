import { ComponentMeta } from '@storybook/react';
import { Button, Tooltip } from 'design-system';

export default {
    title: 'Design System/Tooltip',
    component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

export const Default = () => (
    <div className='flex items-center justify-start p-2'>
        <Tooltip text='More Information' side='right'>
            <Button>Hover me</Button>
        </Tooltip>
    </div>
);

export const WithArrow = () => (
    <div className='flex items-center justify-start p-2'>
        <Tooltip text='More Information' withArrow side='right'>
            <Button>Hover me</Button>
        </Tooltip>
    </div>
);
