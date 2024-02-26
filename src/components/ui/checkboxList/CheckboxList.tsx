import React, { useState } from "react";
import { Checkbox } from "../checkBox/CheckBox";
import { CheckboxListWrapper } from "./CheckboxList.styled";

interface CheckboxListProps {
    items: string[];
    onChange: (selectedItems: string[]) => void;
}

export const CheckboxList: React.FC<CheckboxListProps> = ({ items, onChange }) => {
    const [selectedItems, setSelectedItems] = useState<string[]>([]);

    const handleCheckboxChange = (value: string, checked: boolean) => {
        if (checked) {
            setSelectedItems([...selectedItems, value]);
        } else {
            setSelectedItems(selectedItems.filter(item => item !== value));
        }
        onChange(selectedItems);
    };

    return (
        <CheckboxListWrapper>
            {items.map((item, id) => (
                <Checkbox key={id} value={item} onChange={handleCheckboxChange} />
            ))}
        </CheckboxListWrapper>
    );
};
