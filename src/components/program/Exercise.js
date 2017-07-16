import React, { PureComponent } from 'react';
import { bool, func, number, shape, string } from 'prop-types';
import { connect } from 'react-redux';

import * as dispatchers from '~/dispatchers';

class Exercise extends PureComponent {
    constructor() {
        super();

        this.markAsDone = this.markAsDone.bind(this);
    }

    markAsDone(event) {
        if (event.key && event.key !== 'Enter') {
            return;
        }
        const {
            exercise: { name },
            day,
            markExerciseDone,
        } = this.props;

        markExerciseDone({
            day,
            name,
        });
    }

    render() {
        const {
            exercise,
            isOpened,
        } = this.props;

        return (
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
        );
    }
}

Exercise.propTypes = {
    exercise: shape({
        name: string.isRequired,
        kgs: number.isRequired,
        reps: number.isRequired,
    }).isRequired,
    day: number.isRequired,
    isOpened: bool.isRequired,
    markExerciseDone: func.isRequired,
};

export default connect(
    null,
    {
        markExerciseDone: dispatchers.markExerciseDone,
    },
)(Exercise);
