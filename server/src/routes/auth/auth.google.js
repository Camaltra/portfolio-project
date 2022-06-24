const express = require("express");
const passport = require("passport");

const { getUserById } = require("../../models/users/users.model");

auth = express.Router();

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
    successRedirect: "http://localhost:3000/dashboard",
    session: true,
  }),
  (req, res) => {}
);

auth.get("/logout", (req, res) => {
  req.logOut();
  return res.redirect("http://localhost:3000/");
});

auth.get("/user", async (req, res) => {
  const user = await getUserById(req.user);
  return res.status(200).json(user);
});

module.exports = auth;
