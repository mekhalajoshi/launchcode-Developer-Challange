/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { handleError, handleResponse } from './apiUtils';

export async function getData() {
  // console.log('-------WebApi GET QUOTES--------');
  const baseUrl = 'https://pmohxz5xki.execute-api.us-east-1.amazonaws.com/prod/quote/';

  const url = `${baseUrl}`;

  return axios.get(url)
    .then(handleResponse)
    .catch(handleError);
}
