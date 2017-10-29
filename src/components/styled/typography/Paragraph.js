import styled from 'styled-components';

const Paragraph = styled.p`
    line-height: 1.3em;
    margin: 30px auto;
    max-width: 30em;
    text-align:
        ${props => (props.centered ? 'center' : 'left')};
`;

export default Paragraph;
