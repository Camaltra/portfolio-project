const express = require("express");

const { httpGetCheckRequest } = require("./checker.controller");

checker = express.Router();

checker.get("/", httpGetCheckRequest);

module.exports = checker;
