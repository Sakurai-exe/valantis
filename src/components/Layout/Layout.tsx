import React from 'react';
import { StyledLayout } from './Layout.styled';

interface LayoutI {
    children: React.ReactNode,
}

export const Layout: React.FC<LayoutI> = ({ children }) => {
    return (
        <StyledLayout>
            {children}
        </StyledLayout>
    );
};