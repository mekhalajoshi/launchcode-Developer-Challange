import React from 'react';
import './App.css';
import { Provider as ReduxProvider } from 'react-redux';
import Dashboard from './components/Dashboard';
import configureStore from './redux/store/configureStore';

const store = configureStore();

const App = () => (
  <ReduxProvider store={store}>
    <div>
      <Dashboard />
    </div>
  </ReduxProvider>

);

export default App;
