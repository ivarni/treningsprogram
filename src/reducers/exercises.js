import * as actions from '~/actions';

export const defaultState = {
    1: [],
    2: [],
};

const addExercise = (state, { day, name, tenRm }) => ({
    ...state,
    [day]: [
        ...state[day],
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
