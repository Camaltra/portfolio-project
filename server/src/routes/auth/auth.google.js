const express = require("express");
const passport = require("passport");

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
  (req, res) => {
    console.log("Google call us back");
  }
);

auth.get("/logout", (req, res) => {
  req.logOut();
  return res.redirect("http://localhost:3000/");
});

auth.get("/user", (req, res) => {
  res.send(req.user);
});

module.exports = auth;
