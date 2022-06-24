const express = require("express");

const { httpCheckTask } = require("./checker.controller");

const checker = express.Router();

checker.post("/", httpCheckTask);

module.exports = checker;
