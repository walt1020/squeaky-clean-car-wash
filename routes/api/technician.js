const router = require("express").Router();

const technicianController = require("../../Controllers/technicianController");

router.get("/", technicianController.findAll)
	
router.post("/create", function(req, res) {
		technicianController.createCustomer;
	});


router.get("/:id", technicianController.findById)
	
router.put("/:id/update", function(req, res) {
	technicianController.updateCustomer
})

router.delete("/:id/delete", function(req, res){

	technicianController.deleteCustomer

})

module.exports = router;