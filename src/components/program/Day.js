import React, { PureComponent } from 'react';
import { arrayOf, number, shape, string } from 'prop-types';
import { Collapse } from 'react-collapse';
import classNames from 'classnames';

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
            <li
                className={
                    classNames(
                        'program__day',
                        { 'program__day--done': isDone },
                    )
                }
            >
                <div
                    className="program__title"
                    onClick={this.toggleOpen}
                    onKeyPress={this.toggleOpen}
                    role="button"
                    tabIndex={0}
                >
                    <h2>
                        Dag {day + 1}, {program[0].reps} reps
                    </h2>
                    <div
                        className={
                            classNames(
                                'button',
                                'button__icon',
                                'button__icon--expand',
                                { 'button__icon--expand--open': isOpened },
                            )
                        }
                    />
                </div>
                <Collapse isOpened={isOpened}>
                    <ul className="program__exercises">
                        {program.map(exercise =>
                            (<li
                                key={exercise.name}
                            >
                                <Exercise
                                    exercise={exercise}
                                    day={day + 1}
                                    isOpened={isOpened}
                                />
                            </li>),
                        )}
                    </ul>
                </Collapse>
            </li>
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
