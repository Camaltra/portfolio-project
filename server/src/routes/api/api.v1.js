const express = require("express");

const tasksRouter = require("../tasks/tasks.router");
const usersRouter = require("../users/users.route");
const checkerRouter = require("../checker/checker.route");
const historyRouter = require("../history/history.route");
const emailRouter = require("../email/email.route");

const { getUserById } = require("../../models/users/users.model");

const api = express.Router();

async function checkIsAdmin(req, res, next) {
  const user = await getUserById(req.user);
  try {
    if (user !== {} && user.admin) {
      next();
    } else {
      return res.status(400).json({ error: "Can't access to history" });
    }
  } catch {
    return res.status(400).json({ error: "Can't access to history" });
  }
}

api.use("/tasks", tasksRouter);
api.use("/users", usersRouter);
api.use("/check", checkerRouter);
api.use("/email", emailRouter);
api.use("/history", checkIsAdmin, historyRouter);

module.exports = api;
