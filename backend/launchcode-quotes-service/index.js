'use strict';
const getItems = require('./getAll');
const postQuote = require('./postQuote');
const getQuote = require('./getQuote');

exports.handler = async(event) => {
  console.log("**************** launchcode-quotes-service ********************");
  console.log(event);
  let response = {
    statusCode: 0,
    body: ""
  };

  try {
    if (event.pathParameters === null) {
      if (event.httpMethod === "GET") {
        response = await getItems.getList();
      }
      else if (event.httpMethod === "POST") {
        response = await postQuote.postQuote(event);
      }
      else {
        console.log("Error");
      }
      } else {
        // If event.pathParameters !== null
        if (event.httpMethod==="GET") {
          response = await getQuote.getQuote(event.pathParameters);
        } else {
          console.log("INDEX.js catch------ Internal Server Error");
        }
    }
  }
  catch (error) {
    response = {
      statusCode: 500,
      responseBody: "INDEX.js ------ Internal Server Error"
    };
  }

  return response;
};
