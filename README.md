# Wet Bat Travel

Demo - https://mekhalajoshi.github.io/launchcode-Developer-Challange/

## Technologies
Project is created with:
* ReactJs
* Material UI React 
* AWS API Gateway
* AWS Lambda
* AWS RDS
* MySQL


## How it Works
The front-end web application is built with React. It uses React Redux for state management and Material UI web components.

The back-end is built on AWS's serverless architectures. It uses the following AWS services; AWS RDS, AWS Lambda, AWS API Gateway. 
          <p align="center">
            <img src="frontend/wet-bat-dashboard/public/AWS serverless architecture.png" margin="auto">
          </p>

The Serverless Architecture uses AWS Lambda in conjunction with Amazon API Gateway, Amazon RDS(MySQL), to build the backend of the application.
I have also included the .yaml document for the API and the Node.js files for the Lambda functions.

## Database Schema
The following is the databse schema of the Quotes-Service
            <p align="center">
              <img src="frontend/wet-bat-dashboard/public/databaseSchema.png" margin="auto">
            </p>


Assumptions:
* All customers requesting Quotes are already registered. --TODO: if the customer is not registered, add a detailed form to add customer contact information.
* Location fields are pre-populated with city names. --TODO: Pre populate the front end text field and the backend database tables using Airport location api's
* “Transportation during travels” field is pre-populated.
* Price of the quote is determined by some backend service that populates the price in quotes table, travel invoices table and transportation invoices table (if any). --TODO: additional services like hotel invoices can be added with minimal changes to the database schema.
* pick-up / drop-off locations in transportation invoices are the same as in the quote table invoices are the same as 
* All invoices (travel and transportation) are assumed to have the same schema.
* A single quote may have multiple travel invoices (multi-city travel).



## Setup
To run this project, install it locally using npm and navigate to the directory:

```
$ npm install
$ npm start
```
Then navigate to "https://localhost:3000" to view app on the browser.
