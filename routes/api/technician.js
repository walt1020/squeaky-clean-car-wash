const router = require("express").Router();

const technicianController = require("../../Controllers/technicianController");

router.get("/", technicianController.findAll)
	
router.post("/create", technicianController.createTechnician);

router.get("/:id", technicianController.findById)
	
router.put("/update/:id", technicianController.updateTechnician);

router.delete("/delete/:id", technicianController.deleteTechnician);

module.exports = router;