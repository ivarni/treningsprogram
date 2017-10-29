import React from 'react';
import styled from 'styled-components';

const RadioLabel = styled.label`
    cursor: pointer;
    display: inline-block;
    &:before {
        background-color:
            ${props => (props.checked ? props.theme.colour : 'inherit')};
        border: 1px solid ${props => props.theme.colour};
        border-radius: 50%;
        content: '';
        display: inline-block;
        height: 15px;
        width: 15px;
    }
`;

const RadioText = styled.span`
    padding-left: 10px;
`;

/* eslint-disable react/prop-types */
export default props =>
    (<RadioLabel {...props}>
        <RadioText>
            {props.children}
        </RadioText>
    </RadioLabel>);
/* eslint-enable react/prop-types */
