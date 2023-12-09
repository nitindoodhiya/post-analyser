const express = require("express");

const mysql = require("./src/connections/mysql");
const apiHandlers = require("./src/api-handlers/api-handlers");

const PORT = process.env.PORT || 3000;
const app = express();

async function createConnections() {
  await mysql.assignConnection();
}

function startApp() {
  app.use(express.json());
  apiHandlers(app);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

createConnections();
startApp();
