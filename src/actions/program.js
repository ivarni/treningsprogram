export const CALCULATE_PROGRAM = 'CALCULATE_PROGRAM';
export const calculateProgram = (config, exercises) => ({
    type: CALCULATE_PROGRAM,
    config,
    exercises,
});

export const MARK_EXERCISE_DONE = 'MARK_EXERCISE_DONE';
export const markExerciseDone = (day, name) => ({
    type: MARK_EXERCISE_DONE,
    day,
    name,
});
