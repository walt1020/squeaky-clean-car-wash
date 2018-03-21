const router = require("express").Router();

const customerController = require("../../Controllers/customerController");


router.get("/", customerController.findAll)
	
router.post("/create", function(req, res) {
		customerController.createCustomer;
	});


router.get("/:id", customerController.findById)
	
router.put("/:id/update", function(req, res) {
	customerController.updateCustomer
})

router.delete("/:id/delete", function(req, res){

	customerController.deleteCustomer

})

module.exports = router;
	