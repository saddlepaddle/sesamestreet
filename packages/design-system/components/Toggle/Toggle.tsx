import { Switch } from '@headlessui/react';

export interface ToggleProps {
    value?: boolean;
    onChange?: () => void;
    disabled?: boolean;
}

export default function Toggle({ value, onChange, disabled }: ToggleProps) {
    return <Switch checked={value} onChange={onChange} disabled={disabled} />;
}
