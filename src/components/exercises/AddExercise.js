import React, { PureComponent } from 'react';
import { func, number, string } from 'prop-types';

class AddExercise extends PureComponent {
    constructor(props) {
        super();

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: props.name || '',
            tenRm: props.tenRm || '',
        };
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.name !== nextProps.name && this.props.tenRm !== nextProps.tenRm) {
            this.setState({
                name: nextProps.name,
                tenRm: nextProps.tenRm,
            });
        }
    }

    onChange(event) {
        const { name, value } = event.target;

        this.setState({
            [name]: value,
        });
    }

    onSubmit(event) {
        event.preventDefault();

        this.props.onAddExercise({
            ...this.state,
            day: this.props.day,
        });
        this.props.onClose();
    }

    render() {
        const {
            onClose,
        } = this.props;

        const {
            name,
            tenRm,
        } = this.state;

        return (
            <form
                className="exercises__add"
                onSubmit={this.onSubmit}
            >
                <div className="form__input-wrapper">
                    <label
                        className="form__label"
                        htmlFor="name"
                    >
                        Navn på øvelse
                    </label>
                    <input
                        className="form__text-input"
                        id="name"
                        name="name"
                        onChange={this.onChange}
                        type="text"
                        value={name}
                    />
                </div>
                <div className="form__input-wrapper">
                    <label
                        className="form__label"
                        htmlFor="tenRm"
                    >
                        10 RM max
                    </label>
                    <input
                        className="form__text-input"
                        id="tenRm"
                        name="tenRm"
                        onChange={this.onChange}
                        type="tel"
                        value={tenRm}
                    />
                </div>
                <div className="form__input-wrapper">
                    <button className="button button__text">
                        Lagre
                    </button>
                    <button
                        className="button button__text"
                        onClick={onClose}
                        type="button"
                    >
                        Avbryt
                    </button>
                </div>
            </form>
        );
    }
}

AddExercise.propTypes = {
    day: number.isRequired,
    name: string,
    onAddExercise: func.isRequired,
    onClose: func.isRequired,
    tenRm: number,
};

export default AddExercise;
