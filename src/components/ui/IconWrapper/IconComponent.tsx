import React from 'react';

interface IconComponentProps {
    iconSrc: string;
    altText?: string;
    size?: string;
}

export const IconComponent: React.FC<IconComponentProps> = ({ iconSrc, altText, size = "50px" }) => {
    return (
        <img src={iconSrc} alt={altText} width={size} />
    );
}
