'use strict';
const mysql = require('mysql2/promise');
const getAllSql = require ('./getAllSql');
exports.getList = async(event, context, callback) => {
  console.log("**************** getAll-quotes-service ********************");
  const connection = await mysql.createConnection({
    host: 'launchcode-database.clh9cecxblpu.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'launchcode',
    database: "mydb",
  });

  let responseBody = "";
  let statusCode = 0;
  let data;
  let query = getAllSql.getAllSql;

  try {
    const [rows] = await connection.execute(query);
    responseBody = {
      quoteItems: rows,
    };
    statusCode = '200';
  }
  catch (err) {
    console.error(err);
    responseBody = "Error retriving list";
    statusCode = 500;
  }

  console.log(data);
  const result = {
    statusCode: statusCode,
    headers: {
      "Access-Control-Allow-Origin": "*", // Required for CORS support to work
    },
    body: JSON.stringify(responseBody)
  };

  return result;
};
