import React from 'react';
import { arrayOf, shape } from 'prop-types';
import { connect } from 'react-redux';

import Day from './Day';

const Program = ({ program }) => (
    <ol>
        {program.map((day, index) =>
            (<Day
                day={index}
                key={index}
                program={day}
            />),
        )}
    </ol>
);

Program.propTypes = {
    program: arrayOf(shape({})).isRequired,
};

const mapStateToProps = state => ({
    program: state.program,
});

export default connect(
    mapStateToProps,
    {},
)(Program);
