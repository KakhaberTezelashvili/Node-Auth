const express = require("express");
const router = express.Router();
const controller = require("../controllers/usersController");

router
  .route("/:id")
  .get(controller.getUserById)
  .delete(controller.deleteUser)
  .put(controller.updateUser);

router.route("/").get(controller.getAllUsers).post(controller.createUser);

module.exports = router;
