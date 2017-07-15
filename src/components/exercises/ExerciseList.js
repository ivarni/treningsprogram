import React, { PureComponent } from 'react';
import { arrayOf, number, shape, string } from 'prop-types';

import AddExercise from './AddExercise';

class ExerciseList extends PureComponent {
    constructor() {
        super();

        this.onCloseAddExercise = this.onCloseAddExercise.bind(this);
        this.onShowAddExercise = this.onShowAddExercise.bind(this);

        this.state = {
            showAddExercise: false,
        };
    }

    onCloseAddExercise() {
        this.setState({
            showAddExercise: false,
        });
    }

    onShowAddExercise() {
        this.setState({
            showAddExercise: true,
        });
    }

    render() {
        const { showAddExercise } = this.state;
        const {
            day,
            exercises,
        } = this.props;

        return (
            <div>
                <h3>Øvelser i programmet, dag {day}</h3>
                <ol>
                    {exercises.map(exercise => (
                        <li key={exercise.name}>
                            {exercise.name}, 10RM: {exercise.tenRm}
                        </li>
                    ))}
                </ol>
                <button
                    type="button"
                    onClick={this.onShowAddExercise}
                >
                    Legg til øvelse
                </button>
                {showAddExercise &&
                    <AddExercise
                        day={day}
                        onClose={this.onCloseAddExercise}
                    />
                }
            </div>
        );
    }
}

ExerciseList.propTypes = {
    day: number.isRequired,
    exercises: arrayOf(shape({
        name: string.isRequired,
        tenRm: number.isRequired,
    })),
};

export default ExerciseList;
