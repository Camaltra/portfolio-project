const passport = require("passport");
const { Strategy } = require("passport-google-oauth20");

const User = require("../models/users/users.mongo");

require("dotenv").config();

const config = {
  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.CLIENT_SECRET,
};

const AUTH_OPTIONS = {
  callbackURL: "/auth/google/callback",
  clientID: config.CLIENT_ID,
  clientSecret: config.CLIENT_SECRET,
};

async function verifyCallback(_, __, profile, done) {
  if (profile) {
    console.log(profile.emails);
    const time = Date.now();
    const newUser = {
      id: profile.id,
      username: profile.name.givenName,
      email: profile.emails[0].value,
      creationDate: time,
      updatedDate: time,
      admin: false,
      tasksDone: [],
    };
    User.findOne({ id: newUser.id })
      .then((res) => {
        if (!res) {
          User.updateOne({ id: newUser.id }, newUser, { upsert: true }).then();
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }
  done(null, profile);
}

passport.use(new Strategy(AUTH_OPTIONS, verifyCallback));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  done(null, id);
});
