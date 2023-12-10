require("dotenv").config();
const express = require("express");

const mysql = require("./src/connections/mysql");
const redis = require("./src/connections/redis");
const apiHandler = require("./src/api-handler/api-handler");
const rateLimiter = require("./src/modules/rate-limiter");

const PORT = process.env.PORT || 3000;
const app = express();

async function createConnections() {
  await mysql.assignConnection();
  redis.assignConnection();
}

function startApp() {
  app.use(express.json());
  app.use(rateLimiter);
  apiHandler(app);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

createConnections();
startApp();
