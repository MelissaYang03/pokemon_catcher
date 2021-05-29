import React from 'react'
import styled from '@emotion/styled';

//CSS
const PopupOverlay = styled.div`
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,0.5);

    position: fixed;
    top: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
`;

const PopupContainer = styled.div`
    margin: 20px;
    padding: 20px;
    background-color: #fff;

    display: flex;
    flex-direction: column;
    align-items: center;
`;
//CSS


export default function Popup({trigger, children}) {
    return (trigger) ? (
        <PopupOverlay>
            <PopupContainer>
                {children}
            </PopupContainer>
        </PopupOverlay>
    ): "";
}
