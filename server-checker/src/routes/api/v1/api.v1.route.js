const express = require("express");

const checkerRouter = require("../../checker/v1/checker.v1.route");

const apiV1 = express.Router();

apiV1.use("/checker", checkerRouter);

module.exports = apiV1;
