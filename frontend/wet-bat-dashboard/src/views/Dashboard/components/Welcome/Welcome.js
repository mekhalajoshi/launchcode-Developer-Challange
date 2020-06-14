/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: 'linear-gradient(to right, #5bbfba, #31aec1, #1f9ac5, #3d84bf, #5f6caf)',
    padding: '0.5rem',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: theme.shape.borderRadius,
  },
  textContainer: {
    width: '40%',

  },
  textHeding: {
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.white,
  },
  text: {
    color: theme.palette.white,
  },
  image: {
    borderRadius: theme.shape.borderRadius,
    display: 'inline',
    maxWidth: '100%',
    width: 400,
    float: 'right',
  },
}));

const Welcome = () => {
  const classes = useStyles();

  return (
    <div
      className={classes.root}
    >
      <section className={classes.textContainer}>
        <Typography gutterBottom variant="h1" className={classes.textHeding}>Welcome to your dashboard</Typography>
        <Typography variant="body1" className={classes.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </Typography>
      </section>
      <section>
        <img className={classes.image} src={`${process.env.PUBLIC_URL}/images/bannerImage.png`} alt="co-workers" />
      </section>

    </div>
  );
};

export default Welcome;
