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
