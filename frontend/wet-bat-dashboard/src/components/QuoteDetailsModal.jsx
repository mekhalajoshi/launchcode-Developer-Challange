/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  tablecell: {
    fontSize: '40pt',
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const {
    children, classes, onClose, ...other
  } = props;

  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});
const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const QuoteDetailsModal = (props) => {
  const {
    onClose, open, quoteDetails,
  } = props;

  return (

    <Dialog onClose={onClose} aria-labelledby="customized-dialog-title" open={open}>
      <DialogTitle id="customized-dialog-title" onClose={onClose}>
        Quote Details
      </DialogTitle>
      <DialogContent dividers>

        <Typography gutterBottom>
          Quoteid:
          {' '}
          {quoteDetails.quote_id}
          <br />
          Name:
          {' '}
          {quoteDetails.name}
          <br />
          Phone Number:
          {' '}
          {quoteDetails.phone}
          <br />
          Address:
          {' '}
          {quoteDetails.address}
          <br />
          Email:
          {' '}
          {quoteDetails.email}
          <br />
          Transportation
          {' '}
          {quoteDetails.transportation}
          <br />
          Depatrute Location:
          {' '}
          {' '}
          {quoteDetails.depatrute_location}
          <br />
          Destination Location:
          {' '}
          {' '}
          {quoteDetails.destination_location}
          <br />
          Departure Date:
          {' '}
          {quoteDetails.departure_date}
          <br />
          Return Date
          {' '}
          {quoteDetails.return_date}
          <br />
          Number of Travellers:
          {' '}
          {quoteDetails.number_of_travellers}
          <br />
          Price:
          {' '}
          {quoteDetails.price}
          <br />
        </Typography>

      </DialogContent>
    </Dialog>
  );
};

export default QuoteDetailsModal;

QuoteDetailsModal.propTypes = {
  quoteDetails: PropTypes.objectOf(PropTypes.any).isRequired,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
