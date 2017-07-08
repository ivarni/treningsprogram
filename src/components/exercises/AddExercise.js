import React, { PureComponent } from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';

import * as dispatchers from '~/dispatchers';

class AddExercise extends PureComponent {
    constructor() {
        super();

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            tenRm: '',
        };
    }

    onChange(event) {
        const { name, value } = event.target;

        this.setState({
            [name]: value,
        });
    }

    onSubmit(event) {
        event.preventDefault();

        this.props.addExercise(this.state);
        this.props.onClose();
    }

    render() {
        const { onClose } = this.props;
        const {
            name,
            tenRm,
        } = this.state;

        return (
            <form onSubmit={this.onSubmit}>
                <label htmlFor="name">
                    Navn på øvelse
                </label>
                <input
                    type="text"
                    name="name"
                    onChange={this.onChange}
                    value={name}
                />
                <label htmlFor="tenRm">
                    10 RM max
                </label>
                <input
                    type="tel"
                    name="tenRm"
                    onChange={this.onChange}
                    value={tenRm}
                />
                <button>Lagre</button>
                <button
                    type="button"
                    onClick={onClose}
                >
                    Avbryt
                </button>
            </form>
        );
    }
}

AddExercise.propTypes = {
    addExercise: func.isRequired,
    onClose: func.isRequired,
};

export default connect(null, {
    addExercise: dispatchers.addExercise,
})(AddExercise);
