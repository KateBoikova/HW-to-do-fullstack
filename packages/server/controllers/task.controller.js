const _ = require('lodash');
const createError = require('http-errors');
const { Task } = require('./../models');

module.exports.getTasks = async (req, res, next) => {
  try {
    const foundTasks = await Task.findAll({
      raw: true,
      attributes: {
        exclude: ['id', 'createdAt', 'updatedAt', 'isDone'],
      },
    });
    res.status(200).send({ data: foundTasks });
  } catch (e) {
    next(e);
  }
};

module.exports.createTask = async (req, res, next) => {
  const { body } = req;
  try {
    const createdTask = await Task.create(body);
    const preparedTask = _.omit(createdTask.get(), [
      'id',
      'createdAt',
      'updatedAt',
    ]);
    res.status(201).send(preparedTask);
  } catch (e) {
    next(e);
  }
};

module.exports.getTaskById = async (req, res, next) => {
  const {
    params: { taskId },
  } = req;
  try {
    const foundTask = await Task.findAll({
      raw: true,
      where: { id: taskId },
      attributes: { exclude: ['id', 'createdAt', 'updatedAt'] },
    });
    if (foundTask) {
      return res.status(200).send(foundTask);
    }
    next(createError(404, 'Task not found'));
  } catch (e) {
    next(e);
  }
};

module.exports.updateTaskById = async (req, res, next) => {
  const {
    params: { taskId },
    body,
  } = req;
  try {
    const [taskCount, [updatedTask]] = await Task.update(body, {
      where: { id: taskId },
      returning: true,
    });
    if (taskCount > 0) {
      const preparedTask = _.omit(updatedTask.get(), [
        'id',
        'createdAt',
        'updatedAt',
      ]);
      return res.status(200).send(preparedTask);
    }
    next(createError(404, 'Task not found'));
  } catch (e) {
    next(e);
  }
};

module.exports.deleteTask = async (req, res, next) => {
  const {
    params: { taskId },
  } = req;
  try {
    const [foundTask] = await Task.findAll({ where: { id: taskId } });
    if (foundTask) {
      await foundTask.destroy();
      res.status(204).send();
    } else {
      res.status(404).send('Task not found');
    }
  } catch (e) {
    next(e);
  }
};
