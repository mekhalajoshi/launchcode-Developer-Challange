import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, CardHeader, Divider, Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Tours = () => {
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
          <Card
            className={classes.root}
          >
            <CardHeader
              title="Tours"
            />
            <Divider />
            <CardContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Tours;
