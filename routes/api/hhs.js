const router = require("express").Router();
const hhlistController = require("../../controllers/hhlistController");

// Matches with "/api/hhlist"
router.route("/")
  .get(hhlistController.findAll)
  .post(hhlistController.create);

// Matches with "/api/hhlist/:id"
router
  .route("/:id")
  .get(hhlistController.findById)
  .put(hhlistController.update)
  .delete(hhlistController.remove);

module.exports = router;