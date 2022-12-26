import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React, { forwardRef, HTMLAttributes, RefObject } from 'react';

export const BUTTON_SIZE_OPTIONS = ['small', 'default', 'large'] as const;
export type ButtonSize = typeof BUTTON_SIZE_OPTIONS[number];

export const BUTTON_VARIANT_OPTIONS = ['primary', 'secondary', 'outline'];
export type ButtonVariant = typeof BUTTON_VARIANT_OPTIONS[number];

export const BUTTON_ICON_POSITION_OPTIONS = ['left', 'right'];
export type ButtonIconPosition = typeof BUTTON_ICON_POSITION_OPTIONS[number];

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    size?: ButtonSize;
    variant?: ButtonVariant;
    icon?: IconDefinition;
    iconPosition?: ButtonIconPosition;
    disabled?: boolean;
}

const sizeToIconSizes: Record<ButtonSize, string> = {
    small: 'h-4 w-4',
    default: 'h-5 w-5',
    large: 'h-6 w-6',
};

const variantToColors: Record<ButtonVariant, string> = {
    primary: 'border-gray-300 text-white bg-primary-800',
    secondary: 'border-gray-300 text-primary-700 bg-primary-200',
    outline: 'border-gray-300 text-gray-700 bg-white',
};

const variantToActiveButtonColors: Record<ButtonVariant, string> = {
    primary: 'hover:bg-primary-900',
    secondary: 'hover:bg-primary-300',
    outline: 'hover:bg-gray-50',
};

const sizeToSizes: Record<ButtonSize, string> = {
    small: 'py-1.5 px-2.5 text-xs rounded-sm',
    default: 'pt-2.5 pb-2 px-4 text-sm rounded-md',
    large: 'px-6 py-3 text-base rounded-md',
};

const getDisabledProps = (disabled: boolean) => {
    return disabled
        ? 'cursor-auto opacity-50'
        : 'focus:ring-primary-500 focus:outline-none focus:ring-2 focus:ring-offset-2';
};

const ButtonIcon = ({ icon, iconPosition, size }: ButtonProps) => {
    if (!icon) {
        return null;
    }

    return (
        <FontAwesomeIcon
            icon={icon}
            className={clsx(sizeToIconSizes[size!], {
                '-ml-0.5 mr-2': size === 'small' && iconPosition === 'left',
                'ml-2 -mr-0.5': size === 'small' && iconPosition === 'right',
                '-ml-1 mr-2': size === 'default' && iconPosition === 'left',
                'ml-2 -mr-1': size === 'default' && iconPosition === 'right',
                '-ml-1 mr-3': size === 'large' && iconPosition === 'left',
                'ml-3 -mr-1': size === 'large' && iconPosition === 'right',
            })}
        />
    );
};

const Button = forwardRef<RefObject<HTMLButtonElement>, ButtonProps>(
    (
        {
            className,
            onClick,
            size = 'default',
            variant = 'primary',
            icon,
            iconPosition = 'left',
            disabled = false,
            children,
            ...props
        },
        ref,
    ) => {
        return (
            <button
                {...props}
                className={clsx(
                    className,
                    'line-clamp-1 inline-flex items-center border font-semibold shadow-sm transition-colors duration-75',
                    variantToColors[variant],
                    sizeToSizes[size],
                    disabled ? '' : variantToActiveButtonColors[variant],
                    getDisabledProps(disabled),
                )}
                ref={ref as RefObject<HTMLButtonElement>}
                onClick={disabled ? undefined : onClick}
                tabIndex={disabled ? -1 : undefined}
            >
                {iconPosition === 'left' && (
                    <ButtonIcon size={size} icon={icon} iconPosition={iconPosition} />
                )}
                {children}
                {iconPosition === 'right' && (
                    <ButtonIcon size={size} icon={icon} iconPosition={iconPosition} />
                )}
            </button>
        );
    },
);

Button.displayName = 'Button';

export default Button;
