import React, { PureComponent } from 'react';
import { func, number, shape, string } from 'prop-types';

class ExerciseRow extends PureComponent {
    constructor() {
        super();

        this.editExercise = this.editExercise.bind(this);
        this.removeExercise = this.removeExercise.bind(this);
    }

    editExercise() {
        const {
            editExercise,
            exercise,
        } = this.props;

        editExercise(exercise);
    }

    removeExercise() {
        const {
            exercise,
            day,
            removeExercise,
        } = this.props;

        removeExercise(day, exercise.name);
    }

    render() {
        const {
            exercise,
        } = this.props;

        return (
            <tr
                key={exercise.name}
            >
                <td>
                    {exercise.name}
                </td>
                <td>
                    {exercise.tenRm} kg
                </td>
                <td>
                    <button
                        className="button button__icon button__icon--clear"
                        onClick={this.removeExercise}
                        type="button"
                    >
                        Fjern øvelse
                    </button>
                </td>
                <td>
                    <button
                        className="button button__icon button__icon--edit"
                        onClick={this.editExercise}
                        type="button"
                    >
                        Endre øvelse
                    </button>
                </td>
            </tr>
        );
    }
}

ExerciseRow.propTypes = {
    editExercise: func.isRequired,
    exercise: shape({
        name: string.isRequired,
        tenRm: number.isRequired,
    }).isRequired,
    day: number.isRequired,
    removeExercise: func.isRequired,
};

export default ExerciseRow;
