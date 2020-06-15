'use strict';
const mysql = require('mysql2/promise');

exports.postQuote = async(req, context, callback) => {
    console.log("**************** post-quotes-service ********************");
    console.log("request body"+JSON.parse(req.body));
    const event = JSON.parse(req.body);

    let connection;
    try {
     connection = await mysql.createConnection({
        host: 'launchcode-database.clh9cecxblpu.us-east-1.rds.amazonaws.com',
        user: 'admin',
        password: 'launchcode',
        database: "mydb",
    });
    } catch (e) {
    console.log(e);
    }
   

    let responseBody = "";
    let statusCode = 0;
    
    const [from] = await connection.execute("Select l.location_id	from locations l where l.location = ?",[event.from]);
    const [destination] = await connection.execute("Select l.location_id	from locations l where l.location = ?",[event.destination]);
    const [customer] =  await connection.execute("Select c.user_id from customer_contact_info c where c.name = ?",[event.name]);

    let query = "INSERT INTO quotes (quote_id, departure_date, return_date, number_of_travellers, customer_contact_info_user_id, depatrute_location, destination_location, transportation)  VALUES (?,?,?,?,?,?,?,?)";

    const values = [
        event.quoteId,
        event.departDate,
        event.returnDate,
        event.people,
        customer[0].user_id,
        from[0].location_id, 
        destination[0].location_id, 
        event.transportation
    ];

    try {
        await connection.execute(query,values);
        statusCode = '200';
    }
    catch (err) {
        console.error(err);
        responseBody = "Error posting quote";
        statusCode = 500;
    }

    // console.log(data);
    const result = {
        statusCode: statusCode,
        headers: {
            "Access-Control-Allow-Origin": "*", // Required for CORS support to work
        },
        body: JSON.stringify(responseBody)
    };

    return result;
};
