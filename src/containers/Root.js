import React from 'react';
import { object } from 'prop-types';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

const Root = ({ store }) => (
    <BrowserRouter>
        <App store={store} />
    </BrowserRouter>
);

Root.propTypes = {
    store: object,
};

export default Root;
