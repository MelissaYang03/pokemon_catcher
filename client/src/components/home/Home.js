import React from 'react';
import Menu from './Menu';
import PokemonLogo from '../../assets/pokemon-logo.png';
import styled from '@emotion/styled';

//CSS
const HomePageBackground = styled.div`
    background-image: linear-gradient(300deg, #2a2a72 0%, #009ffd 74%);
`;

const HomePageContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

const PokemonLogoImage = styled.img`
    width: 80%;
`;
//CSS


export default function Home() {
    return (
        <HomePageBackground>
            <HomePageContent>
                <PokemonLogoImage src={PokemonLogo} alt='Pokemon Logo' />
                <Menu />
            </HomePageContent>
        </HomePageBackground>
    )
}
