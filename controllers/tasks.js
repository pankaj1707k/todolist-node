const Task = require("../models/task");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json(error);
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json(error);
  }
};

const getTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).exec();
    if (!task) {
      return res
        .status(404)
        .json({ msg: `Task with id: ${req.params.id} not found` });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateTask = async (req, res) => {
  try {
    const queryResponse = await Task.updateOne(
      { _id: req.params.id },
      req.body
    );
    res.status(200).json(queryResponse);
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteTask = async (req, res) => {
  try {
    const queryResponse = await Task.deleteOne({ _id: req.params.id }).exec();
    res.status(200).json(queryResponse);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
