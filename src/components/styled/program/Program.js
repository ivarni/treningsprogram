import styled from 'styled-components';

const Program = styled.ol`
    list-style-type: none;
    padding: 0;
`;

const ProgramExercise = styled.div`
    align-items: flex-end;
    display: flex;
    justify-content: flex-start;
    padding: 15px 0;
    text-decoration: ${props => (props.done ? 'line-through' : 'none')};

    > :first-child {
        flex-basis: 180px;
    }

    > :nth-child(2) {
        flex-grow: 1;
        max-width: 100px;
        padding-right: 5px;
        text-align: right;
    }

    > :nth-child(4) {
        min-width: 50px;
    }
`;

const ProgramExercises = styled.ul`
    list-style-type: none;
    padding: 0;
`;

const ProgramItem = styled.li`
    border-bottom: 1px solid ${props => props.theme.colour};
    cursor: pointer;
    max-width: 500px;
    margin: 0 auto;
    text-decoration:
        ${props => (props.done ? 'line-through' : 'none')};
`;

const ProgramTitle = styled.div`
    padding: 20px 0 20px 10px;
    align-items: flex-end;
    display: flex;
    justify-content: space-between;
`;

export {
    Program,
    ProgramExercise,
    ProgramExercises,
    ProgramItem,
    ProgramTitle,
};
