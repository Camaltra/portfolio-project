const http = require("http");

const app = require("./app");
const { mongoConnect } = require("./services/mongo");
const populateAllTasks = require("./models/tasks/load-data-tasks");

const PORT = 8000;

const createServer = async () => {
  await mongoConnect();
  await populateAllTasks();
  http.createServer(app).listen(PORT, () => {
    console.log(`Listen on port ${PORT}`);
  });
};

createServer();
