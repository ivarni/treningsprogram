import * as actions from '~/actions';

export const addExercise = ({ day, name, tenRm }) =>
    (dispatch, getState) => {
        dispatch(actions.addExercise(day, name, Number(tenRm)));
        const { config, exercises } = getState();
        dispatch(actions.calculateProgram(config, exercises));
    };

