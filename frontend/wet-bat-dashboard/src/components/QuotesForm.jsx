import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ReplayOutlinedIcon from '@material-ui/icons/ReplayOutlined';
import Divider from '@material-ui/core/Divider';
import { Typography, Button } from '@material-ui/core';
import FastForwardOutlinedIcon from '@material-ui/icons/FastForwardOutlined';
import TextField from '@material-ui/core/TextField';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import * as quoteActions from '../redux/actions/quoteActions';
import '../App.css';

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
  const [from, setFrom] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [people, setPeople] = useState('');
  const [transportation, setTransportation] = useState('');
  const [name, setName] = useState('');

  const handleInputChange = (e) => {
    switch (e.target.id) {
      case 'from':
        setFrom(e.target.value);
        break;
      case 'destination':
        setDestination(e.target.value);
        break;
      case 'departureDate':
        setDepartureDate(e.target.value);
        break;
      case 'returnDate':
        setReturnDate(e.target.value);
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

  const dispatch = useDispatch();
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
    dispatch(quoteActions.postQuoteApi(payload));
  };

  return (
  // <div className={classes.root}>
    <Paper className={classes.root}>
      <div className="pending-card-header">
        <FastForwardOutlinedIcon color="primary" />
        <Typography className={classes.typography}>Quick quote</Typography>
        <div className="pending-card-header-right"><ReplayOutlinedIcon color="primary" /></div>
      </div>
      <Divider />
      <form className={classes.form} autoComplete="off">
        <TextField
          id="from"
          label="FROM"
          type="text"
          variant="filled"
          InputLabelProps={{
            shrink: true,
          }}
          value={from}
          onChange={handleInputChange}
        />
        <TextField
          id="destination"
          label="DESTINATION"
          type="text"
          variant="filled"
          InputLabelProps={{
            shrink: true,
          }}
          value={destination}
          onChange={handleInputChange}
        />
        <TextField
          id="departureDate"
          label="DEPARTURE DATE"
          type="text"
          variant="filled"
          InputLabelProps={{
            shrink: true,
          }}
          value={departureDate}
          onChange={handleInputChange}
        />
        <TextField
          id="returnDate"
          label="RETURN DATE"
          type="text"
          variant="filled"
          InputLabelProps={{
            shrink: true,
          }}
          value={returnDate}
          onChange={handleInputChange}
        />
        <TextField
          id="people"
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
          id="transportation"
          label="TRANSPORTATION"
          type="text"
          variant="filled"
          InputLabelProps={{
            shrink: true,
          }}
          value={transportation}
          onChange={handleInputChange}
        />
        <TextField
          id="name"
          label="NAME"
          type="text"
          variant="filled"
          InputLabelProps={{
            shrink: true,
          }}
          value={name}
          onChange={handleInputChange}
        />
        <Button onClick={handleFormSubmit}>Create a quote</Button>
      </form>

    </Paper>
  // </div>
  );
};

export default QuotesForm;
