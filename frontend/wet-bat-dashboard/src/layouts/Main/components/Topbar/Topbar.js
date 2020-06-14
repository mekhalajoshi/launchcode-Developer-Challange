/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  AppBar, Toolbar, Badge, IconButton,
} from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import MessageIcon from '@material-ui/icons/Message';
import InputIcon from '@material-ui/icons/Input';
import SettingsIcon from '@material-ui/icons/Settings';

import InputBase from '@material-ui/core/InputBase';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import DashboardIcon from '@material-ui/icons/Dashboard';

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: 'none',
    backgroundColor: theme.palette.brand.blue,
  },
  flexGrow: {
    flexGrow: 2,
  },
  navButton: {
    marginLeft: theme.spacing(1),
  },
  appIcon: {
    marginRight: 20,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.common.white,
    flexGrow: 1,
    marginRight: 50,
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.black,
  },
  inputRoot: {
    color: theme.white,
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    width: '100%',
  },
}));

const Topbar = (props) => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [notifications] = useState([]);

  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Toolbar>
        <DashboardIcon fontSize="large" className={classes.appIcon} />
        <RouterLink to="/">
          <img
            alt="Logo"
            src={`${process.env.PUBLIC_URL}/images/logos/wetbat-logo.png`}
            width="150px"
            height="50px"
          />
        </RouterLink>
        
Hello
        <div className={classes.flexGrow} />
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
        <IconButton color="inherit">
          <Badge
            badgeContent={notifications.length}
            color="primary"
            variant="dot"
          >
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton
          className={classes.navButton}
          color="inherit"
        >
          <MessageIcon />
        </IconButton>
        <IconButton
          className={classes.navButton}
          color="inherit"
        >
          <SettingsIcon />
        </IconButton>
        <IconButton
          className={classes.navButton}
          color="inherit"
        >
          <InputIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
};

export default Topbar;
