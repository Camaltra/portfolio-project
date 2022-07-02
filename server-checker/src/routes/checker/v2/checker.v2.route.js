const express = require("express");

const { httpCheckTaskV2 } = require("./checker.v2.controller");

const checker = express.Router();

checker.post("/", httpCheckTaskV2);

module.exports = checker;
