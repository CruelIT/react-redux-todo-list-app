import React, {PropTypes} from 'react';
import {Provider} from 'react-redux';

import MainLayout from './components/MainLayout';

const App = (props) => (
  <Provider store={props.store}>
    <MainLayout />
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired
};

export default App;
