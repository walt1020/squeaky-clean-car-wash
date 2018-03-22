const router = require("express").Router();

const appointmentController = require("../../Controllers/appointmentController");


router.get("/", appointmentController.findAll)

	
router.post("/create", appointmentController.createAppointment);


router.get("/:id", appointmentController.findById)
	
router.put("/update/:id", appointmentController.updateAppointment)

router.delete("/delete/:id", appointmentController.deleteAppointment)

module.exports = router;