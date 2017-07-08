import * as actions from '~/actions';

export const defaultState = {};

export default (state = defaultState, action) => {
    switch (action.type) {
        case actions.ADD_EXERCISE: {
            return { ...state };
        }
        default: {
            return { ...state };
        }
    }
};
