import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_POKEMONS } from '../../graphql/Queries';
import PokemonListItem from './PokemonListItem';
import styled from '@emotion/styled';
import ButtonLink from '../ButtonLink';
import axios from 'axios';
import { Waypoint } from 'react-waypoint';

//CSS
const PokemonListContainer = styled.div`
    min-height: 100vh;
    padding: 10px;
`;

const PokemonListTitle = styled.div`
    display: flex;
    justify-content: center;
    font-size: 2rem;
    margin: 20px 0;
`;

const TotalOwnedPokemon = styled.div`
    margin-bottom: 20px;
    font-weight: 600;
`;

const PokemonListContent = styled.div`
    padding: 0 10px;
`;
//CSS


const gqlVariables = {
  limit: 10,
  offset: 0,
};

export default function PokemonList() {
    const [ownedCount, setOwnedCount] = useState(0);

    axios.get('/api/mypokemons')
        .then(res => {
            setOwnedCount(res.data.length);
        });

    const { loading, error, data, fetchMore } = useQuery(GET_POKEMONS, {
        variables: gqlVariables
    });

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    
    
    return (
        <PokemonListContainer>
            <ButtonLink text='Back to Homepage' href='/' bgColor='Grey' />
            <PokemonListTitle>List of Pokemon</PokemonListTitle>
            <TotalOwnedPokemon>Total Owned: {ownedCount}</TotalOwnedPokemon>   
            <PokemonListContent>
                {
                    data.pokemons.results.map((pokemon, index) => (
                        <React.Fragment key={pokemon.name}>
                            <PokemonListItem key={pokemon.name} pokemon={pokemon} />
                            {index === data.pokemons.results.length - 2 && (
                                <Waypoint onEnter={() => 
                                    fetchMore({
                                        variables: {
                                            limit: 10,
                                            offset: data.pokemons.results.length
                                        },
                                        updateQuery: (pv, {fetchMoreResult}) => {
                                            console.log(fetchMoreResult.pokemons);
                                            if(!fetchMoreResult) {
                                                return pv;
                                            }
                                            fetchMoreResult.pokemons.results = [
                                                ...pv.pokemons.results,
                                                ...fetchMoreResult.pokemons.results
                                            ];
                                            
                                            return fetchMoreResult;
                                        }
                                    })
                                }/>
                            )}
                        </React.Fragment>
                    ))
                }
            </PokemonListContent>
        </PokemonListContainer>
    )
}
