import React from 'react';
import logo from './logo.svg';
import './assets/sass/App.css';
import { Provider } from 'react-redux'
import ThemeSelect from './contents/components/ThemeSelect';
import configureStore from './contents/reducers/configureStore';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ThemeSelect></ThemeSelect>
        </header>
      </div>
    </Provider>

  );
}

export default App;
