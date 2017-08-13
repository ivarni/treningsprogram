export const ADD_EXERCISE = 'ADD_EXERCISE';
export const addExercise = (day, name, tenRm) => ({
    type: ADD_EXERCISE,
    day,
    name,
    tenRm,
});

export const REMOVE_EXERCISE = 'REMOVE_EXERCISE';
export const removeExercise = (day, name) => ({
    type: REMOVE_EXERCISE,
    day,
    name,
});

export const EDIT_EXERCISE = 'EDIT_EXERCISE';
export const editExercise = (day, name, tenRm) => ({
    type: EDIT_EXERCISE,
    day,
    name,
    tenRm,
});
