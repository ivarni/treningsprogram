import React, { PureComponent } from 'react';
import { func, number, shape } from 'prop-types';
import { connect } from 'react-redux';

import { Centered } from '~/components/styled/layout';
import { Form, InputGroup } from '~/components/styled/form';
import { Paragraph, SecondaryTitle } from '~/components/styled/typography';
import { RadioButton, RadioGroup, RadioLabel, RadioTitle } from '~/components/styled/form/radio';

import * as dispatchers from '~/dispatchers';

import ExerciseList from './ExerciseList';

class Exercises extends PureComponent {
    constructor() {
        super();

        this.onSubmit = this.onSubmit.bind(this);
        this.onSplitChange = this.onSplitChange.bind(this);
    }

    onSplitChange(event) {
        this.props.setSplit({
            split: event.target.value,
        });
    }

    onSubmit(event) {
        event.preventDefault();
    }

    render() {
        const {
            exercises,
            split,
        } = this.props;

        return (
            <Centered>
                <SecondaryTitle>
                    Velg øvelser
                </SecondaryTitle>
                <Paragraph centered={true}>
                    Sett opp hvilke øvelser du vil ha med i programmet
                </Paragraph>
                <Form onSubmit={this.onSubmit}>
                    <RadioGroup>
                        <RadioTitle>
                            Velg splitt
                        </RadioTitle>
                        <InputGroup>
                            <RadioButton
                                checked={split === 1}
                                id="split1"
                                name="split"
                                onChange={this.onSplitChange}
                                value="1"
                            />
                            <RadioLabel
                                checked={split === 1}
                                htmlFor="split1"
                            >
                                1-splitt
                            </RadioLabel>
                        </InputGroup>
                        <InputGroup>
                            <RadioButton
                                checked={split === 2}
                                id="split2"
                                name="split"
                                onChange={this.onSplitChange}
                                value="2"
                            />
                            <RadioLabel
                                checked={split === 2}
                                htmlFor="split2"
                            >
                                2-splitt
                            </RadioLabel>
                        </InputGroup>
                    </RadioGroup>
                </Form>
                <div>
                    {Array.from(Array(split), (_, i) => i + 1).map(day =>
                        (<ExerciseList
                            day={day}
                            exercises={exercises[day] || []}
                            key={day}
                        />),
                    )}
                </div>
            </Centered>
        );
    }
}

Exercises.propTypes = {
    exercises: shape({}),
    setSplit: func.isRequired,
    split: number.isRequired,
};

const mapStateToProps = state => ({
    exercises: state.exercises,
    split: state.config.split,
});

export default connect(
    mapStateToProps,
    {
        setSplit: dispatchers.setSplit,
    },
)(Exercises);
