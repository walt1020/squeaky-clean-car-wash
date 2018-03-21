const Technician = require("../models/Technician");

module.exports = {
	
	findAll: function(req, res) {
		 Technician.find({})
		.sort({"firstName": 1})
		.then(dbModal => res.json(dbModal))
		.catch(err => res.status(422).json(err))
	},

	findById: function(req, res) {
		 Technician.findById(req.params.id)
		.then(dbModal => res.json(dbModal))
		.catch(err => res.status(422).json(err))
	},


	createTechnician: function(req, res) {
		 console.log(req.body)
		 Technician.create(req.body)
		.then(dbModel => {
			console.log("success")
			res.json(req.body);
		})
		.catch(err => res.status(422).json(err)) 
	},

	updateTechnician: function(req, res) {
		 Technician.findOneAndUpdate({_id: req.params.id}, req.body)
		.then(dbModel => res.json(dbModel))
		.catch(err => res.status(422).json(err)) 
	},

	deleteTechnician: function (req, res) {
		 Technician.findOneAndRemove(req.params.id)
		.then(dbModel => {
			console.log('success');
			res.send("success");
		})
		.catch(err => {
			console.log(err);
			res.status(422).json(err)
		}) 
	}
}