import { ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from 'design-system';

export default {
    title: 'Design System/Button',
    component: Button,
} as ComponentMeta<typeof Button>;

export const Default = () => <Button onClick={action('Clicked button')} />;
