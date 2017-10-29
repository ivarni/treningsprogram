import React, { PureComponent } from 'react';
import { func, number, shape, string } from 'prop-types';

import { IconButtonClear, IconButtonEdit } from '~/components/styled/buttons';
import { TableRow, TableCell } from '~/components/styled/table';

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
            <TableRow key={exercise.name}>
                <TableCell>
                    {exercise.name}
                </TableCell>
                <TableCell>
                    {exercise.tenRm} kg
                </TableCell>
                <TableCell>
                    <IconButtonClear
                        onClick={this.removeExercise}
                        type="button"
                    >
                        Fjern øvelse
                    </IconButtonClear>
                </TableCell>
                <TableCell>
                    <IconButtonEdit
                        onClick={this.editExercise}
                        type="button"
                    >
                        Endre øvelse
                    </IconButtonEdit>
                </TableCell>
            </TableRow>
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
