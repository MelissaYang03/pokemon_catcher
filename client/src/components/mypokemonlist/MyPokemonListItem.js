import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import axios from 'axios';

//CSS
const MyPokemonItem = styled.div`
    box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;
    background-color: white;
    margin-bottom: 20px;

    a {
        text-decoration: none;
        color: #000;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
    }
`;

const ReleaseButton = styled.button`
    padding: 10px;
    margin: 10px;
    background-color: ${props => props.bgColor ? props.bgColor : 'transparent'};
    color: #fff;
    border-radius: 8%;
    border: 0;
`;
//CSS


export default function MyPokemonListItem({ myPokemon: { nickname, name } }) {
    
    function releasePokemon(event) {
        event.preventDefault();
        axios.delete(`/api/mypokemon/release/${nickname}`);
    }
    
    return (
        <MyPokemonItem>
            <Link to={`/pokemon/${name}`}>
                <div>
                    <div>Nickname: {nickname}</div>
                    <div>Name: {name}</div>
                </div>
                <div>
                    <ReleaseButton bgColor='#d64141' onClick={releasePokemon}>Release</ReleaseButton>
                </div>
            </Link>        
        </MyPokemonItem>
    )
}
