import * as actions from '~/actions';

export const setSplit = ({ split }) =>
    dispatch => dispatch(actions.setSplit(Number(split)));
