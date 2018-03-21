const Customer = require("../models/Customer");


module.exports = {
	
	findAll: function(req, res) {
		 Customer.find({})
		.sort({"lastName": -1})
		.then(dbModal => res.json(dbModal))
		.catch(err => res.status(422).json(err))
	},

	findById: function(res, res) {
		 Customer.findById(req.params.id)
		.then(dbModal => res.json(dbModal))
		.catch(err => res.status(422).json(err))
	},


	createCustomer: function(req, res) {
		console.log("test");
		 Customer.create(req.body)
		.then(dbModel => {
			console.log("success")
			res.json(req.body);
		})
		.catch(err => res.status(422).json(err))  
	},

	updateCustomer: function(req, res) {
		 Customer.findOneAndUpdate({_id: req.params.id}, req.body)
		.then(dbModel => res.json(dbModel))
		.catch(err => res.status(422).json(err)) 
	},

	deleteCustomer: function (req, res) {
		 Customer.findOneAndRemove(req.params.id)
		.then(dbModel => {
			console.log('success');
			res.send("success");
		})
		.then(dbModel => res.json(dbModel))
		.catch(err => res.status(422).json(err)) 
	}
}