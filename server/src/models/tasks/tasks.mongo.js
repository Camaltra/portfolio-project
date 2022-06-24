const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  sectionId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  exemple: {
    type: String,
    required: false,
  },
  taskPrototype: {
    type: String,
    required: true,
  },
  numberOfChecks: {
    type: Number,
    required: true,
  },
  clueOne: {
    type: String,
    required: true,
  },
  clueTwo: {
    type: String,
    required: true,
  },
  optimizeSolution: {
    type: String,
    required: true,
  },
  edgeCases: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Task", taskSchema);
