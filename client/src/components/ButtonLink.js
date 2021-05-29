import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

//CSS
const Button = styled.button`
    background-color: ${props => props.bgColor ? props.bgColor : 'transparent'};
    border: 1px solid white;
    border-radius: 8%;
    padding: 10px;
    margin: 5px;

    a {
        text-decoration: none;
        font-size: 20px;
        color: white;
    }
`;
//CSS


export default function ButtonLink ({ text, href, bgColor }) {
    return (
        <Button bgColor={bgColor}>
            <Link to={href || '/'}>
                {text}
            </Link>
        </Button>
    )
}

ButtonLink.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string
}