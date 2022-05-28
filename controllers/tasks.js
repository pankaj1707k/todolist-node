const Task = require("../models/task");
const { asyncWrapper } = require("../middlewares");
const { createCustomError } = require("../error-control");

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json(tasks);
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

const getTask = asyncWrapper(async (req, res) => {
  const task = await Task.findById(req.params.id).exec();
  if (!task) {
    return next(createCustomError(`No task with id ${req.params.id}`, 404));
  }
  res.status(200).json(task);
});

const updateTask = asyncWrapper(async (req, res) => {
  const queryResponse = await Task.updateOne({ _id: req.params.id }, req.body);
  res.status(200).json(queryResponse);
});

const deleteTask = asyncWrapper(async (req, res) => {
  const queryResponse = await Task.deleteOne({ _id: req.params.id }).exec();
  res.status(200).json(queryResponse);
});

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
