import React from 'react';
import { render } from 'react-dom';

import * as OfflinePluginRuntime from 'offline-plugin/runtime';
//import * as firebase from 'firebase';

import Root from '~/containers/Root';
import configureStore from '~/store/configureStore';

if (process.env.NODE_ENV === 'production') {
    OfflinePluginRuntime.install();
}
/*
const firebaseConfig = {
    apiKey: 'AIzaSyCDuhiNhyZCV_7wVDwFxRX0SUwdQ-E6Wi4',
    authDomain: 'treningsprogram-107d2.firebaseapp.com',
    databaseURL: 'https://treningsprogram-107d2.firebaseio.com',
    projectId: 'treningsprogram-107d2',
    storageBucket: 'treningsprogram-107d2.appspot.com',
    messagingSenderId: '1004204129924',
};
firebase.initializeApp(firebaseConfig);
*/
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
