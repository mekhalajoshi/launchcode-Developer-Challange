/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import {
  QuotesForm,
  QuoteList,
  NewLeads,
  Welcome,
  Revenue,
  PotentialRevenue,
  CloseRatios,
} from './components';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
  },
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={4}
      >
        <Grid
          item
          lg={12}
          md={12}
          xl={12}
          xs={12}
        >
          <Welcome />
        </Grid>
        <Grid
          item
          lg={4}
          md={6}
          xl={4}
          xs={12}
        >
          <QuotesForm />
        </Grid>
        <Grid
          item
          lg={5}
          md={6}
          xl={4}
          xs={12}
        >
          <QuoteList />
        </Grid>
        <Grid
          item
          lg={3}
          md={6}
          xl={4}
          xs={12}
        >
          <NewLeads />
        </Grid>

        <Grid
          item
          lg={4}
          md={6}
          xl={4}
          xs={12}
        >
          <Revenue />
        </Grid>
        <Grid
          item
          lg={5}
          md={6}
          xl={4}
          xs={12}
        >
          <PotentialRevenue />
        </Grid>
        <Grid
          item
          lg={3}
          md={6}
          xl={4}
          xs={12}
        >
          <CloseRatios />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
