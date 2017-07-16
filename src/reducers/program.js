import * as actions from '~/actions';
import formula from '~/utils/formula';

const defaultState = [];

const calculateProgram = (state, { config: { split }, exercises }) => formula
    .map(f =>
        Array.from(Array(split), (_, i) => exercises[i + 1])
            .map(day => day.map(exercise => ({
                ...exercise,
                kgs: Number((exercise.tenRm * f.multiplier).toFixed(1)),
                reps: f.reps,
                dropset: f.dropset,
            }))))
    .reduce((x, y) => x.concat(y), []);

export default (state = defaultState, action) => {
    switch (action.type) {
        case actions.CALCULATE_PROGRAM:
            return calculateProgram(state, action);
        default:
            return state;
    }
};
