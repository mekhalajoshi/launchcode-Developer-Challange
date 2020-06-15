/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Typography, Divider } from '@material-ui/core';

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

const useStyles = makeStyles((theme) => ({
  detailsHeading: {
    display: 'inline-block',
    fontWeight: theme.typography.fontWeightBold,
  },
}));

const QuoteDetailsModal = (props) => {
  const {
    onClose, open, quoteDetails,
  } = props;

  const classes = useStyles();

  return (

    <Dialog
      fullWidth="true"
      maxWidth="sm"
      onClose={onClose}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <DialogTitle id="customized-dialog-title" onClose={onClose}>
        Quote ID:
        {' '}
        {quoteDetails.quote_id}
      </DialogTitle>
      <DialogContent dividers>

        <Typography variant="h6">
          Contact Details:
        </Typography>
        <Divider />
        <Typography className={classes.detailsHeading} variant="body1">
          Name:
        </Typography>
        {' '}
        {quoteDetails.name}
        <br />
        <Typography className={classes.detailsHeading} variant="body1">
          Phone Number:
        </Typography>
        {' '}
        {quoteDetails.phone}
        <br />
        <Typography className={classes.detailsHeading} variant="body1">
          Address:
        </Typography>
        {' '}
        {quoteDetails.address}
        <br />
        <Typography className={classes.detailsHeading} variant="body1">
          Email:
        </Typography>
        {' '}
        {quoteDetails.email}
        <br />
        <br />
        <Typography variant="h6">
          Additional Services:
        </Typography>
        <Divider />

        <Typography className={classes.detailsHeading} variant="body1">
          Transportation:
        </Typography>
        {' '}
        {quoteDetails.transportation}
        <br />
        <br />
        <Typography variant="h6">
          Travel Details:
        </Typography>
        <Divider />
        <Typography className={classes.detailsHeading} variant="body1">
          Depatrute Location:
        </Typography>
        {' '}
        {quoteDetails.depatrute_location}
        <br />
        <Typography className={classes.detailsHeading} variant="body1">
          Destination Location:
        </Typography>
        {' '}
        {quoteDetails.destination_location}
        <br />
        <Typography className={classes.detailsHeading} variant="body1">
          Departure Date:
        </Typography>
        {' '}
        {quoteDetails.departure_date}
        <br />
        <Typography className={classes.detailsHeading} variant="body1">
          Return Date:
        </Typography>
        {' '}
        {quoteDetails.return_date}
        <br />
        <Typography className={classes.detailsHeading} variant="body1">
          Number of Travellers:
        </Typography>
        {' '}
        {quoteDetails.number_of_travellers}
        <br />
        <br />
        <Typography variant="h6">
          Total:
        </Typography>
        <Divider />
        <Typography className={classes.detailsHeading} variant="body1">
          Price:
        </Typography>
        {' '}
        {quoteDetails.price}
        <br />
        <br />

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
