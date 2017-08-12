import * as actions from '~/actions';
import formula from '~/utils/formula';

const defaultState = [];

// TODO fix this bloody mess when sober
const calculateProgram = (state, { config: { split }, exercises }) => formula
    .map(f =>
        Array.from(Array(split), (_, i) => exercises[i + 1])
            .map(day => day.map(exercise => ({
                ...exercise,
                kgs: Number((exercise.tenRm * f.multiplier).toFixed(1)),
                reps: f.reps,
                dropset: f.dropset,
            }))))
    .reduce((x, y) => x.concat(y), [])
    .map((day, index) => day.map((d, e) => {
        if (state[index]) {
            return {
                ...state[index][e],
                ...d,
            };
        }
        return d;
    }));

const markExerciseDone = (state, { day: number, name }) => state
    .map((day, index) =>
        day.map((exercise) => {
            if (index + 1 === number && name === exercise.name) {
                return {
                    ...exercise,
                    done: !exercise.done,
                };
            }
            return exercise;
        }),
    );

export default (state = defaultState, action) => {
    switch (action.type) {
        case actions.CALCULATE_PROGRAM:
            return calculateProgram(state, action);
        case actions.MARK_EXERCISE_DONE:
            return markExerciseDone(state, action);
        default:
            return state;
    }
};
