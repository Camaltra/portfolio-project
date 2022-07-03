const express = require("express");

const { httpSendSignUpEmail } = require("./email.controller");

email = express.Router();

email.post("/signUp", httpSendSignUpEmail);

module.exports = email;
