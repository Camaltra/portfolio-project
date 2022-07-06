const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");

const apiRouter = require("./routes/api/api.route");

const app = express();

app.use(morgan("combined"));

const NODE_APP_IP =
  process.env.NODE_APP_ENV === "dev"
    ? "http://localhost:3000"
    : process.env.NODE_APP_IP;

app.use(
  cors({
    origin: NODE_APP_IP,
  })
);

app.use(helmet());

app.use(express.json());

app.use("/api", apiRouter);

module.exports = app;
