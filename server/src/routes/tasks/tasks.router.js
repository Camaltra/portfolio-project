const express = require("express");

const {
  httpGetAllTasks,
  httpAddNewTask,
  httpGetTaskById,
  httpGetRandomTask,
} = require("./tasks.controller");

const tasks = express.Router();

tasks.get("/", httpGetAllTasks);
tasks.post("/", httpAddNewTask);
tasks.get("/random", httpGetRandomTask);
tasks.get("/id/:id", httpGetTaskById);

module.exports = tasks;
