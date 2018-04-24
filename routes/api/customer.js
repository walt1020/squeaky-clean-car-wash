const router = require("express").Router();

const customerController = require("../../controllers/customerController");


router.get("/", customerController.findAll)
	
router.post("/create", customerController.createCustomer);


router.get("/:id", customerController.findById)
	
router.put("/update/:id", customerController.updateCustomer)

router.delete("/delete/:id", customerController.deleteCustomer)

module.exports = router;
	