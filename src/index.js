import React from 'react';
import { render } from 'react-dom';

import * as OfflinePluginRuntime from 'offline-plugin/runtime';

import Root from '~/containers/Root';
import configureStore from '~/store/configureStore';

OfflinePluginRuntime.install();

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
