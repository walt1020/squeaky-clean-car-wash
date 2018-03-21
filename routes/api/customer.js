const router = require("express").Router();

const customerController = require("../../Controllers/customerController");


router.get("/", customerController.findAll)
	
router.post("/create", customerController.createCustomer);


router.get("/:id", customerController.findById)
	
router.put("/:id/update", customerController.updateCustomer)

router.delete("/:id/delete", customerController.deleteCustomer)

module.exports = router;
	