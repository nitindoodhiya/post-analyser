const { getConnection } = require("../connections/redis");

async function setKey(key, value, options) {
  const redis = getConnection();
  return redis.set(key, value, "EX", 10);
}

async function getValue(key) {
  const redis = getConnection();
  return redis.get(key);
}

async function incr(key) {
  const redis = getConnection();
  return redis.incr(key);
}

module.exports = {
  getValue,
  setKey,
  incr,
};
