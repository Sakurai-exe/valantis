import React from 'react';
import { StyledGoods } from './Goods.styled';
import { useAppSelector, useAppDispatch } from '../store/hooks'

export function Counter() {
    // The `state` arg is correctly typed as `RootState` already
    // const count = useAppSelector(state => state.items.value)
    // const dispatch = useAppDispatch()

    // omit rendering logic
}

export const Goods = () => {
    return (
        <StyledGoods>

        </StyledGoods>
    );
};