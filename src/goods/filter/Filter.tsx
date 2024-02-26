import React, { useState } from 'react'
import {
    StyledCloseButton,
    StyledFilter,
    StyledModalContent,
    StyledModalWrapper,
    StyledOverlay,
    StyledModalTitle,
} from './Filter.styled'
import { ButtonWithIcon } from './../../components/ui/buttonWithIcon/ButtonWithIcon'
import FilterIcon from '../../assets/icons/filter.svg'
import { FlexBox } from '../../components/ui/flexBox/FlexBox'
import { Text } from '../../components/ui/text/Text'
import { CheckboxList } from '../../components/ui/checkboxList/CheckboxList'
import { Accordion } from '../../components/ui/accordion/Accordion'

interface FilterProps {
    defaultBrands: string[]
}

export const Filter: React.FC<FilterProps> = ({ defaultBrands }) => {
    const [activeModal, setActiveModal] = useState<boolean>(false)
    const [productName, setProductName] = useState<string>('')
    const [price, setPrice] = useState<number | ''>('');

    const toggleModal = () => {
        setActiveModal(!activeModal)
    }

    const closeModal = () => {
        setActiveModal(false)
    }

    const handleCheckboxChange = (selectedItems: string[]) => {
        console.log(selectedItems) // эту штуку надо в стор, чтобы потом фильтровать по ней
    }

    const handleChangeProductName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setProductName(event.target.value)
    }

    const handleChangePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        if (!isNaN(newValue as any)) { // Проверка, является ли намбером
            setPrice(parseFloat(newValue)); // Преобразование строки в число на всякий случай
        }
    };

    return (
        <StyledFilter>
            <ButtonWithIcon
                icon={FilterIcon}
                iconPosition='left'
                onClick={toggleModal}
            >
                Все фильтры
            </ButtonWithIcon>
            <StyledModalWrapper isOpen={activeModal}>
                <StyledCloseButton onClick={closeModal}>Закрыть</StyledCloseButton>
                <StyledModalContent>
                    <StyledModalTitle>
                        <Text fontWeight='bold'>Фильтр</Text>
                    </StyledModalTitle>
                    <FlexBox flexdirection='column' gap='20px'>
                        <Text>Цена</Text>
                        <input type='number' value={price} onChange={handleChangePrice} />
                        <Text>Название</Text>
                        <input type='text' value={productName} onChange={handleChangeProductName} />
                        <Accordion
                            title={<Text>Бренд</Text>}
                            content={
                                defaultBrands && (
                                    <CheckboxList
                                        items={defaultBrands}
                                        onChange={handleCheckboxChange}
                                    />
                                )
                            }
                        />
                    </FlexBox>
                </StyledModalContent>
            </StyledModalWrapper>
            <StyledOverlay isOpen={activeModal} onClick={closeModal} />
        </StyledFilter>
    )
}
