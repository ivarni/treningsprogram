import * as actions from '~/actions';

export const defaultState = {
    1: [
        { name: 'Knebøy', tenRm: 55 },
        { name: 'Bicepscurl', tenRm: 12.5 },
        { name: 'Tricepspress', tenRm: 6 },
        { name: 'Legcurl', tenRm: 40 },
        { name: 'Tåhev', tenRm: 45 },
    ],
    2: [
        { name: 'Nedtrekk', tenRm: 41 },
        { name: 'Arnoldpress', tenRm: 12.5 },
        { name: 'Enarms roing', tenRm: 15 },
        { name: 'Tautrekk', tenRm: 32 },
        { name: 'Skulderrotasjon', tenRm: 10 },
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

const editExercise = (state, { day, name, tenRm }) => ({
    ...state,
    [day]: state[day].map((exercise) => {
        if (exercise.name === name) {
            return { name, tenRm };
        }
        return exercise;
    }),
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case actions.ADD_EXERCISE:
            return addExercise(state, action);
        case actions.REMOVE_EXERCISE:
            return removeExercise(state, action);
        case actions.EDIT_EXERCISE:
            return editExercise(state, action);
        default:
            return state;
    }
};
