const { getConnection } = require("../connections/redis");

function setKey(key, value, time) {
  const redis = getConnection();
  return redis.set(key, JSON.stringify(value), "EX", time);
}

async function getValue(key) {
  try {
    const redis = getConnection();
    const res = await redis.get(key);
    return JSON.parse(res);
  } catch (err) {
    console.log(err);
    return null;
  }
}

function incr(key) {
  const redis = getConnection();
  return redis.incr(key);
}

function hSet(key, field, value) {
  const redis = getConnection();
  return redis.hset(key, field, value);
}

function expire(key, time) {
  const redis = getConnection();
  return redis.expire(key, time);
}

module.exports = {
  getValue,
  setKey,
  incr,
  hSet,
  expire,
};
