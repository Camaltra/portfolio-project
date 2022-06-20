const express = require("express");

const {
  httpGetAllTasks,
  httpAddNewTask,
  httpGetTaskById,
} = require("./tasks.controller");

const tasks = express.Router();

tasks.get("/", httpGetAllTasks);
tasks.post("/", httpAddNewTask);
tasks.get("/:id", httpGetTaskById);

module.exports = tasks;
