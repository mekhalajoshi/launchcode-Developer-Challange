import * as types from '../actions/actionTypes';
import data from '../../initialData';

const quotesReducer = (state = data, action) => {
  switch (action.type) {
    case types.GET_QUOTE_LIST_SUCCESS:
      return {
        ...state,
        ...action.data,
        apiResponseStatus: 'success',
      };
    case types.GET_QUOTE_DETAILS:
      return { ...state, isLoading: true };
    case types.GET_QUOTE_DETAILS_SUCCESS:
      return {
        ...state,
        ...action.data,
        isLoading: false,
        apiResponseStatus: 'success',
      };
    case types.CLEAR_API_RESPONSE_STATUS:
      return { ...state, apiResponseStatus: '' };
    default:
      return state;
  }
};
export default quotesReducer;
