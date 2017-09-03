import React, { PureComponent } from 'react';
import { func, number, shape } from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';

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
            <div className="exercises">
                <h2 className="h2">
                    Velg øvelser
                </h2>
                <p className="exercises__lead-text">
                    Sett opp hvilke øvelser du vil ha med i programmet
                </p>
                <form
                    className="form"
                    onSubmit={this.onSubmit}
                >
                    <fieldset className="form__radio-group">
                        <legend className="form__radio-legend">
                            Velg splitt
                        </legend>
                        <div className="form__input-wrapper">
                            <input
                                checked={split === 1}
                                className="form__radio-input"
                                id="split1"
                                name="split"
                                onChange={this.onSplitChange}
                                type="radio"
                                value="1"
                            />
                            <label
                                className={
                                    classNames(
                                        'form__radio-label',
                                        { 'form__radio-label--checked': split === 1 },
                                    )
                                }
                                htmlFor="split1"
                            >
                                <span className="form__radio-label-text">
                                    1-splitt
                                </span>
                            </label>
                        </div>
                        <div className="form__input-wrapper">
                            <input
                                checked={split === 2}
                                className="form__radio-input"
                                id="split2"
                                name="split"
                                onChange={this.onSplitChange}
                                type="radio"
                                value="2"
                            />
                            <label
                                className={
                                    classNames(
                                        'form__radio-label',
                                        { 'form__radio-label--checked': split === 2 },
                                    )
                                }
                                htmlFor="split2"
                            >
                                <span className="form__radio-label-text">
                                    2-splitt
                                </span>
                            </label>
                        </div>
                    </fieldset>
                </form>
                <div>
                    {Array.from(Array(split), (_, i) => i + 1).map(day =>
                        (<ExerciseList
                            day={day}
                            exercises={exercises[`day${day}`] || []}
                            key={day}
                        />),
                    )}
                </div>
            </div>
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
