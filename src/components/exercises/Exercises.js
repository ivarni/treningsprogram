import React, { PureComponent } from 'react';

import ExerciseList from './ExerciseList';

class Exercises extends PureComponent {
    constructor() {
        super();

        this.onSubmit = this.onSubmit.bind(this);
        this.onSplitChange = this.onSplitChange.bind(this);

        this.state = {
            split: '1',
        };
    }

    onSplitChange(event) {
        this.setState({
            split: event.target.value,
        });
    }

    onSubmit(event) {
        event.preventDefault();
    }

    render() {
        const { split } = this.state;
        return (
            <div>
                <h2>Velg øvelser</h2>
                <p>Sett opp hvilke øvelser du vil ha med i programmet</p>
                <form onSubmit={this.onSubmit}>
                    <fieldset>
                        <legend>Velg splitt</legend>
                        <input
                            checked={split === '1'}
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
                            checked={split === '2'}
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
                <ExerciseList />
            </div>
        );
    }
}

export default Exercises;
