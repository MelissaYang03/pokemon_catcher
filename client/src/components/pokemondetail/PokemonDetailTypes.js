import React from 'react';
import styled from '@emotion/styled';

//CSS
const PokemonTypeContainer = styled.div`
    margin-bottom: 30px;
`;

const PokemonTypeTitle = styled.div`
    font-size: 1.4rem;
    margin-bottom: 20px;
`;

const PokemonTypeName = styled.span`
    display: inline-block;
    background-color: #e6b6b6;
    padding: 10px;
    margin-right: 5px;
    margin-bottom: 5px;
    border-radius: 8%;
`;
//CSS


export default function PokemonDetailType({ types }) {
    return (
        <PokemonTypeContainer>
            <PokemonTypeTitle>Types</PokemonTypeTitle>
            {
                types.map((type, index) =>(
                    <PokemonTypeName key={index}>
                        {type.type.name}
                    </PokemonTypeName>
                ))
            }
        </PokemonTypeContainer>
    )
}
