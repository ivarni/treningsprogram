import React, { PureComponent } from 'react';
import { arrayOf, func, number, shape, string } from 'prop-types';
import { connect } from 'react-redux';

import * as dispatchers from '~/dispatchers';

import AddExercise from './AddExercise';

class ExerciseList extends PureComponent {
    constructor() {
        super();

        this.onCloseAddExercise = this.onCloseAddExercise.bind(this);
        this.onShowAddExercise = this.onShowAddExercise.bind(this);
        this.removeExercise = this.removeExercise.bind(this);

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

    removeExercise(day, name) {
        this.props.removeExercise({ day, name });
    }

    render() {
        const { showAddExercise } = this.state;
        const {
            day,
            exercises,
        } = this.props;

        return (
            <div className="exercises__section">
                <h3 className="exercises__section-header">
                    Dag {day}
                </h3>
                <table className="exercises__list">
                    <thead>
                        <tr>
                            <th>Øvelse</th>
                            <th>10 RM</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {exercises.map(exercise => (
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
                                        onClick={() => this.removeExercise(day, exercise.name)}
                                        type="button"
                                    >
                                        Fjern øvelse
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {!showAddExercise &&
                    <button
                        className="button button__icon button__icon--add"
                        type="button"
                        onClick={this.onShowAddExercise}
                    >
                        Legg til øvelse
                    </button>
                }
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
    removeExercise: func.isRequired,
};

export default connect(null, {
    removeExercise: dispatchers.removeExercise,
})(ExerciseList);
