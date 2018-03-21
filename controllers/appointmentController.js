const Appointment = require("../models/Appointment");


module.exports = {
	
	findAll: function(req, res) {
		 Appointment.find({})
		.sort({"createdAt": 1})
		.then(dbModal => res.json(dbModal))
		.catch(err => res.status(422).json(err))
	},

	findById: function(req, res) {
		 Appointment.findById(req.params.id)
		.then(dbModal => res.json(dbModal))
		.catch(err => res.status(422).json(err))
	},


	createAppointment: function(req, res) {
		 Appointment.create(req.body)
		.then(dbModel => {
			console.log("success")
			res.json(req.body);
		})
		.catch(err => res.status(422).json(err)) 
	},

	updateAppointment: function(req, res) {
		 Appointment.findOneAndUpdate({_id: req.params.id}, req.body)
		.then(dbModel => res.json(dbModel))
		.catch(err => res.status(422).json(err)) 
	},

	deleteAppointment: function (req, res) {
		 Appointment.findOneAndRemove(req.params.id)
		.then(dbModel => {
			console.log('success');
			res.send("success");
		})
		.then(dbModel => res.json(dbModel))
		.catch(err => res.status(422).json(err)) 
	}
}