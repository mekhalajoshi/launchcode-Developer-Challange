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
