import React from 'react';
import styled from 'styled-components';

const RadioButton = styled.input`
    position:absolute;
    clip: rect(0,0,0,0);
    clip: rect(0 0 0 0);

    &:focus + label {
        border: 1px solid grey;
    }
`;

export default props =>
    (<RadioButton
        {...props}
        type="radio"
    />);
