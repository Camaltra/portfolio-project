const express = require("express");

const { httpGetAllHistory } = require("./history.controller");

const history = express.Router();

history.get("/", httpGetAllHistory);

module.exports = history;
