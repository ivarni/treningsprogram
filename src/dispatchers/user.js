import * as actions from '~/actions';
import { loadState } from '~/store/cloudStorage';

export const loggedIn = user =>
    async (dispatch) => {
        dispatch(actions.loggedIn(user));
        const data = await loadState();
        if (data) {
            const { config, exercises, program } = data;
            dispatch(actions.hydrateStore(config, exercises, program));
        }
    };

export const loggedOut = () =>
    dispatch => dispatch(actions.loggedOut());
