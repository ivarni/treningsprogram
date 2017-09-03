import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '~/reducers';
import observer from './observer';
import * as localStorage from './localStorage';

const configureStore = () => {
    const preloadedState = localStorage.loadState();

    const store = createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(thunk),
    );

    observer(store);

    return store;
};

export default configureStore;
