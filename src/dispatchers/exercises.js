import * as actions from '~/actions';

export const addExercise = ({ name, tenRm }) =>
    dispatch => dispatch(actions.addExercise(name, tenRm));
