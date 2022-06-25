const mongoose = require("mongoose");

const historySchema = new mongoose.Schema({
  checkId: {
    type: Number,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  taskId: {
    type: String,
    required: true,
  },
  sectionId: {
    type: String,
    required: true,
  },
  userUsername: {
    type: String,
    required: true,
  },
  checkedTime: {
    type: Date,
    required: true,
  },
  checkDetails: [Object],
});

module.exports = mongoose.model("History", historySchema);
