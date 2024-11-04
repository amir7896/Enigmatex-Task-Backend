const express = require("express");
const router = express.Router();

const {
  getTasksList,
  getSingleTask,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/task");

router.get("/list", getTasksList);
router.get("/:id", getSingleTask);
router.post("/create", createTask);
router.put("/update/:id", updateTask);
router.delete("/delete/:id", deleteTask);

module.exports = router;
