/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import RestoreIcon from '@material-ui/icons/Restore';
import ReplayOutlinedIcon from '@material-ui/icons/ReplayOutlined';
import { Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import * as quoteActions from '../redux/actions/quoteActions';
import '../App.css';
import QuoteDetailsModal from './QuoteDetailsModal';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(50),
      height: theme.spacing(45),
    },
    fontSize: '25px',
  },
  typography: {
    marginLeft: theme.spacing(1),
    color: '#5F6CAF',
  },
}));

const QuoteList = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = (quoteId) => {
    dispatch(quoteActions.getQuoteDetails(quoteId));
    setOpen(true);
  };

  useEffect(() => {
    dispatch(quoteActions.getQuoteList());
  }, [dispatch]);

  const data = useSelector((state) => state.quotes);
  // console.log(data.quoteItems);

  return (
    <div className={classes.root}>
      <Paper elevation={2}>
        <div className="pending-card-header">
          <RestoreIcon color="primary" />
          <Typography className={classes.typography}>Pending Quotes</Typography>
          <div className="pending-card-header-right"><ReplayOutlinedIcon color="primary" /></div>
        </div>
        <Divider />
        <TableContainer />
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell align="center">ID #</TableCell>
              <TableCell align="center">NAME</TableCell>
              <TableCell align="center">DESTINATION</TableCell>
              <TableCell align="center">PRICE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.quoteItems.map(
              (row) => (
                <TableRow onClick={() => handleClickOpen(row.id)} hover key={row.id}>
                  <TableCell component="th" scope="row">
                    {' '}
                    {row.id}
                    {' '}
                  </TableCell>

                  <TableCell component="th" scope="row">
                    {' '}
                    {row.name}
                    {' '}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {' '}
                    {row.destination}
                    {' '}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {' '}
                    {row.price}
                    {' '}
                  </TableCell>
                </TableRow>
              ),
            )}
          </TableBody>
        </Table>
        <QuoteDetailsModal
          onClose={handleClose}
          quoteDetails={data.quoteDetails}
          open={open}
        />
      </Paper>
    </div>

  );
};

export default QuoteList;
