import * as actions from '~/actions';

export const defaultState = {
    name: null,
    authenticated: false,
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case actions.LOGGED_IN:
            return { ...state, ...action.user, authenticated: true };
        case actions.LOGGED_OUT:
            return defaultState;
        default:
            return state;
    }
};
