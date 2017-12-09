import React from 'react';
import { arrayOf, shape } from 'prop-types';
import { connect } from 'react-redux';

import { Program } from '~/components/styled/program';

import Day from './Day';

const ProgramContainer = ({ program }) => (
    <Program>
        {program.map((day, index) =>
            (<Day
                day={index}
                key={index}
                program={day}
            />))}
    </Program>
);

ProgramContainer.propTypes = {
    program: arrayOf(arrayOf(shape({}))).isRequired,
};

const mapStateToProps = state => ({
    program: state.program,
});

export default connect(
    mapStateToProps,
    {},
)(ProgramContainer);
