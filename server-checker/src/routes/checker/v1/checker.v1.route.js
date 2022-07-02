const express = require("express");

const { httpCheckTask } = require("./checker.v1.controller");

const checker = express.Router();

checker.post("/", httpCheckTask);

module.exports = checker;
