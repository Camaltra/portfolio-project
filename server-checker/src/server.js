const http = require("http");

const app = require("./app");

const PORT = 8001;

const createServer = () => {
  http.createServer(app).listen(PORT, () => {
    console.log(`Listen on port ${PORT}`);
  });
};

createServer();
