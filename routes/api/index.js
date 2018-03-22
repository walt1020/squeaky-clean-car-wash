const router = require("express").Router();
const customerRoutes = require("./customer");
const appointmentRoutes = require("./appointment");
const technicianRoutes = require("./technician");
const authRoutes = require("./auth");



router.use("/customers", customerRoutes);
router.use("/appointments", appointmentRoutes);
router.use("/technicians", technicianRoutes);
router.use("/auth", authRoutes);

module.exports = router;