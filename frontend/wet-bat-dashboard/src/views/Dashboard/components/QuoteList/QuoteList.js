/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReplayIcon from '@material-ui/icons/Replay';
import RestoreIcon from '@material-ui/icons/Restore';
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap';
import { makeStyles } from '@material-ui/core/styles';
import {
  Divider, CardHeader, IconButton, Card, CardContent,
  Table, TableBody, TableCell, TableHead, TableRow,
} from '@material-ui/core';
import * as quoteActions from '../../../../redux/actions/quoteActions';
import QuoteDetailsModal from './QuoteDetailsModal';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
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

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <RestoreIcon fontSize="large" className={classes.avatar} />
        }
        action={(
          <IconButton size="small">
            <ReplayIcon className={classes.action} />
            <ZoomOutMapIcon className={classes.action} />
          </IconButton>
        )}
        title="Pending Quotes"
        titleTypographyProps={{ variant: 'h6' }}
        className={classes.typography}
      />
      <Divider />
      <CardContent>
        <Table className={classes.table} size="small">
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
      </CardContent>
    </Card>
  );
};

export default QuoteList;
