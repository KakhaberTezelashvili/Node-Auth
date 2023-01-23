const express = require("express");
const router = express.Router();
const controller = require("../controllers/employeeController");

router
  .route("/:id")
  .get(controller.getEmployeeById)
  .delete(controller.deleteEmployee)
  .put(controller.updateEmployee);

router
  .route("/")
  .get(controller.getAllEmployees)
  .post(controller.createEmployee);

module.exports = router;
