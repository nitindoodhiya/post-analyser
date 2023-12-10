const Redis = require("ioredis");

const { redis: redisConf } = require("../../conf");

let redis = null;

function createConnection() {
  try {
    const newRedis = new Redis({
      host: redisConf.host,
      port: redisConf.port,
      password: redisConf.password,
    });
    return newRedis;
  } catch (error) {
    console.log(`FATAL_ERROR_REDIS_CONNECTION_${JSON.stringify(error)}`);
  }
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
