const express = require("express");

const tasksRouter = require("../tasks/tasks.router");
const usersRouter = require("../users/users.route");
const checkerRouter = require("../checker/checker.route");

const api = express.Router();

api.use("/tasks", tasksRouter);
api.use("/users", usersRouter);
api.use("/check", checkerRouter);

module.exports = api;
