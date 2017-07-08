import * as actions from '~/actions';

export const addExercise = exercise =>
    dispatch => dispatch(actions.addExercise(exercise));
