import { faDatabase, faMagicWandSparkles } from '@fortawesome/free-solid-svg-icons';
import { action } from '@storybook/addon-actions';
import { ComponentMeta } from '@storybook/react';
import { IconButton } from 'design-system';
import {
    ICON_BUTTON_SIZE_OPTIONS,
    ICON_BUTTON_VARIANT_OPTIONS,
} from 'design-system/components/IconButton/IconButton';

export default {
    title: 'Design System/Icon Button',
    component: IconButton,
} as ComponentMeta<typeof IconButton>;

export const Default = () => (
    <IconButton icon={faMagicWandSparkles} tooltip='Do Magic' onClick={action('Clicked button')} />
);

export const AllIconButtons = () => (
    <div className='flex flex-col items-start justify-center space-y-3 p-2'>
        {ICON_BUTTON_VARIANT_OPTIONS.map((variant) => (
            <div key={variant} className='flex items-center justify-center space-x-3'>
                {ICON_BUTTON_SIZE_OPTIONS.map((size) => (
                    <>
                        <IconButton
                            icon={faDatabase}
                            tooltip='Read from DB'
                            key={`${size} ${variant}`}
                            size={size}
                            variant={variant}
                            onClick={action('Clicked Button')}
                        />
                        <IconButton
                            icon={faDatabase}
                            tooltip='Read from DB'
                            key={`${size} ${variant} disabled`}
                            size={size}
                            variant={variant}
                            onClick={action('Clicked Button')}
                            disabled
                        />
                    </>
                ))}
            </div>
        ))}
    </div>
);
