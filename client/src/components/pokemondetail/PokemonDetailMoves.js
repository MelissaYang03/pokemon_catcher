import React from 'react'
import styled from '@emotion/styled';

//CSS
const PokemonMoveContainer = styled.div`
    margin-bottom: 30px;
`;

const PokemonMoveTitle = styled.div`
    font-size: 1.4rem;
    margin-bottom: 20px;
`;

const PokemonMoveName = styled.span`
    display: inline-block;
    background-color: #bcbcdc;
    padding: 10px;
    margin-right: 5px;
    margin-bottom: 5px;
    border-radius: 8%;
`;
//CSS


export default function PokemonDetailMoves({ moves }) {
    return (
        <PokemonMoveContainer>
            <PokemonMoveTitle>Moves</PokemonMoveTitle>
            <div>
                {
                    moves.map((move, index) =>(
                        <PokemonMoveName key={index}>
                            {move.move.name}
                        </PokemonMoveName>
                    ))
                }
            </div>
        </PokemonMoveContainer>
    )
}
