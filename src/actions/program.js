export const CALCULATE_PROGRAM = 'CALCULATE_PROGRAM';
export const calculateProgram = (config, exercises) => ({
    type: CALCULATE_PROGRAM,
    config,
    exercises,
});
