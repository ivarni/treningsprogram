import styled from 'styled-components';

const Title = styled.h1`
    font-size: 32px;
    margin: 0;
    text-align: center;
`;

const SecondaryTitle = Title.withComponent('h2').extend`
    font-size: 26px;
`;

const SectionTitle = styled.h3`
    font-size 24px;
    margin-bottom: 15px;
`;

export {
    SecondaryTitle,
    SectionTitle,
    Title,
};
