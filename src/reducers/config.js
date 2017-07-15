import * as actions from '~/actions';

export const defaultState = {
    split: 1,
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case actions.SET_SPLIT:
            return { ...state, split: action.split };
        default:
            return state;
    }
};
