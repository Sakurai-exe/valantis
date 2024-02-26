import React from 'react'
import { StyledButtonWithIcon } from './ButtonWithIcon.styled'
import { Text } from '../text/Text'
import { ReactComponentChildren } from '../../../types'
import { IconComponent } from '../IconWrapper/IconComponent'

interface ButtonWithIconProps extends ReactComponentChildren {
    onClick?: () => void
    icon?: string
    iconPosition?: 'left' | 'right'
}

export const ButtonWithIcon: React.FC<ButtonWithIconProps> = ({
    children,
    onClick,
    icon,
    iconPosition,
}) => {
    const handleClick = () => {
        if (onClick) {
            onClick()
        }
    };

    return (
        <StyledButtonWithIcon onClick={handleClick}>
            {icon && iconPosition === 'left' && <IconComponent iconSrc={icon} />}
            <Text>{children}</Text>
            {icon && iconPosition === 'right' && <IconComponent iconSrc={icon} />}
        </StyledButtonWithIcon>
    )
}
