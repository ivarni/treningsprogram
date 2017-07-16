import React, { PureComponent } from 'react';
import { arrayOf, number, shape, string } from 'prop-types';

import { Collapse } from 'react-collapse';
import classNames from 'classnames';

class Day extends PureComponent {
    constructor() {
        super();

        this.markAsDone = this.markAsDone.bind(this);
        this.toggleOpen = this.toggleOpen.bind(this);

        this.state = {
            isOpened: false,
        };
    }

    markAsDone(event) {
        if (event.key && event.key !== 'Enter') {
            return;
        }
        this.setState({
            todo: true,
        });
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

        return (
            <li className="program__day">
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
                                'button__icon',
                                'button__icon--expand',
                                { 'button__icon--expand--open': isOpened },
                            )
                        }
                    >
                        &nbsp;
                    </div>
                </div>
                <Collapse isOpened={isOpened}>
                    <ul className="program__exercises">
                        {program.map(exercise =>
                            (<li
                                key={exercise.name}
                            >
                                <div
                                    aria-label="merk som utført"
                                    className="program__exercise"
                                    onClick={this.markAsDone}
                                    onKeyPress={this.markAsDone}
                                    role="button"
                                    tabIndex={isOpened ? 0 : -1}
                                >
                                    <div>{exercise.name}</div>
                                    <div>{exercise.kgs}</div>
                                    <div>kg</div>
                                    <div
                                        className="button__icon button__icon--clear"
                                    >
                                        &nbsp;
                                    </div>
                                </div>
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
