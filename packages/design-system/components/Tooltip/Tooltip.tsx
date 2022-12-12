import './styles.css';

import * as BaseTooltip from '@radix-ui/react-tooltip';
import clsx from 'clsx';
import { forwardRef, Ref, RefObject } from 'react';

export interface TooltipProps extends BaseTooltip.TooltipContentProps {
    text: string;
    withArrow?: boolean;
}

const Tooltip = forwardRef<RefObject<HTMLDivElement>, TooltipProps>(
    ({ text, withArrow = false, sideOffset = 6, children, ...props }, ref) => {
        return (
            <BaseTooltip.Provider delayDuration={200}>
                <BaseTooltip.Root>
                    <BaseTooltip.Trigger asChild>{children}</BaseTooltip.Trigger>
                    <BaseTooltip.Portal>
                        <BaseTooltip.Content
                            {...props}
                            ref={ref as Ref<HTMLDivElement>}
                            className={clsx(
                                'rounded-md px-3 py-2 leading-4 text-gray-50 bg-gray-600 shadow-md select-none',
                                'TooltipAnimation',
                            )}
                            sideOffset={sideOffset}
                        >
                            {text}
                            {withArrow && <BaseTooltip.Arrow className='fill-gray-600' />}
                        </BaseTooltip.Content>
                    </BaseTooltip.Portal>
                </BaseTooltip.Root>
            </BaseTooltip.Provider>
        );
    },
);

Tooltip.displayName = 'Tooltip';

export default Tooltip;
