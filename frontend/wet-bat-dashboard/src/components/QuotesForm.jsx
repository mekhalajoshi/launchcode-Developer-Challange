/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ReplayOutlinedIcon from '@material-ui/icons/ReplayOutlined';
import Divider from '@material-ui/core/Divider';
import { Typography, Button } from '@material-ui/core';
import FastForwardOutlinedIcon from '@material-ui/icons/FastForwardOutlined';
import TextField from '@material-ui/core/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import '../App.css';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import MenuItem from '@material-ui/core/MenuItem';
import * as quoteActions from '../redux/actions/quoteActions';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '400px',
  },
  typography: {
    marginLeft: theme.spacing(1),
    color: '#5F6CAF',
  },
  form: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '20ch',
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
    <Paper className={classes.root}>
      <div className="pending-card-header">
        <FastForwardOutlinedIcon color="primary" />
        <Typography className={classes.typography}>Quick quote</Typography>
        <div className="pending-card-header-right"><ReplayOutlinedIcon color="primary" /></div>
      </div>
      <Divider />
      <form className={classes.form} autoComplete="off">
        <div className="quote-form-container">

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
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
            <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog"
              label="Date picker dialog"
              format="yyyy-MM-dd"
              disablePast="true"
              value={returnDate}
              inputVariant="filled"
              onChange={handleReturnDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </MuiPickersUtilsProvider>

          <TextField
            required
            id="people"
            name="people"
            label="PEOPLE"
            type="text"
            variant="filled"
            InputLabelProps={{
              shrink: true,
            }}
            value={people}
            onChange={handleInputChange}
          />
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

          <Button variant="contained" color="primary" onClick={handleFormSubmit}>Create a quote</Button>
        </div>
      </form>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={data.apiResponseStatus}>
          {(data.apiResponseStatus === 'success') ? 'This is a success message!' : 'Oops! Something went wrong'}
        </Alert>
      </Snackbar>
    </Paper>
  );
};

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default QuotesForm;
