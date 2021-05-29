import React from 'react'
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

//CSS
const PokemonItem = styled.div`
    box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;
    background-color: white;
    margin-bottom: 20px;

    a {
        text-decoration: none;
        color: #000;
        display: block;
        padding: 20px;
    }
`;
//CSS


export default function PokemonListItem({ pokemon: { name } }) {
    
    return (
        <PokemonItem>
            <Link to={`/pokemon/${name}`}>
                <div>{name}</div>
            </Link>        
        </PokemonItem>
    )
}
