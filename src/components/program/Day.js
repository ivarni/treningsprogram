import React, { PureComponent } from 'react';
import { arrayOf, number, shape, string } from 'prop-types';

class Day extends PureComponent {
    render() {
        const {
            day,
            program,
        } = this.props;

        return (
            <li>
                <h2>Dag {day + 1} - 3 sett</h2>
                <ul>
                    {program.map(exercise =>
                        (<li
                            key={exercise.name}
                        >
                            {exercise.name} - {exercise.kgs}kg ({exercise.reps} reps)
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
