const express = require("express");

const {
  httpGetAllUsers,
  httpGetUserById,
  httpUpdateUserById,
} = require("./users.controller");

const users = express.Router();

//TO FORBIDDEN TO EVERYONE WHO ARE NOT ADMIN !!!!!!
users.get("/", httpGetAllUsers);
//TO ALLOW ONLY IF THE req.user == id in parameter
users.get("/:id", httpGetUserById);
users.put("/:id", httpUpdateUserById);

module.exports = users;
