import React, { PureComponent } from 'react';
import { func, number, shape } from 'prop-types';
import { connect } from 'react-redux';

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
            <div>
                <h2>Velg øvelser</h2>
                <p>Sett opp hvilke øvelser du vil ha med i programmet</p>
                <form onSubmit={this.onSubmit}>
                    <fieldset>
                        <legend>Velg splitt</legend>
                        <input
                            checked={split === 1}
                            id="split1"
                            name="split"
                            onChange={this.onSplitChange}
                            type="radio"
                            value="1"
                        />
                        <label htmlFor="split1">
                            1-splitt
                        </label>
                        <input
                            checked={split === 2}
                            id="split2"
                            name="split"
                            onChange={this.onSplitChange}
                            type="radio"
                            value="2"
                        />
                        <label htmlFor="split2">
                            2-splitt
                        </label>
                    </fieldset>
                </form>
                <div>
                    {Array.from(Array(split), (_, i) => i + 1).map(day =>
                        (<ExerciseList
                            day={day}
                            exercises={exercises[day] || []}
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
