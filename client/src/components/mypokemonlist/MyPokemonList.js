import React, { useState, useEffect } from 'react';
import ButtonLink from '../ButtonLink';
import MyPokemonListItem from './MyPokemonListItem';
import styled from '@emotion/styled';

//CSS
const MyPokemonListContainer = styled.div`
    min-height: 100vh;
    padding: 10px;
`;

const MyPokemonListTitle = styled.div`
    display: flex;
    justify-content: center;
    font-size: 2rem;
    margin: 20px 0;
`;

const MyPokemonListContent = styled.div`
    padding: 0 10px;
`;
//CSS


export default function MyPokemonList() {
    const [myPokemons, setMyPokemons] = useState([{
        nickname: '',
        name: ''
    }])
    
    useEffect(() => {
        fetch('/api/mypokemons').then(res => {
            if(res.ok) {
                return res.json();
            }
        }).then(jsonRes => setMyPokemons(jsonRes));
    })
    
    return (
        <MyPokemonListContainer>
            <ButtonLink text='Back to Homepage' href='/' bgColor='Grey' />
            <MyPokemonListTitle>My Pokemons</MyPokemonListTitle>
            <MyPokemonListContent>
                {
                    myPokemons.map(myPokemon => (
                         <MyPokemonListItem key={myPokemon.nickname} myPokemon={myPokemon} />
                    ))
                }
            </MyPokemonListContent>
        </MyPokemonListContainer>
    )
}
