import React from 'react';
import { StyledFlexBox } from './FlexBox.styled';

interface FlexBoxProps {
    children: React.ReactNode
}

export const FlexBox: React.FC<FlexBoxProps> = ({ children }) => {
    return (
        <StyledFlexBox>
            {children}
        </StyledFlexBox>
    );
};