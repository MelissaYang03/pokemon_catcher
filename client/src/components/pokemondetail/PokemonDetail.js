import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_POKEMON } from '../../graphql/Queries';
import ButtonLink from '../ButtonLink';
import PokemonDetailMoves from './PokemonDetailMoves';
import PokemonDetailTypes from './PokemonDetailTypes';
import Popup from '../Popup';
import styled from '@emotion/styled';
import axios from 'axios';
import AlertNotification from '../AlertNotification';

//CSS
const PokemonDetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
`;

const PokemonDetailTitle = styled.div`
    font-size: 2rem;
    margin: 20px 0;
`;

const PokemonDetailImage = styled.img`
    width: 200px;
`;

const CatchButton = styled.button`
    width: 100%;
    line-height: 42px;
    background-color: #468783;
    border: 0;
    color: #fff;
    font-size: 1rem;
`;

const PopupTitle = styled.h2`\
    margin-bottom: 20px;
`;

const PopupInput = styled.input`
    padding: 10px;
    border: 1px solid #bcbaba;
    border-radius: 2px;
    width: 80%;
`;

const PopupInputError = styled.div`
    color: red;
`;

const PopupButtons = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const PopupButton = styled.button`
    padding: 10px;
    margin: 10px;
    background-color: ${props => props.bgColor ? props.bgColor : 'transparent'};
    color: #fff;
    border-radius: 8%;
    border: 0;
`;
//CSS


export default function PokemonDetail(props) {
    const[buttonPopup, setButtonPopup] = useState(false);
    const[input, setInput] = useState({
        nickname: ''
    });
    const[inputErrors, setInputErrors] = useState({
        nickname: ''
    });
    const[alertMessage, setAlertMessage] = useState({
        message: '',
        status: ''
    });

    useEffect(() => {
        const timer = setTimeout(() => {
            setAlertMessage({
                message: '',
                status: ''
            })
        }, 1000);
        return () => {
            clearTimeout(timer)
        };
    }, [alertMessage]);


    let pokemonName = props.name.match.params.name;

    const { loading, error, data } = useQuery(GET_POKEMON, {
        variables: { name: pokemonName }
    });
    
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    
    function catchPokemon() {
        let randNum = Math.floor((Math.random() * 2) + 1);
        //randNum 1 = success
        if(randNum === 1) {
            setButtonPopup(true);
        } else {
            setAlertMessage({
                message: 'Fail to catch pokemon',
                status: 'ERROR'
            });
        }
    }

    function handleInputChange(event) {
        const {name, value} = event.target;
        
        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    function createNewPokemon(event) {
        event.preventDefault();

        //check if nickname is valid
        axios.get(`/api/mypokemon/check/${input.nickname}`)
            .then((json) => { 
                
                //if nickname does not exist
                if(!json.data.exist) {

                    const newMyPokemon = {
                        name: data.pokemon.name,
                        nickname: input.nickname
                    }
            
                    axios.post('/api/mypokemon/add', newMyPokemon)
                        .catch((error) => {
                            if( error.response ){
                                console.log(error.response.data);
                            }
                    });
            
                    ResetInput();

                    setAlertMessage({
                        message: 'Nickname is successfully saved',
                        status: 'SUCCESS'
                    });
                }
                else {
                    setInputErrors({ nickname: 'Nickname already exist' });
                }
            
            });
    }

    function ResetInput() {
        setButtonPopup(false);
        setInput({ nickname: '' });
        setInputErrors({ nickname: '' });
    }

    return (
        <PokemonDetailContainer>
            <ButtonLink text='Back to Pokemon List' href='/pokemons' bgColor='Grey' />
            <PokemonDetailTitle>{data.pokemon.name}</PokemonDetailTitle>
            <PokemonDetailImage src={data.pokemon.sprites.front_default} alt='Pokemon Detail'/>
            <div>
                <PokemonDetailMoves moves={data.pokemon.moves} />
                <PokemonDetailTypes types={data.pokemon.types} />
            </div>
            <CatchButton onClick={catchPokemon}>Catch</CatchButton>
            <Popup trigger={buttonPopup}>
                <PopupTitle>Yay, you have successfully catch {data.pokemon.name}</PopupTitle>
                <div>Add a nickname and put into your list</div>
                <PopupInput type='text' name='nickname' value={input.nickname} onChange={handleInputChange} />
                {inputErrors.nickname && <PopupInputError>{inputErrors.nickname}</PopupInputError>}
                <PopupButtons>
                    <PopupButton bgColor={'#9d2c2c'} onClick={() => ResetInput()}>Release</PopupButton>
                    <PopupButton bgColor={'#468783'} onClick={createNewPokemon}>Save</PopupButton>
                </PopupButtons>
            </Popup>
            {alertMessage.message !== '' ? <AlertNotification message={alertMessage.message} status={alertMessage.status} /> : ''}
        </PokemonDetailContainer>
    )
}
