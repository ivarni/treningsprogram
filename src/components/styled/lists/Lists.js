import styled from 'styled-components';

const OrderedList = styled.ol`
    list-style-type: none;
    margin: 0 auto;
    max-width: 30em;
    padding: 30px 0 0 0;
`;

const NavList = styled.ul`
    list-style-type: none;
    padding: 0 10px;
    display:
        ${props => (props.inline ? 'flex' : 'block')};
    justify-content: space-around;
`;

export {
    OrderedList,
    NavList,
};
