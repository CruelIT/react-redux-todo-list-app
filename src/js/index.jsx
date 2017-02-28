import React from 'react';
import ReactDOM from 'react-dom';

import {AppContainer} from 'react-hot-loader';
// AppContainer is a necessary wrapper component for HMR

import {configureStore} from './store';

import 'normalize.css/normalize.css';
import '../styles/main.css';

import App from './app';

const rootEl = document.getElementById('root');
const store = configureStore();

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component store={store} />
    </AppContainer>,
    rootEl
  );
};

render(App);
if (__DEV__ && module.hot) {
  module.hot.accept('./app', () => render(App));
}
