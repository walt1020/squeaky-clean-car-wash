import axios from "axios";

export default {

	userLogin: function(userBody) {
		return axios.post("/api/auth/login", userBody);
	},

	userLogout: function(userBody) {
		return axios.post("/api/auth/logout", userBody);
	},

	userRegister: function(userBody) {
		return axios.post("/api/auth/register", userBody);
	},


	getCustomers: function() {
		return axios.get("/api/customers")
	},

	getCertainCustomer: function(id) {
		return axios.get("/api/customers/" + id);
	},

	createCustomer: function(customerData) {
		return axios.post("/api/customers/create", customerData);
	},

	updateCustomer: function(id) {
		return axios.put("/api/customers/update/" + id);
	},

	deleteCustomer: function(id) {
		return axios.delete("/api/customers/delete/" + id);
	},




	getAppointments: function() {
		return axios.get("/api/appointments");
	},

	getCertainAppointment: function(id) {
		return axios.get("/api/appointments/" + id);
	},

	createAppointment: function(appointmentData) {
		return axios.post("/api/appointments/create", appointmentData);
	},

	updateAppointment: function(id) {
		return axios.put("/api/appointments/update/" + id);
	},

	deleteAppointment: function(id) {
		return axios.delete("/api/appointments/delete/" + id);
	},




	getTechnicians: function() {
		return axios.get("/api/appointments");
	},

	getCertainTechnician: function(id) {
		return axios.get("/api/technicians/" + id);
	},
	createTechnician: function(technicianData) {
		return axios.post("/api/technicians/create", technicianData);
	},
	updateTechnician: function(id) {
		return axios.get("/api/technicians/update" + id);
	},
	deleteTechnician: function(id) {
		return axios.get("/api/technicians/delete" + id);
	}}


	
