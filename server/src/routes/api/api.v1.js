const express = require("express");

const tasksRouter = require("../tasks/tasks.router");
const usersRouter = require("../users/users.route");

const api = express.Router();

api.use("/tasks", tasksRouter);
api.use("/users", usersRouter);

module.exports = api;
