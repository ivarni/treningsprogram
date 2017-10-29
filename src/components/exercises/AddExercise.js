import React, { PureComponent } from 'react';
import { bool, func, number, string } from 'prop-types';

import { Centered } from '~/components/styled/layout';
import { Form, InputGroup, Label, TextInput } from '~/components/styled/form';
import { TextButton } from '~/components/styled/buttons';

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

        const {
            day,
            isEditing,
            onAddExercise,
            onEditExercise,
        } = this.props;

        const data = {
            ...this.state,
            day,
        };

        if (isEditing) {
            onEditExercise(data);
        } else {
            onAddExercise(data);
        }

        this.props.onClose();
    }

    render() {
        const {
            isEditing,
            onClose,
        } = this.props;

        const {
            name,
            tenRm,
        } = this.state;

        return (
            <Centered>
                <Form onSubmit={this.onSubmit}>
                    <InputGroup>
                        <Label htmlFor="name">
                            Navn på øvelse
                        </Label>
                        <TextInput
                            disabled={isEditing}
                            id="name"
                            name="name"
                            onChange={this.onChange}
                            type="text"
                            value={name}
                        />
                    </InputGroup>
                    <InputGroup>
                        <Label htmlFor="tenRm">
                            10 RM max
                        </Label>
                        <TextInput
                            id="tenRm"
                            name="tenRm"
                            onChange={this.onChange}
                            type="tel"
                            value={tenRm}
                        />
                    </InputGroup>
                    <InputGroup>
                        <TextButton>
                            Lagre
                        </TextButton>
                        <TextButton
                            onClick={onClose}
                            type="button"
                        >
                            Avbryt
                        </TextButton>
                    </InputGroup>
                </Form>
            </Centered>
        );
    }
}

AddExercise.propTypes = {
    isEditing: bool.isRequired,
    day: number.isRequired,
    name: string,
    onAddExercise: func.isRequired,
    onClose: func.isRequired,
    onEditExercise: func.isRequired,
    tenRm: number,
};

export default AddExercise;
