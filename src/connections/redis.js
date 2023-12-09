const Redis = require("ioredis");

let redis = null;

function createConnection() {
  const newRedis = new Redis({
    host: "localhost",
    port: 6379,
    password: "qwerty",
  });
  return newRedis;
}

function assignConnection() {
  redis = createConnection();
  console.log("assigned redis");
}

function getConnection() {
  return redis;
}

module.exports = {
  assignConnection,
  createConnection,
  getConnection,
};
