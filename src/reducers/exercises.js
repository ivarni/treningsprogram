import * as actions from '~/actions';

export const defaultState = {
    1: [
        { name: 'Knebøy', tenRm: 0 },
        { name: 'Bicepscurl', tenRm: 0 },
        { name: 'Tricepspress', tenRm: 0 },
        { name: 'Markløft', tenRm: 0 },
        { name: 'Legcurl', tenRm: 0 },
    ],
    2: [
        { name: 'Nedtrekk', tenRm: 0 },
        { name: 'Arnoldpress', tenRm: 0 },
        { name: 'Enarms roing', tenRm: 0 },
        { name: 'Tautrekk', tenRm: 0 },
        { name: 'Skulderrotasjon', tenRm: 0 },
    ],
};

const addExercise = (state, { day, name, tenRm }) => ({
    ...state,
    [day]: [
        ...state[day].filter(exercise => exercise.name !== name),
        { name, tenRm },
    ],
});

const removeExercise = (state, { day, name }) => ({
    ...state,
    [day]: state[day].filter(exercise => exercise.name !== name),
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case actions.ADD_EXERCISE:
            return addExercise(state, action);
        case actions.REMOVE_EXERCISE:
            return removeExercise(state, action);
        default:
            return state;
    }
};
