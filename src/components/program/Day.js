import React, { PureComponent } from 'react';
import { arrayOf, number, shape, string } from 'prop-types';

class Day extends PureComponent {
    render() {
        const {
            day,
            program,
        } = this.props;

        return (
            <li className="program__day">
                <h2>Dag {day + 1}, {program[0].reps} reps</h2>
                <ul className="program__exercises">
                    {program.map(exercise =>
                        (<li
                            className="program__exercise"
                            key={exercise.name}
                        >
                            <div>{exercise.name}</div>
                            <div>{exercise.kgs}</div>
                            <div>kg</div>
                            <button
                                aria-label="merk som utført"
                                className="button__icon button__icon--clear"
                                type="button"
                            >
                                &nbsp;
                            </button>
                        </li>),
                    )}
                </ul>
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
