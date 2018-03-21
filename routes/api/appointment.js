const router = require("express").Router();

const appointmentController = require("../../Controllers/appointmentController");


router.get("/", appointmentController.findAll)

	
router.post("/create", appointmentController.createAppointment);


router.get("/:id", appointmentController.findById)
	
router.put("/:id/update", function(req, res) {
	appointmentController.updateAppointment
})

router.delete("/:id/delete", function(req, res){

	appointmentController.deleteAppointment

})
module.exports = router;