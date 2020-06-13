import * as types from '../actions/actionTypes';
import data from '../../initialData';

const quotesReducer = (state = data, action) => {
  switch (action.type) {
    case types.GET_QUOTE_LIST_SUCCESS:
      return { ...state, ...action.data };
    default:
      return state;
  }
};
export default quotesReducer;
