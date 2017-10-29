import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(({ underline, ...rest }) =>
    <Link {...rest} />)`
        text-decoration: none;
        border-bottom:
            ${props => (props.underline ? '2px solid' : 'none')};
        color: ${props => props.theme.linkColour};
    `;

export default StyledLink;
