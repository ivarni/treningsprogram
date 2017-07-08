import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import rootReducer from '~/reducers';

const configureStore = () => {
    const store = createStore(
        rootReducer,
        undefined,
        compose(
            applyMiddleware(
                thunk,
                createLogger(),
            ),
        ),
    );

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
};

export default configureStore;
