/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap';
import FastForwardOutlinedIcon from '@material-ui/icons/FastForwardOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { makeStyles } from '@material-ui/core/styles';
import MuiAlert from '@material-ui/lab/Alert';
import {
  Grid, Snackbar, MenuItem, TextField, Divider, CardHeader, IconButton, Button, Card, CardContent,
} from '@material-ui/core';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import * as quoteActions from '../../../../redux/actions/quoteActions';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
  },
  action: {
    color: theme.palette.icon,
    marginTop: 12,
  },
  avatar: {
    color: theme.palette.brand.actionGreen,
  },
  typography: {
    color: theme.palette.brand.blue,
  },
  dropbox: {
    width: '100%',
  },
  createQuote: {
    width: '100%',
    height: '100%',
    borderRadius: '30px',
    backgroundColor: theme.palette.brand.actionGreen,
    color: theme.palette.white,
    '&:hover': {
      backgroundColor: theme.palette.brand.blue,
    },
  },
}));

const QuotesForm = () => {
  const classes = useStyles();
  const data = useSelector((state) => state.quotes);
  const dispatch = useDispatch();

  const [from, setFrom] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());
  const [people, setPeople] = useState('');
  const [transportation, setTransportation] = useState('');
  const [name, setName] = useState('');

  const handleInputChange = (e) => {
    switch (e.target.name) {
      case 'from':
        setFrom(e.target.value);
        break;
      case 'destination':
        setDestination(e.target.value);
        break;
      case 'people':
        setPeople(e.target.value);
        break;
      case 'transportation':
        setTransportation(e.target.value);
        break;
      case 'name':
        setName(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleDepartureDateChange = (date) => {
    setDepartureDate(date);
  };

  const handleReturnDateChange = (date) => {
    setReturnDate(date);
  };

  // Snackbar
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    dispatch(quoteActions.clearApiResponse());

    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const clearForm = () => {
    setName('');
    setTransportation('');
    setPeople('');
    setReturnDate(new Date());
    setDepartureDate(new Date());
    setDestination('');
    setFrom('');
  };

  const handleFormSubmit = () => {
    // erreor handelings
    const payload = {
      quoteId: nanoid(6),
      from,
      destination,
      departDate: departureDate,
      returnDate,
      people,
      transportation,
      name,
    };
    dispatch(quoteActions.postQuoteApi(payload)).then(() => setOpen(true));
    clearForm();
  };

  const names = [
    {
      value: 'Alice',
      label: 'Alice',
    },
    {
      value: 'Bob',
      label: 'Bob',
    },
    {
      value: 'Charlie',
      label: 'Charlie',
    },
    {
      value: 'Harry Potter',
      label: 'Harry Potter',
    },
    {
      value: 'Ron Weasley',
      label: 'Ron Weasley',
    },
    {
      value: 'Luke  Skywalker',
      label: 'Luke Skywalker',
    },

  ];

  const transportationMap = [
    {
      value: 'rental car',
      label: 'Rental car',
    },
    {
      value: 'taxi',
      label: 'Taxi',
    },
    {
      value: 'null',
      label: 'None',
    },
  ];

  const locationsMap = [
    {
      value: 'London',
      label: 'London',
    },
    {
      value: 'Paris',
      label: 'Paris',
    },
    {
      value: 'New York',
      label: 'New York',
    }, {
      value: 'Toronto',
      label: 'Toronto',
    }, {
      value: 'Mumbai',
      label: 'Mumbai',
    }, {
      value: 'Calgary',
      label: 'Calgary',
    },
  ];
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <FastForwardOutlinedIcon fontSize="large" className={classes.avatar} />
        }
        action={(
          <IconButton size="small" className={classes.action}>
            <ZoomOutMapIcon />
          </IconButton>
        )}
        title="Quick Quotes"
        titleTypographyProps={{ variant: 'h6' }}
        className={classes.typography}
      />
      <Divider />
      <CardContent>
        <form className={classes.form} autoComplete="off">
          <Grid
            container
            spacing={2}
          >
            <Grid
              item
              lg={6}
              md={6}
              xl={6}
              xs={6}
            >
              <TextField
                required
                id="from"
                name="from"
                label="FROM"
                type="text"
                select
                variant="filled"
                value={from}
                onChange={handleInputChange}
                className={classes.dropbox}
                InputLabelProps={{
                  shrink: true,
                }}
              >
                {locationsMap.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid
              item
              lg={6}
              md={6}
              xl={6}
              xs={6}
            >
              <TextField
                required
                name="destination"
                id="destination"
                label="DESTINATION"
                type="text"
                select
                variant="filled"
                value={destination}
                onChange={handleInputChange}
                className={classes.dropbox}
                InputLabelProps={{
                  shrink: true,
                }}
              >
                {locationsMap.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid
              item
              lg={6}
              md={6}
              xl={6}
              xs={6}
            >
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  margin="normal"
                  id="date-picker-dialog"
                  label="Date picker dialog"
                  format="yyyy-MM-dd"
                  value={departureDate}
                  inputVariant="filled"
                  onChange={handleDepartureDateChange}
                  disablePast="true"
                  className={classes.dropbox}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid
              item
              lg={6}
              md={6}
              xl={6}
              xs={6}
            >
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  margin="normal"
                  id="date-picker-dialog"
                  label="Date picker dialog"
                  format="yyyy-MM-dd"
                  disablePast="true"
                  value={returnDate}
                  inputVariant="filled"
                  onChange={handleReturnDateChange}
                  className={classes.dropbox}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              </MuiPickersUtilsProvider>
            </Grid>

            <Grid
              item
              lg={6}
              md={6}
              xl={6}
              xs={6}
            >
              <TextField
                required
                id="people"
                name="people"
                label="PEOPLE"
                type="text"
                variant="filled"
                className={classes.dropbox}
                InputLabelProps={{
                  shrink: true,
                }}
                value={people}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid
              item
              lg={6}
              md={6}
              xl={6}
              xs={6}
            >
              <TextField
                required
                id="transportation"
                label="TRANSPORTATION"
                name="transportation"
                type="text"
                select
                variant="filled"
                value={transportation}
                onChange={handleInputChange}
                className={classes.dropbox}
                InputLabelProps={{
                  shrink: true,
                }}
              >
                {transportationMap.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid
              item
              lg={6}
              md={6}
              xl={6}
              xs={6}
            >
              <TextField
                required
                id="name"
                label="NAME"
                name="name"
                type="text"
                select
                variant="filled"
                value={name}
                onChange={handleInputChange}
                className={classes.dropbox}
                InputLabelProps={{
                  shrink: true,
                }}
              >
                {names.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid
              item
              lg={6}
              md={6}
              xl={6}
              xs={6}
            >
              <Button
                variant="contained"
                className={classes.createQuote}
                onClick={handleFormSubmit}
              >
                Create a quote
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={data.apiResponseStatus}>
          {(data.apiResponseStatus === 'success') ? 'This is a success message!' : 'Oops! Something went wrong'}
        </Alert>
      </Snackbar>
    </Card>
  );
};

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default QuotesForm;
