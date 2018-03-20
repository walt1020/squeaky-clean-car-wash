var mongoose = require('mongoose');

require('../all-models').toContext(global);


//------------------------
// ADD SEEDS BELOW
//------------------------


// suggested module for generating fake contextual data



// For Example

Customer.create([
  { firstName: 'andy', lastName:"grammar", phone: "12345566", home_address:"123 main street", technician:false, product_selected:"basic", special_instructions:"None man"},
  { firstName: 'Ryan', lastName:"Walters", phone: "00987665", home_address:"124 main street", technician:false, product_selected:"pro", special_instructions:"yes"},
  { firstName: 'Dean', lastName:"Walters", phone: "99827272", home_address:"125 main street", technician:false, product_selected:"premium", special_instructions:"heck yes"}
]).then(() => {
  console.log("Seed complete!")  
  mongoose.connection.close();
});


Appointment.create([
	{location: "Beverly Hills", time: Date.now(), car: {make:"toyota", model:"rav-4", color:"blue", year_made:"1986", license_plate:"123-abz"}, special_instructions:"nope not at all"}
]).then(() => {
  console.log("Seed complete!")  
  mongoose.connection.close();
}).catch(function(err) {
	console.log(err);
});

Technician.create([
  {firstName: "Ryan", lastName:"Walters", company:"Adwerx", description:"I have had the same haircut for years"},
  {firstName: "Dean", lastName:"Walters", company:"Crazy Yogurt", description:"I am hella crazy"}
]).then(() => {
  console.log("Seed complete!")  
  mongoose.connection.close();
});

// be sure to close the connection once the queries are done

