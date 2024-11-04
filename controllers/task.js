const Task = require("../models/task");

const getTasksList = async (req, res) => {
  try {
    const tasks = await Task.find({});

    if (!tasks) {
      return res
        .status(404)
        .json({ success: false, message: "Tasks not found" });
    }

    return res.status(200).json({ success: true, data: tasks });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

const createTask = async (req, res) => {
  try {
    const { title } = req.body;
    const task = await Task.create({ title: title });

    if (!task) {
      return res.status(400).json({
        success: false,
        error: "Bad request",
        message: "Task not created",
      });
    }

    return res
      .status(200)
      .json({ success: true, message: "Task created successfull" });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

const getSingleTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.find({ _id: id });

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    return res.status(200).json({ success: true, data: task });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;
    const task = await Task.find({ _id: id });

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    const updatedTask = await Task.findByIdAndUpdate(
      { _id: id },
      { title },
      { new: true }
    );

    if (!updatedTask) {
      return res
        .status(400)
        .json({ success: false, message: "Task  not updated" });
    }

    return res
      .status(200)
      .json({ success: true, message: "Task updated successfully" });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Task.find({ _id: id });

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    const deleteTask = await Task.findByIdAndDelete({ _id: id });

    if (!deleteTask) {
      return res
        .status(400)
        .json({ success: false, message: "Task  not deleted updated" });
    }

    return res
      .status(200)
      .json({ success: true, message: "Task deleted successfully" });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

module.exports = {
  getTasksList,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
