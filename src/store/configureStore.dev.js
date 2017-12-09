import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import rootReducer from '~/reducers';
import observer from './observer';
import * as localStorage from './localStorage';

const configureStore = () => {
    const preloadedState = localStorage.loadState();

    /* eslint-disable no-underscore-dangle */
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    /* eslint-enable no-underscore-dangle */
    const store = createStore(
        rootReducer,
        preloadedState,
        composeEnhancers(applyMiddleware(
            thunk,
            createLogger(),
        )),
    );

    observer(store);

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
};

export default configureStore;
