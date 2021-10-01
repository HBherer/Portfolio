import React from 'react';
import './assets/sass/App.scss';
import { Provider } from 'react-redux';
import configureStore from './contents/reducers/configureStore';
import { BrowserRouter as Router } from 'react-router-dom';
import AppNavigator from "../src/contents/router/AppNavigator";


const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Router>
        <AppNavigator />
      </Router>
    </Provider>
  );
}

export default App;
