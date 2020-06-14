import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ThemeProvider } from '@material-ui/styles';

import { Provider as ReduxProvider } from 'react-redux';
import theme from './theme';
import Routes from './Routes';

// import Dashboard from './components/Dashboard';
import configureStore from './redux/store/configureStore';

const store = configureStore();
const browserHistory = createBrowserHistory();

const App = () => (
  <ReduxProvider store={store}>
    <ThemeProvider theme={theme}>
      <Router history={browserHistory}>
        <Routes />
      </Router>
    </ThemeProvider>
  </ReduxProvider>

);

export default App;
