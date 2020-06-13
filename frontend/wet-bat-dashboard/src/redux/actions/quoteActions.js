/* eslint-disable func-names */
/* eslint-disable import/prefer-default-export */
import * as types from './actionTypes';
import * as dataApi from '../../api/dataAPIUtil';

export function getQuotes() {
  return { type: types.GET_QUOTES };
}
export function getQuoteListSuccess(data) {
  return { type: types.GET_QUOTE_LIST_SUCCESS, data };
}
export function getDetails() {
  return { type: types.GET_QUOTE_DETAILS };
}
export function getQuoteDetailsSuccess(data) {
  return { type: types.GET_QUOTE_DETAILS_SUCCESS, data };
}
export function postQuote(payload) {
  return { type: types.POST_QUOTE, payload };
}
// export function postQuoteSuccess(payload) {
//   return { type: types.POST_QUOTE_SUCCESS, payload };
// }

export function getQuoteList() {
  return function (dispatch) {
    return dataApi.getData().then((data) => {
      dispatch(getQuoteListSuccess(data));
    }).catch((error) => {
      // TODO: handle Error loadDataError
      throw error;
    });
  };
}

export function getQuoteDetails(quoteId) {
  return function (dispatch) {
    dispatch(getDetails());
    return dataApi.getDetails(quoteId).then((data) => {
      dispatch(getQuoteDetailsSuccess(data));
    }).catch((error) => {
      // TODO: handle Error loadDataError
      throw error;
    });
  };
}

export function postQuoteApi(payload) {
  return function (dispatch) {
    return dataApi.postApi(payload).then(() => {
      dispatch(getQuoteList());
    }).catch((error) => {
      // TODO: handle Error loadDataError
      throw error;
    });
  };
}
