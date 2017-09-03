import * as actions from '~/actions';

export const defaultState = {
    split: 2,
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case actions.SET_SPLIT:
            return { ...state, split: action.split };
        case actions.HYDRATE_STORE:
            return action.config;
        default:
            return state;
    }
};
