import reducer, { defaultState } from '~/reducers/program';
import * as actions from '~/actions';
import formulaFunc from '~/utils/formula';

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

        it('creates one day per line in formula', () => {
            expect(state).to.be.an('array');
            expect(state).to.have.length(formulaFunc(1).length);
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
                const { dropset, multiplier, reps } = formulaFunc(1)[index];

                expect(squats.kgs).to.be(Number((squats.tenRm * multiplier).toFixed(1)));
                expect(squats.reps).to.be(reps);
                expect(squats.dropset).to.be(dropset);
            });
        });
    });

    describe('calculating program with a 2-split', () => {
        const config = {
            split: 2,
        };
        const exercises = {
            1: [
                { name: 'Knebøy', tenRm: 70 },
            ],
            2: [
                { name: 'Bicepscurl', tenRm: 12 },
            ],
        };

        beforeEach(() => {
            state = getState(actions.calculateProgram(config, exercises));
        });

        it('creates two days per line in formula', () => {
            expect(state).to.be.an('array');
            expect(state).to.have.length(2 * formulaFunc(2).length);
        });

        it('adds each exercise to each day', () => {
            state.forEach((day) => {
                expect(day).to.be.an('array');

                const squats = day.find(d => d.name === 'Knebøy');
                const curls = day.find(d => d.name === 'Bicepscurl');

                expect(squats || curls).not.to.be(undefined);
            });
        });

        it('calculates kgs, reps and dropset using the formula', () => {
            let index = 0;
            state.forEach((day, i) => {
                const squats = day.find(d => d.name === 'Knebøy');
                const curls = day.find(d => d.name === 'Bicepscurl');

                const { dropset, multiplier, reps } = formulaFunc(2)[index];

                expect((squats || curls).kgs).to.be(Number(((squats || curls).tenRm * multiplier).toFixed(1)));
                expect((squats || curls).reps).to.be(reps);
                expect((squats || curls).dropset).to.be(dropset);

                if ((i + 1) % 2 === 0) {
                    index += 1;
                }
            });
        });

        it('keeps the done mark if there is already a program', () => {
            const action = actions.markExerciseDone(15, 'Knebøy');
            state = getState(action, state);
            state = getState(actions.calculateProgram(config, exercises), state);

            expect(state[14][0].done).to.be(true);
        });
    });

    describe('marking an exercise as done', () => {
        const startState = [
            [
                { name: 'Knebøy', kgs: 56, reps: 12 },
                { name: 'Markløft', kgs: 56, reps: 12 },
            ],
            [
                { name: 'Knebøy', kgs: 60, reps: 12 },
                { name: 'Markløft', kgs: 60, reps: 12 },
            ],
        ];

        it('marks the correct exercise as being done', () => {
            const action = actions.markExerciseDone(2, 'Knebøy');
            state = getState(action, startState);

            expect(state[0][0].done).not.to.be(true);
            expect(state[0][1].done).not.to.be(true);
            expect(state[1][0].done).to.be(true);
            expect(state[1][1].done).not.to.be(true);
        });

        it('removes the done mark if exercise is already done', () => {
            const action = actions.markExerciseDone(2, 'Knebøy');
            const markedState = getState(action, startState);
            state = getState(action, markedState);

            expect(state[0][0].done).not.to.be(true);
            expect(state[0][1].done).not.to.be(true);
            expect(state[1][0].done).not.to.be(true);
            expect(state[1][1].done).not.to.be(true);
        });
    });
});
