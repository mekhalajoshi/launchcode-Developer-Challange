/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  IconButton,
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ReplayIcon from '@material-ui/icons/Replay';
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap';
import mockData from './data';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
  },
  content: {
    padding: 0,
  },
  image: {
    height: 48,
    width: 48,
  },
  action: {
    color: theme.palette.icon,
    marginTop: 12,
    marginRight: 10,
  },
  avatar: {
    color: theme.palette.brand.actionGreen,
  },
  typography: {
    color: theme.palette.brand.blue,
  },
}));

const NewLeads = (props) => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [leads] = useState(mockData);

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        avatar={
          <MailOutlineIcon fontSize="large" className={classes.avatar} />
        }
        action={(
          <IconButton size="small">
            <ReplayIcon className={classes.action} />
            <ZoomOutMapIcon className={classes.action} />
          </IconButton>
        )}
        titleTypographyProps={{ variant: 'h6' }}
        className={classes.typography}
        subtitle={`${leads.length} in total`}
        title="New Leads"
      />
      <Divider />
      <CardContent className={classes.content}>
        <List>
          {leads.map((lead, i) => (
            <ListItem
              divider={i < leads.length - 1}
              key={lead.id}
            >
              <ListItemAvatar>
                <img
                  alt="Avatar"
                  className={classes.image}
                  // src={lead.imageUrl}
                  src={`${process.env.PUBLIC_URL}${lead.imageUrl}`}
                />
              </ListItemAvatar>
              <ListItemText
                primary={lead.name}
                secondary={lead.msg}
              />
              <IconButton
                edge="end"
                size="small"
              >
                <MoreVertIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

NewLeads.propTypes = {
  className: PropTypes.string,
};

export default NewLeads;
