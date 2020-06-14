import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

import { Sidebar, Topbar } from './components';

const useStyles = makeStyles(() => ({
  root: {
    paddingTop: 64,
    height: '100%',
    paddingLeft: 165

  },
  content: {
    height: '100%'
  }
}));

const Main = props => {
  const { children } = props;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Topbar />
      <Sidebar />
      <main className={classes.content}>
        {children}
      </main>
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node
};

export default Main;
