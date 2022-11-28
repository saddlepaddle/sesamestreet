import React, { HTMLAttributes, forwardRef, RefObject } from 'react';
import classNames from 'classnames';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const BUTTON_SIZE_OPTIONS = ['small', 'medium', 'large'] as const;
export type ButtonSize = typeof BUTTON_SIZE_OPTIONS[number];

export const BUTTON_VARIANT_OPTIONS = ['primary', 'secondary', 'outline'];
export type ButtonVariant = typeof BUTTON_VARIANT_OPTIONS[number];

export const BUTTON_ICON_POSITION_OPTIONS = ['left', 'right'];
export type ButtonIconPosition = typeof BUTTON_ICON_POSITION_OPTIONS[number];

interface BaseButtonProps {
    size?: ButtonSize;
    variant?: ButtonVariant;
    icon?: IconDefinition;
    iconPosition?: ButtonIconPosition;
    disabled?: boolean;
}
export interface ButtonProps extends HTMLAttributes<HTMLButtonElement>, BaseButtonProps {}

const sizeToIconSizes: Record<ButtonSize, string> = {
    small: 'h-4 w-4',
    medium: 'h-5 w-5',
    large: 'h-6 w-6',
};

const variantToColors: Record<ButtonVariant, string> = {
    primary: 'border-gray-300 text-white bg-primary-800',
    secondary: 'border-gray-300 text-primary-700 bg-primary-100',
    outline: 'border-gray-300 text-gray-700 bg-white',
};

const variantToActiveButtonColors: Record<ButtonVariant, string> = {
    primary: 'hover:bg-primary-900',
    secondary: 'hover:bg-primary-200',
    outline: 'hover:bg-gray-50',
};

const sizeToSizes: Record<ButtonSize, string> = {
    small: 'py-1.5 px-2.5 text-xs rounded-sm',
    medium: 'pt-2.5 pb-2 px-4 text-sm rounded-md',
    large: 'px-6 py-3 text-base rounded-md',
};

const getDisabledProps = (disabled: boolean) => {
    return disabled
        ? 'cursor-auto opacity-50'
        : 'focus:ring-primary-500 focus:outline-none focus:ring-2 focus:ring-offset-2';
};

const ButtonIcon = ({ icon, iconPosition, size }: BaseButtonProps) => {
    if (!icon) {
        return null;
    }

    return (
        <FontAwesomeIcon
            icon={icon}
            className={classNames(sizeToIconSizes[size!], {
                '-ml-0.5 mr-2': size === 'small' && iconPosition === 'left',
                'ml-2 -mr-0.5': size === 'small' && iconPosition === 'right',
                '-ml-1 mr-2': size === 'medium' && iconPosition === 'left',
                'ml-2 -mr-1': size === 'medium' && iconPosition === 'right',
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
            size = 'medium',
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
                className={classNames(
                    className,
                    'line-clamp-1  inline-flex items-center border font-semibold shadow-sm',
                    variantToColors[variant],
                    sizeToSizes[size],
                    disabled ? '' : variantToActiveButtonColors[variant],
                    getDisabledProps(disabled),
                )}
                ref={ref as RefObject<HTMLButtonElement>}
                onClick={disabled ? undefined : onClick}
                tabIndex={disabled ? -1 : undefined}
                {...props}
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
export default Button;
