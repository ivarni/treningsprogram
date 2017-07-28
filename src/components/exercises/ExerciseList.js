import React, { PureComponent } from 'react';
import { arrayOf, func, number, shape, string } from 'prop-types';
import { connect } from 'react-redux';

import * as dispatchers from '~/dispatchers';

import AddExercise from './AddExercise';

class ExerciseList extends PureComponent {
    constructor() {
        super();

        this.editExercise = this.editExercise.bind(this);
        this.onAddExercise = this.onAddExercise.bind(this);
        this.onCloseAddExercise = this.onCloseAddExercise.bind(this);
        this.onShowAddExercise = this.onShowAddExercise.bind(this);
        this.removeExercise = this.removeExercise.bind(this);

        this.state = {
            editing: {},
            showExerciseForm: false,
        };
    }

    onAddExercise(data) {
        this.props.addExercise(data);
        this.setState({
            editing: {},
        });
    }

    onCloseAddExercise() {
        this.setState({
            showExerciseForm: false,
        });
    }

    onShowAddExercise() {
        this.setState({
            showExerciseForm: true,
        });
    }

    editExercise({ name, tenRm }) {
        this.setState({
            editing: { name, tenRm },
            showExerciseForm: true,
        });
    }

    removeExercise(day, name) {
        this.props.removeExercise({ day, name });

        this.setState({
            showExerciseForm: false,
        });
    }

    render() {
        const {
            editing,
            showExerciseForm,
        } = this.state;

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
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {
                        /*
                                TODO: Turn these into a component so we dont
                                have to recreate callbacks on each render
                            */
                        }
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
                                <td>
                                    <button
                                        className="button button__icon button__icon--edit"
                                        onClick={() => this.editExercise(exercise)}
                                        type="button"
                                    >
                                        Endre øvelse
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {!showExerciseForm &&
                    <button
                        className="button button__icon button__icon--add"
                        type="button"
                        onClick={this.onShowAddExercise}
                    >
                        Legg til øvelse
                    </button>
                }
                {showExerciseForm &&
                    <AddExercise
                        onAddExercise={this.onAddExercise}
                        day={day}
                        name={editing.name}
                        onClose={this.onCloseAddExercise}
                        tenRm={editing.tenRm}
                    />
                }
            </div>
        );
    }
}

ExerciseList.propTypes = {
    addExercise: func.isRequired,
    day: number.isRequired,
    exercises: arrayOf(shape({
        name: string.isRequired,
        tenRm: number.isRequired,
    })),
    removeExercise: func.isRequired,
};

export default connect(null, {
    addExercise: dispatchers.addExercise,
    removeExercise: dispatchers.removeExercise,
})(ExerciseList);
