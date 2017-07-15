export const ADD_EXERCISE = 'ADD_EXERCISE';
export const addExercise = (day, name, tenRm) => ({
    type: ADD_EXERCISE,
    day,
    name,
    tenRm,
});
