var express = require("express");
var router = express.Router();

const taskController = require("../controllers/v1/task");
const validationMiddleware = require("../middlewears/validationMW");
const { createTaskSchema } = require("../joi_schemas/task");

router.get("/list-tasks", taskController.getAllTasks);

router.post(
  "/create-task",
  validationMiddleware(createTaskSchema),
  taskController.createTask
);

router.delete("/bulk-delete-task", taskController.bulkdDeletTasks);

module.exports = router;
