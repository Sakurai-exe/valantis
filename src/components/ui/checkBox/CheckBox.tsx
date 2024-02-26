import React, { useState } from 'react';
import { CheckboxInput } from './CheckBox.styled';

export const Checkbox: React.FC<{ value: string; onChange: (value: string, checked: boolean) => void; }> = ({ value, onChange }) => {
    const [checked, setChecked] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = event.target.checked;
        setChecked(isChecked);
        onChange(value, isChecked);
    };

    return (
        <label>
            <CheckboxInput type="checkbox" checked={checked} onChange={handleChange} />
            {value}
        </label>
    );
};