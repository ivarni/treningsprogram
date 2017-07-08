import React from 'react';
import { object } from 'prop-types';
import { Provider } from 'react-redux';

import App from './App';

const Root = ({ store }) => (
    <Provider store={store}>
        <App />
    </Provider>
);

Root.propTypes = {
    store: object,
};

export default Root;
