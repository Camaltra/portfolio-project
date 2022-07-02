const express = require("express");

const apiV1 = require("./v1/api.v1.route");
const apiV2 = require("./v2/api.v2.route");

const api = express.Router();

api.use("/v1", apiV1);
api.use("/v2", apiV2);

module.exports = api;
