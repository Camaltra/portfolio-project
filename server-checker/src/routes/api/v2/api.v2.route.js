const express = require("express");

const checkerRouter = require("../../checker/v2/checker.v2.route");

const apiV2 = express.Router();

apiV2.use("/checker", checkerRouter);

module.exports = apiV2;
