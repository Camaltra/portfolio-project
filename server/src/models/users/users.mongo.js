const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  creationDate: {
    type: Date,
    required: true,
  },
  updatedDate: {
    type: Date,
    required: true,
  },
  admin: {
    type: Boolean,
    required: true,
  },
  tasksDone: [String],
  startingTime: {
    type: Date,
    required: false,
  },
  githubProfile: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("User", userSchema);
