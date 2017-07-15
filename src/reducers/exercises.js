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

export default (state = defaultState, action) => {
    switch (action.type) {
        case actions.ADD_EXERCISE:
            return addExercise(state, action);
        default:
            return state;
    }
};
