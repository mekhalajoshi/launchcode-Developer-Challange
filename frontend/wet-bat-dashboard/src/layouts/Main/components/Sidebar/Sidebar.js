import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Divider, Drawer } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ListAltIcon from '@material-ui/icons/ListAlt';
import SendIcon from '@material-ui/icons/Send';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import PollIcon from '@material-ui/icons/Poll';
import PeopleIcon from '@material-ui/icons/People';
import BlurCircularIcon from '@material-ui/icons/BlurCircular';

import { SidebarNav, License } from './components';

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 165,
    marginTop: 64,
    height: 'calc(100% - 64px)'
  },
  root: {
    backgroundColor: theme.palette.brand.lightbrown,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(2)
  },
  divider: {
    margin: theme.spacing(2, 0),
    backgroundColor: theme.palette.divider,
  },
  nav: {
    marginBottom: theme.spacing(2)
  }
}));

const Sidebar = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const primaryPages = [
    {
      title: 'Dashboard',
      href: '/dashboard',
      icon: <HomeIcon />
    },
    {
      title: 'Quotes',
      href: '/quotes',
      icon: <AttachMoneyIcon />
    },
    {
      title: 'Leads',
      href: '/leads',
      icon: <ListAltIcon />
    },
    {
      title: 'Tours',
      href: '/tours',
      icon: <SendIcon />
    }
  ];

  const secondaryPages = [
    {
      title: 'Invoices',
      href: '/invoices',
      icon: <InsertDriveFileIcon />
    },
    {
      title: 'Analytics',
      href: '/analytics',
      icon: <PollIcon />
    },
    {
      title: 'Team',
      href: '/team',
      icon: <PeopleIcon />
    },
    {
      title: 'Admin',
      href: '/admin',
      icon: <SettingsIcon />
    },
    {
      title: 'Support',
      href: '/support',
      icon: <BlurCircularIcon />
    }
  ];

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      variant="persistent"
      open="true"
    >
      <div
        {...rest}
        className={clsx(classes.root, className)}
      >
        <SidebarNav
          className={classes.nav}
          pages={primaryPages}
        />
        <Divider className={classes.divider} />
        <SidebarNav
          className={classes.nav}
          pages={secondaryPages}
        />
        <Divider className={classes.divider} />
        <License />
      </div>
    </Drawer>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
};

export default Sidebar;
