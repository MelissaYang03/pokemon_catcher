import React from 'react';
import styled from '@emotion/styled';

//CSS
const AlertContainer = styled.div`
    background-color: ${props => props.bgColor ? props.bgColor : 'none'};
    position: fixed;
    right: 0;
    margin: 0 10px;
    padding: 10px;
    color: white;
    border-radius: 8%;
`;
//CSS


export default function AlertNotification({ message, status }) {
    
    return (
        <AlertContainer bgColor={status === 'ERROR' ? '#a91616' : '#1a7c4d'}>
            {message}
        </AlertContainer>
    )
    
}
