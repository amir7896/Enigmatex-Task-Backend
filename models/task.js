const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, minlength: 3 },
    status: { type: String, default: "Active" },
  },
  { timestamps: true }
);

const Tasks = mongoose.model("Tasks", taskSchema);

module.exports = Tasks;
