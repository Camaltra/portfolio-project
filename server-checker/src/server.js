const http = require("http");

const app = require("./app");

const PORT = process.env.NODE_APP_ENV === "dev" ? 8001 : 8000;

const createServer = () => {
  http.createServer(app).listen(PORT, () => {
    console.log(`Listen on port ${PORT}`);
  });
};

createServer();
