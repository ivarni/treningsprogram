import * as actions from '~/actions';

export const markExerciseDone = ({ day, name }) =>
    dispatch => dispatch(actions.markExerciseDone(day, name));
