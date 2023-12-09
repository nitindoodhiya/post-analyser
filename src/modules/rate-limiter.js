const redis = require("../modules/redis");
const limit = 10;

async function rateLimiter(req, res, next) {
  const timestamp = Math.floor(new Date() / 1000);
  const ip = req.socket.remoteAddress;
  const key = `${ip}_${timestamp}`;

  const currentQPS = await redis.incr(key);
  if (currentQPS === 1) await redis.setKey(key, 1);
  if (currentQPS >= limit) {
    return res.status(429).json({ errMessage: "Too Many Requests" });
  }
  return next();
}

module.exports = rateLimiter;
