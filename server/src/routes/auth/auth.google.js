const express = require("express");
const passport = require("passport");

const { getUserById } = require("../../models/users/users.model");

auth = express.Router();

require("dotenv").config();

const REACT_APP_IP =
  process.env.NODE_APP_ENV === "dev"
    ? "http://localhost:3000"
    : process.env.REACT_APP_IP;

auth.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

auth.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/failure",
    successRedirect: `${REACT_APP_IP}/dashboard`,
    session: true,
  }),
  (req, res) => {}
);

auth.get("/logout", (req, res) => {
  req.logOut();
  return res.redirect(`${REACT_APP_IP}`);
});

auth.get("/user", async (req, res) => {
  const user = await getUserById(req.user);
  return res.status(200).json(user);
});

module.exports = auth;
