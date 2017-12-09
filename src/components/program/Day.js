import React, { PureComponent } from 'react';
import { arrayOf, number, shape, string } from 'prop-types';
import { Collapse } from 'react-collapse';

import { IconButtonExpand } from '~/components/styled/buttons';
import { ProgramExercises, ProgramItem, ProgramTitle } from '~/components/styled/program';
import Exercise from './Exercise';

class Day extends PureComponent {
    constructor() {
        super();

        this.toggleOpen = this.toggleOpen.bind(this);

        this.state = {
            isOpened: false,
        };
    }

    toggleOpen(event) {
        if (event.key && event.key !== 'Enter') {
            return;
        }
        this.setState({
            isOpened: !this.state.isOpened,
        });
    }

    render() {
        const {
            day,
            program,
        } = this.props;

        const { isOpened } = this.state;

        const isDone = program.every(exercise => exercise.done);

        return (
            <ProgramItem done={isDone}>
                <ProgramTitle
                    onClick={this.toggleOpen}
                    onKeyPress={this.toggleOpen}
                    role="button"
                    tabIndex={0}
                >
                    <h2>
                        Dag {day + 1}, {program[0].reps} reps
                        {program[0].dropset && ' + dropset'}
                    </h2>
                    {/* TODO: this should not be button, only an icon */}
                    <IconButtonExpand expanded={isOpened} />
                </ProgramTitle>
                <Collapse isOpened={isOpened}>
                    <ProgramExercises>
                        {program.map(exercise => (
                            <li
                                key={exercise.name}
                            >
                                <Exercise
                                    exercise={exercise}
                                    day={day + 1}
                                    isOpened={isOpened}
                                />
                            </li>
                        ))}
                    </ProgramExercises>
                </Collapse>
            </ProgramItem>
        );
    }
}

Day.propTypes = {
    day: number.isRequired,
    program: arrayOf(shape({
        name: string.isRequired,
        kgs: number.isRequired,
        reps: number.isRequired,
    })).isRequired,
};

export default Day;
