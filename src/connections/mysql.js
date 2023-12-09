const mysql = require("mysql2/promise");

let connection = null;

async function createConnection() {
  const newConnection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "testDB",
  });
  return newConnection;
}

async function assignConnection() {
  connection = await createConnection();
}

function getConnection() {
  return connection;
}

module.exports = {
  getConnection,
  createConnection,
  assignConnection,
};
