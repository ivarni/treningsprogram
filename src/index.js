import React from 'react';
import { render } from 'react-dom';

import Root from '~/containers/Root';
import configureStore from '~/store/configureStore';

const store = configureStore();

const renderApp = Component => render(
    <Component store={store} />,
    window.document.getElementById('root'),
);

renderApp(Root);

if (module.hot) {
    module.hot.accept('./containers/Root', () => {
        renderApp(require('./containers/Root').default);
    });
}
