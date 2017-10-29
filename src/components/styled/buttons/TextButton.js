import styled from 'styled-components';

const TextButton = styled.button`
    background: none;
    border: 2px solid ${props => props.theme.colour};
    border-radius: 5px;
    color: @text-on-white;
    cursor: pointer;
    margin-left: 10px;
    padding: 5px;
    vertical-align: middle;
    &:first-child {
        margin-left: 0;
    }
`;

export default TextButton;
