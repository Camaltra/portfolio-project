const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");

const apiRouter = require("./routes/api/api.v1.route");

const app = express();

app.use(morgan("combined"));

app.use(
  cors({
    origin: "http://localhost:8000",
  })
);

app.use(helmet());

app.use(express.json());

app.use("/api/v1", apiRouter);

module.exports = app;