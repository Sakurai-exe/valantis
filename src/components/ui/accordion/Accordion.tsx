import React, { ReactNode, useState } from 'react';
import ArrowDownIcon from '../../../assets/icons/arrowDown.svg'
import { IconComponent } from '../IconWrapper/IconComponent';
import { AccordionContent, AccordionHeader, AccordionWrapper } from './Accordion.styled';

interface AccordionProps {
    title: string | ReactNode;
    content: string | ReactNode;
}


export const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <AccordionWrapper>
            <AccordionHeader onClick={toggleAccordion}>{title}<IconComponent iconSrc={ArrowDownIcon} /></AccordionHeader>
            <AccordionContent isOpen={isOpen}>{content}</AccordionContent>
        </AccordionWrapper>
    );
};

