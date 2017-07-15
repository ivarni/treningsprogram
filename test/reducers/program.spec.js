import reducer, { defaultState } from '~/reducers/program';
import * as actions from '~/actions';
import formula from '~/utils/formula';

const getState = (action, state = defaultState) => reducer(state, action);

describe('program reducer', () => {
    let state;

    describe('calculating program with a 1-split', () => {
        const config = {
            split: 1,
        };
        const exercises = {
            1: [
                { name: 'Knebøy', tenRm: 70 },
                { name: 'Brystpress', tenRm: 25 },
            ],
        };

        beforeEach(() => {
            state = getState(actions.calculateProgram(config, exercises));
        });

        it('creates one day per line in formula for 1-split program', () => {
            expect(state).to.be.an('array');
            expect(state).to.have.length(formula.length);
        });

        it('adds each exercise to each day', () => {
            state.forEach((day) => {
                expect(day).to.be.an('array');

                const squats = day.find(d => d.name === 'Knebøy');
                const press = day.find(d => d.name === 'Brystpress');

                expect(squats).not.to.be(undefined);
                expect(press).not.to.be(undefined);
            });
        });

        it('calculates kgs, reps and dropset using the formula', () => {
            state.forEach((day, index) => {
                const squats = day.find(d => d.name === 'Knebøy');
                const { dropset, multiplier, reps } = formula[index];

                expect(squats.kgs).to.be(squats.tenRm * multiplier);
                expect(squats.reps).to.be(reps);
                expect(squats.dropset).to.be(dropset);
            });
        });
    });
});
