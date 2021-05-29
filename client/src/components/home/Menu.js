import React from 'react';
import ButtonLink from '../ButtonLink';
import styled from '@emotion/styled';

//CSS
const MenuContainer = styled.div`
    margin-top: 30px;
    display: flex;
`;
//CSS


export default function Menu () {
    return (
        <MenuContainer>
            <ButtonLink text='Pokemon List' href='/pokemons' />
            <ButtonLink text='My List' href='/mylist' />
        </MenuContainer>
    )
}
