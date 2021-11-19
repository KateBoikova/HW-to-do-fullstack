const { Router } = require('express');
const { taskController } = require('./../controllers');

const taskRouter = Router();

taskRouter
  .route('/')
  .get(taskController.getTasks)
  .post(taskController.createTask);

taskRouter
  .route('/:taskId')
  .get(taskController.getTaskById)
  .patch(taskController.updateTaskById)
  .delete(taskController.deleteTask);

module.exports = taskRouter;
