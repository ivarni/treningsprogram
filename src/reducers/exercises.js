import * as actions from '~/actions';

export const defaultState = [];

export default (state = defaultState, action) => {
    switch (action.type) {
        case actions.ADD_EXERCISE: {
            const { name, tenRm } = action;
            return [...state, { name, tenRm }];
        }
        default: {
            return state;
        }
    }
};
