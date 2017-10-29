import styled from 'styled-components';

const SmallText = styled.span`
    font-size: 18px;
    vertical-align:
        ${props => (props.middle ? 'middle' : 'inherit')};
`;

export default SmallText;
