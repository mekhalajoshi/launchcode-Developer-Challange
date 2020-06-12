
exports.getQuoteSql = "Select q.quote_id,  c.name, c.phone, c.address, c.email, q.transportation, l2.location as depatrute_location, l1.location as destination_location, q.departure_date, q.return_date, q.number_of_travellers, q.price	from (SELECT * from quotes quote  where quote_id = ?) as q    INNER JOIN locations l1		on l1.location_id = q.destination_location	INNER JOIN locations l2		on l2.location_id = q.depatrute_location	INNER JOIN customer_contact_info as c	on c.user_id = q.customer_contact_info_user_id";

