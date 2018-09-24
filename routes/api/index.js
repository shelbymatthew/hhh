const router = require("express").Router();
const hhRoutes = require("./hhs");

// Book routes
router.use("/hhs", hhRoutes);

module.exports = router;