import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React, { forwardRef, HTMLAttributes, RefObject } from 'react';

import Tooltip from '../Tooltip';

export const ICON_BUTTON_SIZE_OPTIONS = ['small', 'default', 'large'] as const;
export type IconButtonSize = typeof ICON_BUTTON_SIZE_OPTIONS[number];

export const ICON_BUTTON_VARIANT_OPTIONS = ['primary', 'secondary', 'outline'];
export type IconButtonVariant = typeof ICON_BUTTON_VARIANT_OPTIONS[number];

export interface IconButtonProps extends Omit<HTMLAttributes<HTMLButtonElement>, 'children'> {
    icon: IconDefinition;
    tooltip: string;
    size?: IconButtonSize;
    variant?: IconButtonVariant;
    disabled?: boolean;
}

const sizeToIconSizes: Record<IconButtonSize, string> = {
    small: 'h-4 w-4',
    default: 'h-5 w-5',
    large: 'h-6 w-6',
};

const variantToColors: Record<IconButtonVariant, string> = {
    primary: 'border-gray-300 text-white bg-primary-800',
    secondary: 'border-gray-300 text-primary-700 bg-primary-200',
    outline: 'border-gray-300 text-gray-700 bg-white',
};

const variantToActiveColors: Record<IconButtonVariant, string> = {
    primary: 'hover:bg-primary-900',
    secondary: 'hover:bg-primary-300',
    outline: 'hover:bg-gray-50',
};

const sizeToSizes: Record<IconButtonSize, string> = {
    small: 'p-1.5',
    default: 'p-2',
    large: 'p-3',
};

const getDisabledProps = (disabled: boolean) => {
    return disabled
        ? 'cursor-auto opacity-50'
        : 'focus:ring-primary-500 focus:outline-none focus:ring-2 focus:ring-offset-2';
};

const IconButton = forwardRef<RefObject<HTMLButtonElement>, IconButtonProps>(
    (
        {
            className,
            onClick,
            size = 'default',
            variant = 'primary',
            icon,
            tooltip,
            disabled = false,
            ...props
        },
        ref,
    ) => {
        return (
            <Tooltip text={tooltip} side='top'>
                <button
                    {...props}
                    className={clsx(
                        className,
                        'line-clamp-1 inline-flex items-center rounded-full border font-semibold shadow-sm transition-colors duration-75',
                        variantToColors[variant],
                        sizeToSizes[size],
                        disabled ? '' : variantToActiveColors[variant],
                        getDisabledProps(disabled),
                    )}
                    ref={ref as RefObject<HTMLButtonElement>}
                    onClick={disabled ? undefined : onClick}
                    tabIndex={disabled ? -1 : undefined}
                    aria-label={tooltip}
                >
                    <FontAwesomeIcon icon={icon} className={clsx(sizeToIconSizes[size])} />
                </button>
            </Tooltip>
        );
    },
);

IconButton.displayName = 'IconButton';

export default IconButton;
