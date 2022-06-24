const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const helmet = require("helmet");
const passport = require("passport");
const cookieSession = require("cookie-session");

const authMiddleWare = require("./routes/auth/auth.google");
const apiRouter = require("./routes/api/api.v1");

require("dotenv").config();

require("./auth/passport.google.auth");

const app = express();

app.use(morgan("combined"));

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

app.use(helmet());

app.use(express.json());

app.use(
  cookieSession({
    name: "session",
    maxAge: 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEY_1, process.env.COOKIE_KEY_2],
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authMiddleWare);
app.use("/api/v1", apiRouter);

module.exports = app;
