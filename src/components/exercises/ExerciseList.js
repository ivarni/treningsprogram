import React, { PureComponent } from 'react';
import { arrayOf, func, number, shape, string } from 'prop-types';
import { connect } from 'react-redux';

import * as dispatchers from '~/dispatchers';

import { Centered, Section } from '~/components/styled/layout';
import { IconButtonAdd } from '~/components/styled/buttons';
import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
} from '~/components/styled/table';
import { SectionTitle } from '~/components/styled/typography';

import AddExercise from './AddExercise';
import ExerciseRow from './ExerciseRow';

class ExerciseList extends PureComponent {
    constructor() {
        super();

        this.editExercise = this.editExercise.bind(this);
        this.onAddExercise = this.onAddExercise.bind(this);
        this.onCloseAddExercise = this.onCloseAddExercise.bind(this);
        this.onEditExercise = this.onEditExercise.bind(this);
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
            editing: {},
            showExerciseForm: false,
        });
    }

    onEditExercise(data) {
        this.props.editExercise(data);
        this.setState({
            editing: {},
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
            <Centered>
                <Section>
                    <SectionTitle>
                        Dag {day}
                    </SectionTitle>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableHeader>Øvelse</TableHeader>
                                <TableHeader>10 RM</TableHeader>
                                <TableHeader />
                                <TableHeader />
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                            /*
                                    TODO: Turn these into a component so we dont
                                    have to recreate callbacks on each render
                                */
                            }
                            {exercises.map(exercise => (
                                <ExerciseRow
                                    editExercise={this.editExercise}
                                    exercise={exercise}
                                    day={day}
                                    key={exercise.name}
                                    removeExercise={this.removeExercise}
                                />
                            ))}
                        </TableBody>
                    </Table>
                    {!showExerciseForm &&
                        <IconButtonAdd
                            type="button"
                            onClick={this.onShowAddExercise}
                        >
                            Legg til øvelse
                        </IconButtonAdd>
                    }
                    {showExerciseForm &&
                        <AddExercise
                            day={day}
                            isEditing={!!editing.name}
                            name={editing.name}
                            onAddExercise={this.onAddExercise}
                            onEditExercise={this.onEditExercise}
                            onClose={this.onCloseAddExercise}
                            tenRm={editing.tenRm}
                        />
                    }
                </Section>
            </Centered>
        );
    }
}

ExerciseList.propTypes = {
    addExercise: func.isRequired,
    day: number.isRequired,
    editExercise: func.isRequired,
    exercises: arrayOf(shape({
        name: string.isRequired,
        tenRm: number.isRequired,
    })),
    removeExercise: func.isRequired,
};

export default connect(null, {
    addExercise: dispatchers.addExercise,
    editExercise: dispatchers.editExercise,
    removeExercise: dispatchers.removeExercise,
})(ExerciseList);
