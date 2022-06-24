const express = require("express");

const checkerRouter = require("../checker/checker.route");

const api = express.Router();

api.use("/checker", checkerRouter);

module.exports = api;
