import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import rootReducer from '~/reducers';
import { loadState, saveState } from './localStorage';

const configureStore = () => {
    const preloadedState = loadState();

    const store = createStore(
        rootReducer,
        preloadedState,
        compose(
            applyMiddleware(
                thunk,
                createLogger(),
            ),
        ),
    );

    store.subscribe(() => {
        saveState(store.getState());
    });

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
};

export default configureStore;
