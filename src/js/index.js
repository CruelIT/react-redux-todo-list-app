import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css/normalize.css';
import '../styles/main.css';

import {AppContainer} from 'react-hot-loader';
// AppContainer is a necessary wrapper component for HMR

import App from './app';

const rootEl = document.getElementById('root');

const render = Component =>
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        rootEl
    );

render(App);
if (module.hot) {
    module.hot.accept('./app', () => render(App));
}
