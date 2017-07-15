import * as actions from '~/actions';
import formula from '~/utils/formula';

const defaultState = [];

// { config, exercises }
const calculateProgram = (state, { exercises }) => formula.map(f => exercises[1].map(exercise => ({
    ...exercise,
    kgs: exercise.tenRm * f.multiplier,
    reps: f.reps,
    dropset: f.dropset,
})));

export default (state = defaultState, action) => {
    switch (action.type) {
        case actions.CALCULATE_PROGRAM:
            return calculateProgram(state, action);
        default:
            return state;
    }
};
